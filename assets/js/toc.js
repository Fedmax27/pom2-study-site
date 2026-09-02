document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("lecture-toc");
  if (!nav) return;

  const list = nav.querySelector("ol");
  const sections = Array.from(document.querySelectorAll(".topic-content > section[id]"));
  if (!list || sections.length === 0) return;

  const links = [];
  sections.forEach((section) => {
    const heading = section.querySelector("h2");
    if (!heading) return;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${section.id}`;
    a.textContent = heading.textContent;
    li.appendChild(a);
    list.appendChild(li);
    links.push({ section, link: a });
  });

  if (links.length === 0) return;

  const setActive = (id) => {
    links.forEach(({ section, link }) => {
      link.classList.toggle("is-active", section.id === id);
    });
  };

  setActive(links[0].section.id);

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) {
        setActive(visible[0].target.id);
      }
    },
    { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
});
