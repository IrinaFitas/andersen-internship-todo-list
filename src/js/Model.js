import Item from "./Item.js";
export default class Model {
    constructor() {
        this.listItems = [];
        this.storage = window.localStorage;
    //    этза че,this.storage.clear(); 
    }

    get list() {
        if (this.storage.list) {
            return JSON.parse(this.storage.list);
        } else {
            return this.listItems;
        }
    }

    addItem(item) {
        item = new Item(item);
        this.listItems.push(item);
        this.storage.setItem("list", JSON.stringify(this.listItems));
        // console.log(this.storage.getItem("list"));
        //console.log(this.list); 
    }

    deleteItem(id) {
        this.listItems.splice(id, 1);
    }
    editItem() {}
    filterItem() {}
 }