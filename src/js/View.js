import Controller from "./Controller.js";
import EventEmitter from "./EventEmitter.js";
export default class View extends EventEmitter {
    constructor() {
        super();
        this.$list = document.querySelector(".list");
        this.$input = document.querySelector(".input");
        this.$addBtn = document.querySelector(".add-btn");
        this.addEvents();
    }
    getInputValue() {
        return this.$input.value;
    }

    render() {
        this.$list.innerHTML = `<p>It is alive!</p>`;
    }

    addItem() {
        super.trigger("itemWasAdded", this.$input.value);
    }

    addEvents() {
        this.$input.addEventListener("keypress", (e) => {
            if ((this.$input.value.length === 0 || !this.$input.value.trim())) {
                return;
            }
            if (e.key === "Enter") {
                this.trigger("itemWasAdded", this.getInputValue());
                this.$input.value = '';
            }
        });
        this.$addBtn.addEventListener("click", (e) => {
            this.trigger("itemWasAdded", this.getInputValue());
            this.$input.value = "";
        });
    }
}