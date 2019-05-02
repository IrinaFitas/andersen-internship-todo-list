import Controller from "./Controller.js";
import EventEmitter from "./EventEmitter.js";
export default class View extends EventEmitter {
    constructor() {
        super();
        this.$list = document.querySelector(".list");
        this.$input = document.querySelector(".input");
        this.$addBtn = document.querySelector(".add-btn");
        this.$activeCounter = document.querySelector(".counter");
        this.$btnShowAll = document.querySelector(".btn-show-all");
        this.$btnShowActive = document.querySelector(".btn-show-active");
        this.$btnShowCompleted = document.querySelector(".btn-show-completed");
        this.render();
        this.addEvents();
        this.showActiveCounter();
        this.showAll();
        this.showCompleted();
        this.showActiveTasks();
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

    createElements({text, id, isDone}) {
        const li = document.createElement("li");
        li.id = id;

        if (isDone) {
            li.classList.add("is-done");
        }

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
        span.textContent = text;
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        this.$list.appendChild(li);
    }

    render(data) {
        this.on("renderList", (data) => {
            data.map( elem => {
                this.createElements(elem);                
            });
        });
    }
    
    renderItem(data) {
        this.createElements(data);        
    }

    showAll() {
        this.$btnShowAll.addEventListener("click", (e) => {
            e.target.classList.add("btn-border");
            console.log("12");
            this.render();
        });
    }

    showActiveTasks(data) {
        this.on("showActive", (data) => {
            this.$btnShowActive.addEventListener("click", (e) => {
                e.target.classList.add("btn-border");
                // console.log("13");
                console.log(data);
            });
        });
    }

    showCompleted() {
        this.$btnShowCompleted.addEventListener("click", (e) => {
            e.target.classList.add("btn-border");
            console.log("14");
        });
    }

    sendInput(data) {
        this.emit("itemWasAdded", data);
        this.inputValue = "";
    }

    showActiveCounter(data) {
        this.on("showActive", (data) => {
            this.$activeCounter.textContent = `${data.length} left`;
        });
    }

    addEvents() {
        this.$input.addEventListener("keypress", (e) => {

            if (this.isEmptyValue) {
                return;
            }

            if (e.key === "Enter") {
                const data = {
                    text: this.$input.value,
                    id: Date.now()
                };

                this.renderItem(data);
                this.sendInput(data);
            }
        });
        this.$addBtn.addEventListener("click", (e) => {

            if (this.isEmptyValue) {
                return;
            }

            const data = {
                text: this.$input.value,
                id: Date.now()
            };

            this.renderItem(data);
            this.sendInput(data);
        });

        this.$list.addEventListener("click", (e) => {
            if (e.target.classList.contains("done-btn")) {
                this.emit("itemIsDone", e.target.parentElement.id);
                e.target.parentElement.classList.toggle("is-done");
            }
        });

        this.$list.addEventListener("click", (e) => {
            if (e.target.classList.contains("delete-btn")) {
                this.emit("itemIsDelete", e.target.parentElement.id);
                e.target.parentElement.remove();
            }
        });

        this.$list.addEventListener("click", (e) => {
            if (e.target.classList.contains("edit-btn")) {
                
                const input = document.createElement("input");
                input.type = "text";
                input.classList.add("edit-input");
                input.value = e.target.parentElement.children[0].textContent;
                e.target.parentElement.insertBefore(input, e.target);

                e.target.parentElement.children[0].hidden = true;
                e.target.parentElement.querySelectorAll("button").forEach( elem => {
                    elem.hidden = true;
                });

                input.addEventListener("keypress", (e) => {
                     
                    if (e.key === "Enter") {
                        const data = {
                            id: e.target.parentElement.id,
                            newValue: e.target.value
                        }

                        this.emit("itemIsEdited", data); 
                        e.target.parentElement.children[0].hidden = false;
                        e.target.parentElement.children[0].textContent = data.newValue;
                        e.target.parentElement.querySelectorAll("button").forEach( elem => {
                            elem.hidden = false;
                        }); 
                        e.target.remove();
                    }
                });
            }
        });
    }
}