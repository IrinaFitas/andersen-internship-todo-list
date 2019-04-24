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
        // console.log(this.events);
        //this.events.on("renderList", this.render(list).bind(this));
    }
    getInputValue() {
        return this.$input.value;
    }

    render(list) {
        this.on("renderList", function(list) {
            list.map( elem => {
                console.log(elem);
                this.$list.innerHTML += `<li>elem</li>`;
            });
        }.bind(this));
    }

    addEvents() {
        this.$input.addEventListener("keypress", (e) => {
            if ((this.$input.value.length === 0 || !this.$input.value.trim())) {
                return;
            }
            if (e.key === "Enter") {
                this.trigger("itemWasAdded", this.getInputValue());
                this.$input.value = "";
            }
        });
        this.$addBtn.addEventListener("click", (e) => {
            this.trigger("itemWasAdded", this.getInputValue());
            this.$input.value = ""; 
        });
    }
}