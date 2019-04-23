import Controller from "./Controller.js";

export default function Model() {
    this.listItems = [];
}

Model.prototype.show = function() {
    console.log("I`m Model");
}