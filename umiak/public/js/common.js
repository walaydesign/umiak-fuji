AOS.init({ startEvent: "load" });
window.addEventListener("load", AOS.refresh);

document.addEventListener("DOMContentLoaded", function () {
  // menu
  document
    .querySelector(".header-menu")
    ?.addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector(".header-nav__list")?.classList.toggle("active");
    });

  // searchbar - open
  document
    .querySelector(".header-searchbar__search")
    ?.addEventListener("click", function () {
      const header = document.querySelector(".header");
      if (header && !header.classList.contains("searching")) {
        header.classList.add("searching");
      }
    });

  // searchbar - close
  document
    .querySelector(".header-searchbar__close")
    ?.addEventListener("click", function () {
      document.querySelector(".header")?.classList.remove("searching");
    });
});

document.querySelector(".btn-top")?.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
