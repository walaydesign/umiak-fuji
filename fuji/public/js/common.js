document.addEventListener("DOMContentLoaded", function () {
  // menu
  document
    .querySelector(".header-menu")
    ?.addEventListener("click", function () {
      this.classList.toggle("active");
      document.querySelector(".header-nav__list")?.classList.toggle("active");
      document.querySelector(".header")?.classList.toggle("open");
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

function updateHeaderActive() {
  const header = document.querySelector(".header");
  if (!header) return;

  if (!document.body.classList.contains('no-banner')) {
  if (window.scrollY > 0) {
    header.classList.add("scrolldown");
  } else {
    header.classList.remove("scrolldown");
  }

  }
}

// scroll + resize
window.addEventListener("scroll", updateHeaderActive);
window.addEventListener("resize", updateHeaderActive);

// 初次執行（避免一開始就在 scroll 狀態但沒套 class）
updateHeaderActive();