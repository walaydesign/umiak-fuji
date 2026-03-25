AOS.init({ startEvent: "load" });
window.addEventListener("load", AOS.refresh);

fetch("header.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
    header();
  });

fetch("footer.html")
  .then((res) => res.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
    footer();
  });

function header() {
  // nav-item
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".nav-item").forEach((item) => {
    const href = item.getAttribute("href");
    console.log(href);
    if (href === currentPage) {
      item.classList.add("active");
    }
  });

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
}

function footer() {
  document.querySelector(".btn-top")?.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

window.addEventListener("scroll", function () {
  const headerContact = document.querySelector(".header-contact");
  const header = document.querySelector(".header");
  const main = document.querySelector(".main");

  const contactHeight = headerContact ? headerContact.offsetHeight : 0;
  const headerHeight = header ? header.offsetHeight : 0;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop >= contactHeight) {
    header.classList.add("fixed");
    main.style.paddingTop = headerHeight + "px";
  } else {
    header.classList.remove("fixed");
    main.style.paddingTop = "0px";
  }
});

window.addEventListener("resize", () => {
  window.dispatchEvent(new Event("scroll"));
});
