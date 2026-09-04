/*
 * Theme switching: light / dark / follow-system.
 *
 * Loaded in <head> (not deferred) so the stored choice is applied to
 * <html> before first paint — otherwise the page flashes light before
 * going dark. Only the toggle button waits for DOMContentLoaded.
 *
 * Stored preference wins; with no stored preference the page follows
 * the OS setting and keeps following it live.
 */
(function () {
  const KEY = "pom2-theme";
  const root = document.documentElement;

  function stored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function apply(theme) {
    if (theme === "light" || theme === "dark") {
      root.setAttribute("data-theme", theme);
    } else {
      root.removeAttribute("data-theme"); // fall back to prefers-color-scheme
    }
  }

  // Runs immediately, before paint.
  apply(stored());

  function current() {
    const s = stored();
    if (s) return s;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function setTheme(theme) {
    try {
      if (theme === "system") localStorage.removeItem(KEY);
      else localStorage.setItem(KEY, theme);
    } catch (e) {
      /* private mode — theme still applies for this page */
    }
    apply(theme === "system" ? null : theme);
    updateButton();
  }

  let btn = null;

  function updateButton() {
    if (!btn) return;
    const isDark = current() === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
    btn.querySelector(".theme-toggle-icon").textContent = isDark ? "☀" : "☾";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header .header-inner");
    if (!header) return;
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    btn.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true">☾</span>';
    btn.addEventListener("click", () => {
      setTheme(current() === "dark" ? "light" : "dark");
    });
    header.appendChild(btn);
    updateButton();
  });

  // Keep following the OS while no explicit choice is stored.
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => {
    if (!stored()) updateButton();
  };
  if (mq.addEventListener) mq.addEventListener("change", onChange);
  else if (mq.addListener) mq.addListener(onChange);
})();
