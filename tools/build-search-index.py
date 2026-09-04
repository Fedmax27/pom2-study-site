#!/usr/bin/env python3
"""
Build the site-wide search index.

Static site, no build step — so this is run by hand whenever content
changes, and its output (assets/search-index.json) is committed
alongside the pages.

    python3 tools/build-search-index.py

Each indexed entry is one *section* rather than one page, so a hit can
jump straight to the relevant heading anchor rather than dumping the
reader at the top of a long lecture.
"""

import html
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP_DIRS = {".git", "tools", "assets", "node_modules"}
# Pages that are pure navigation add noise without adding answers.
SKIP_FILES = {"index.html"} if False else set()

TAG_RE = re.compile(r"<[^>]+>")
WS_RE = re.compile(r"\s+")
SCRIPT_STYLE_RE = re.compile(r"<(script|style|svg)\b.*?</\1>", re.S | re.I)


def clean(fragment: str) -> str:
    """HTML fragment -> plain, collapsed text."""
    fragment = SCRIPT_STYLE_RE.sub(" ", fragment)
    text = TAG_RE.sub(" ", fragment)
    text = html.unescape(text)
    return WS_RE.sub(" ", text).strip()


def page_title(src: str) -> str:
    m = re.search(r"<title>(.*?)</title>", src, re.S | re.I)
    if not m:
        return "Untitled"
    # "Thyroid & Parathyroid Physiology | Week 1 | Endocrinology | POM2"
    return html.unescape(m.group(1)).split("|")[0].strip()


def page_context(src: str) -> str:
    """Breadcrumb trail minus Home, e.g. 'Endocrinology · Week 1'."""
    m = re.search(r'<nav class="breadcrumb">(.*?)</nav>', src, re.S)
    if not m:
        return ""
    parts = [p.strip() for p in clean(m.group(1)).split("/")]
    parts = [p for p in parts if p and p.lower() != "home"]
    return " · ".join(parts[:-1]) if len(parts) > 1 else " · ".join(parts)


def kind_for(rel: str) -> str:
    if rel.startswith("daily-case/") and rel != "daily-case/index.html":
        return "case"
    if "/exam/" in rel:
        return "exam"
    if rel.startswith("units/") and rel.count("/") >= 3:
        return "lecture"
    return "page"


def build():
    entries = []
    for path in sorted(ROOT.rglob("*.html")):
        rel = path.relative_to(ROOT).as_posix()
        if any(part in SKIP_DIRS for part in path.relative_to(ROOT).parts[:-1]):
            continue

        src = path.read_text(encoding="utf-8")
        title = page_title(src)
        context = page_context(src)
        kind = kind_for(rel)

        body = src.split("<main", 1)[-1]
        found = 0

        # One entry per section[id] so results deep-link to the heading.
        for sec_id, inner in re.findall(
            r'<section[^>]+id="([^"]+)"[^>]*>(.*?)</section>', body, re.S
        ):
            heading = ""
            hm = re.search(r"<h[23][^>]*>(.*?)</h[23]>", inner, re.S)
            if hm:
                heading = clean(hm.group(1))
            text = clean(inner)
            if len(text) < 40:
                continue
            found += 1
            entries.append(
                {
                    "t": heading or title,
                    "p": title,
                    "c": context,
                    "k": kind,
                    "u": f"{rel}#{sec_id}",
                    "x": text[:2500],
                }
            )

        # Daily Case slides are <section class="slide"> with no id — the
        # deck is JS-driven — so index each slide against the page URL.
        for inner in re.findall(
            r'<section class="slide"[^>]*>(.*?)</section>', body, re.S
        ):
            heading = ""
            hm = re.search(r"<h[123][^>]*>(.*?)</h[123]>", inner, re.S)
            if hm:
                heading = clean(hm.group(1))
            text = clean(inner)
            if len(text) < 40:
                continue
            found += 1
            entries.append(
                {
                    "t": heading or title,
                    "p": title,
                    "c": context,
                    "k": kind,
                    "u": rel,
                    "x": text[:2500],
                }
            )

        # Index the page itself when it has no sectioned content of its
        # own (unit indexes, archive listings) so titles still match.
        page_text = clean(body)
        if page_text and not found:
            entries.append(
                {
                    "t": title,
                    "p": title,
                    "c": context,
                    "k": kind,
                    "u": rel,
                    "x": page_text[:2500],
                }
            )

    out = ROOT / "assets" / "search-index.json"
    out.write_text(
        json.dumps({"entries": entries}, ensure_ascii=False, separators=(",", ":")),
        encoding="utf-8",
    )
    kb = out.stat().st_size / 1024
    by_kind = {}
    for e in entries:
        by_kind[e["k"]] = by_kind.get(e["k"], 0) + 1
    print(f"wrote {out.relative_to(ROOT)} — {len(entries)} entries, {kb:.1f} KB")
    for k, n in sorted(by_kind.items()):
        print(f"  {k:8s} {n}")
    return 0


if __name__ == "__main__":
    sys.exit(build())
