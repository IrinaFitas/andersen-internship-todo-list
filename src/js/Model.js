import Item from "./Item.js";
export default class Model {
    constructor() {
        this.listItems = [];
    }

    addItem(item) {
        item = new Item(item);
        this.listItems.push(item);
    }

    deleteItem() {}
    editItem() {}
 }