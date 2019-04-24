import Controller from "./Controller.js";
import EventEmitter from "./EventEmitter.js";
export default class View extends EventEmitter {
    constructor() {
        super();
        this.$list = document.querySelector(".list");
        this.$input = document.querySelector(".input");
        this.$addBtn = document.querySelector(".add-btn");
    }
    
    render() {
        this.$list.innerHTML = `<p>It is alive!</p>`;
    }

    addItem() {
        super.trigger("itemWasAdded", this.$input.value);
    }
    
    log() {
        super.on("some", function() {
            console.log(12);
        });
        super.trigger("some");
    }

    // showEvent() {
    //     let ee = new EventEmitter();
    //     ee.on( "change", function() {
    //         console.log("I am EventEmitter");
    //     });

    //     ee.trigger("change");
    // }
}