document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".main-navigation");
  const header = document.querySelector(".site-header");

  if (!toggle || !menu) return;

  function closeMenu() {
    toggle.classList.remove("is-open");
    menu.classList.remove("is-open");
    header?.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }

  toggle.addEventListener("click", function () {
    const isOpen = menu.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    header?.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (event) {
    if (!header?.contains(event.target)) closeMenu();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 700) closeMenu();
  });
});
