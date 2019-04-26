import Controller from "./Controller.js";
import EventEmitter from "./EventEmitter.js";
export default class View extends EventEmitter {
    constructor() {
        super();
        this.$list = document.querySelector(".list");
        this.$input = document.querySelector(".input");
        this.$addBtn = document.querySelector(".add-btn");
        this.addEvents();
        this.render();
    }

    get inputValue() {
        return this.$input.value;
    }
    
    get isEmptyValue() {
        return this.inputValueLength === 0 || !this.inputValue.trim();
     }

    set inputValue(value) {
        this.$input.value = value;
    }

    render(data) {
        this.on("renderList", (data) => {
            data.map( elem => {
                const li = document.createElement("li");
                li.textContent = elem.text;
                this.$list.appendChild(li);
            });
        });
    }
    
    renderItem(text) {
        const li = document.createElement("li");
        li.textContent = text;
        this.$list.appendChild(li); 
    }

    sendInput() {
        this.emit("itemWasAdded", this.inputValue);
        this.inputValue = "";
    }

    addEvents() {
        this.$input.addEventListener("keypress", (e) => {

            if (this.isEmptyValue) {
                return;
            }

            if (e.key === "Enter") {
                this.renderItem(this.$input.value);
                this.sendInput();
            }
        });
        this.$addBtn.addEventListener("click", (e) => {

            if (this.isEmptyValue) {
                return;
            }

            this.renderItem(this.$input.value);
            this.sendInput();
        });
    }
}