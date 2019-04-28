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

    createElements(txt) {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#10006";
        deleteButton.classList.add("delete-btn");
        const doneButton = document.createElement("button");
        doneButton.innerHTML = "&#10004;";
        doneButton.classList.add("done-btn");
        const editButton = document.createElement("button");
        editButton.innerHTML = "&#9998;";
        editButton.classList.add("edit-btn");
        const span = document.createElement("span");
        span.textContent = txt;
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        this.$list.appendChild(li);
    }

    render(data) {
        this.on("renderList", (data) => {
            data.map( elem => {
                this.createElements(elem.text);                
            });
        });
    }
    
    renderItem(text) {
        this.createElements(text);        
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