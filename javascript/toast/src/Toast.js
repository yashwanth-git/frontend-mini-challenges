import { createEl, getEl } from "./utils.js";

export default class Toast {
  #position;
  #autoCloseInterval;
  #text;
  constructor(options) {
    this.#position = options?.position ?? "top-right";
    this.#autoCloseInterval = options?.autoCloseInterval ?? 2000;
    this.#text = options?.text ?? "This is a sample text";
    this.init();
  }
  init() {
    const toast = createEl("div", {
      class: "toast",
      role: "alert",
      "aria-label": this.#text,
    });
    toast.textContent = this.#text;

    const selector = `.toast-container[data-position="${this.position}"]`;
    const container =
      getEl(selector) ||
      createEl("div", {
        "data-position": this.#position,
        class: "toast-container",
      });

    getEl("body").append(container);
    getEl(".toast-container").append(toast);
  }
  remove() {}
}

const toast = new Toast({
  position: "top-right",
  text: "Hi! Welcome to your toast",
});

console.log(toast);
