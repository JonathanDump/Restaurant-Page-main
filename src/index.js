import loadGreetingPage from "./greeting-page.js";
import loadMenuPage from "./menu.js";
import loadAboutPage from "./about.js";
import loadContactPage from "./contact.js";

const main = document.querySelector("#main");

const loads = {
  "#greeting": loadGreetingPage,
  "#menu": loadMenuPage,
  "#about": loadAboutPage,
  "#contact": loadContactPage,
};

const navButtons = Array.prototype.slice.call(
  document.querySelectorAll(".nav-bar li")
);
const logo = document.querySelector("#greeting");
navButtons.push(logo);

function loadPage(hash) {
  if (!loads[hash]) {
    throw new Error("Page notFound");
  }
  loads[hash]();
}

loadPage(document.location.hash || "#greeting");

navButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    navButtons.forEach((btn) => (btn.className = ""));
    if (e.currentTarget.id !== "greeting") {
      e.currentTarget.classList.add("button-active");
    }
    loadPage(`#${e.currentTarget.id}`);
    document.location.hash = e.currentTarget.id;
  })
);

console.log("test");
