import { createEl, getEl } from "./utils.js";

export default class Toast {
  #position;
  #autoCloseInterval;
  #text;
  #toastEl;
  constructor(options) {
    this.#position = options?.position ?? "top-right";
    this.#autoCloseInterval = options?.autoCloseInterval ?? 2000;
    this.#text = options?.text ?? "This is a sample text";
    this.#toastEl = createEl("div", {
      class: "toast",
      role: "alert",
      "aria-label": this.#text,
    });
    this.#toastEl.textContent = this.#text;
    this.init();
  }
  init() {
    const selector = `.toast-container[data-position="${this.position}"]`;
    const container =
      getEl(selector) ||
      createEl("div", {
        "data-position": this.#position,
        class: "toast-container",
      });

    getEl("body").append(container);
    getEl(".toast-container").append(this.#toastEl);
  }
  remove() {
    this.#toastEl.remove();
  }
}

const toast = new Toast({
  position: "top-right",
  text: "Hi! Welcome to your toast",
});

setTimeout(() => {
  toast.remove();
}, 1000);
