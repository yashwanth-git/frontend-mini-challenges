import Toast from "./Toast.js";

document.querySelector("button").addEventListener("click", () => {
  new Toast({
    text: "Hi! Welcome to your toast",
    position: "top-left",
    autoClose: true,
    autoCloseInterval: 5000,
    showProgress: true
  });
});
