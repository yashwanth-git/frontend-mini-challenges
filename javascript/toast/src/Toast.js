import { createEl, getEl } from "./utils.js";

export default class Toast {
  #position;
  #autoClose;
  #autoCloseInterval;
  #autoCloseId;
  #text;
  #toastEl;
  constructor(options) {
    this.#position = options?.position ?? "top-right";
    this.#autoCloseInterval = options?.autoCloseInterval ?? 2000;
    this.#text = options?.text ?? "This is a sample text";
    this.#autoClose = options?.autoClose ?? false;
    this.#toastEl = createEl("div", {
      class: "toast",
      role: "alert",
      "aria-label": this.#text,
    });
    requestAnimationFrame(() => {
      this.#toastEl.classList.add("show");
    });
    this.#toastEl.textContent = this.#text;
    this.init();
  }
  init() {
    const selector = `.toast-container[data-position="${this.#position}"]`;
    const container =
      getEl(selector) ||
      createEl("div", {
        "data-position": this.#position,
        class: "toast-container",
      });

    getEl("body").append(container);
    getEl(selector).append(this.#toastEl);

    if (this.#autoClose) {
      // To autoclose the toast
      if (this.#autoCloseId != null) clearTimeout(this.#autoCloseId);
      this.#autoCloseId = setTimeout(
        () => this.remove(),
        this.#autoCloseInterval
      );
    } else {
      // Manual close the toast
      this.#toastEl.addEventListener("click", () => {
        this.remove();
      });
    }
  }
  remove() {
    const container = this.#toastEl.parentElement;
    this.#toastEl.classList.remove("show");
    this.#toastEl.addEventListener("transitionend", () => {
      this.#toastEl.remove();
      if (container.hasChildNodes()) return;

      container.remove();
    });
  }
}
