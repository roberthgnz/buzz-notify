import Notify from "https://cdn.skypack.dev/@reliutg/buzz-notify";
import "https://cdn.skypack.dev/@reliutg/buzz-notify/css/index.css";

let count = 1;

function createNotification({ currentTarget }) {
  const options = Object.assign({}, currentTarget.dataset);
  Notify({ ...options, title: `Notification ${count}` });
  count++;
}

const buttons = document.querySelectorAll(".buttons button");

Array.from(buttons).forEach((button) =>
  button.addEventListener("click", createNotification)
);

/**
 * DARK MODE
 */
const body = document.body;
const darkModeToggle = document.getElementById("dark-mode");
const darkModeToggleIcon = darkModeToggle.querySelector("img");

const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedDarkMode = localStorage.getItem("buzz-notify-dark-mode");

if (savedDarkMode === "dark") {
  body.classList.add("dark");
  darkModeToggleIcon.src = "./icons/sun.svg";
} else if (isDark) {
  body.classList.add("dark");
  darkModeToggleIcon.src = "./icons/sun.svg";
} else {
  darkModeToggleIcon.src = "./icons/moon.svg";
}

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("buzz-notify-dark-mode", isDark ? "dark" : "light");
  darkModeToggleIcon.src = isDark ? "./icons/sun.svg" : "./icons/moon.svg";
});
