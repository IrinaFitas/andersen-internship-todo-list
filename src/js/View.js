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
        this.on("renderList", function(list) {
            list.map( elem => {
                const li = document.createElement("li");
                li.textContent = elem;
                this.$list.appendChild(li);
            });
        }.bind(this));
    }
    
    renderItem() {
        const li = document.createElement("li");
        li.textContent = this.inputValue;
        this.$list.appendChild(li); 
    }

    addEvents() {
        this.$input.addEventListener("keypress", (e) => {
            if ((this.inputValue.length === 0 || !this.inputValue.trim())) {
                return;
            }
            if (e.key === "Enter") {
                this.trigger("itemWasAdded", this.inputValue);
                this.renderItem();
                this.inputValue = "";
            }
        });
        this.$addBtn.addEventListener("click", (e) => {
            this.trigger("itemWasAdded", this.inputValue);
            this.renderItem();
            this.inputValue = ""; 
        });
    }
}