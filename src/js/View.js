import Controller from "./Controller.js";
export default class View {
    constructor() {
        this.$list = document.querySelector(".list");
    }
    
    render() {
        this.$list.innerHTML = `<p>It is alive!</p>`;
    }
}