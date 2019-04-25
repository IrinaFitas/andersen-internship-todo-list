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
        
    set inputValue(value) {
        this.$input.value = value;
    }

    render() {
        this.on("renderList", (list) => {
            list.map( elem => {
                const li = document.createElement("li");
                li.textContent = elem;
                this.$list.appendChild(li);
            });
        });
    }
    
    renderItem() {
        const li = document.createElement("li");
        li.textContent = this.inputValue;
        this.$list.appendChild(li); 
    }

    sendInput() {
        this.emit("itemWasAdded", this.inputValue);
        this.inputValue = "";
    }

    checkInput() {
        if ((this.inputValue.length === 0 || !this.inputValue.trim())) {
            return;
        }
    }

    addEvents() {
        this.$input.addEventListener("keypress", (e) => {
            this.checkInput();
            if (e.key === "Enter") {
                this.renderItem();
                this.sendInput();
            }
        });
        this.$addBtn.addEventListener("click", (e) => {
            this.checkInput();
            this.renderItem(); 
            this.sendInput();
        });
    }
}