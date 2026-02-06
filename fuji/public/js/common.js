fetch("header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
    header();
    updateHeaderActive();
  });

fetch("footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
    footer();
  });

function header() {
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

  // scroll + resize
  window.addEventListener("scroll", updateHeaderActive);
  window.addEventListener("resize", updateHeaderActive);
}

function footer() {
  document.querySelector(".btn-top")?.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function updateHeaderActive() {
  console.log("updateHeaderActive");
  const header = document.querySelector(".header");
  if (!header) return;

  if (document.body.classList.contains("no-banner")) {
      header.classList.add("scrolldown");
    
  } else {
    if (window.scrollY > 0) {
      header.classList.add("scrolldown");
    } else {
      header.classList.remove("scrolldown");
    }
  }
}
