/* Dot rail tracks the section in view. */
(function () {
  const dots = [...document.querySelectorAll(".rail a")];
  const map = new Map(dots.map(d => [d.getAttribute("href").slice(1), d]));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      dots.forEach(d => d.classList.remove("on"));
      const d = map.get(e.target.id); if (d) d.classList.add("on");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
})();
