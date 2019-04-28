import Item from "./Item.js";
export default class Model {
    constructor() {
        this.listItems = Model.getListFromStorage(); 

    }

    get list() {
        const listFromStorage = window.localStorage.getItem("list");
        return listFromStorage ? JSON.parse(listFromStorage) : this.listItems;
    }

    static getListFromStorage() {
        const listFromStorage = window.localStorage.getItem("list");
        return listFromStorage ? JSON.parse(listFromStorage) : [];
    }

    addItem(item) {
        item = new Item(item);
        this.listItems.push(item);
        window.localStorage.setItem("list", JSON.stringify(this.listItems));
    }

    deleteItem(id) {
        this.listItems.splice(id, 1);
        window.localStorage.setItem("list", JSON.stringify(this.listItems));
    }
    editItem() {}
    filterItem() {}
 }