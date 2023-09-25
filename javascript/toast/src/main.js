import Toast from "./Toast.js";

document.querySelector("button").addEventListener("click", () => {
  new Toast({
    text: "Hi! Welcome to your toast",
    position: "top-right",
    autoClose: true,
    autoCloseInterval: 4000,
  });
});
