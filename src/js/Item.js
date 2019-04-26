export default class Item {
    constructor (text, isDone=false) {
        this.text = text;
        this.id = Date.now();
        this.isDone = isDone;
    }
}