// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixednav = header.offsetTop;
  const backtop = document.querySelector("#backtop");

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    backtop.classList.remove("hidden");
    backtop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    backtop.classList.remove("flex");
    backtop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// darkmode
const darktoggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darktoggle.addEventListener("click", function () {
  if (darktoggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// ppindah toggle
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darktoggle.checked = true;
} else {
  darktoggle.checked = false;
}
