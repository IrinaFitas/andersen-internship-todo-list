export default class Item {
    constructor (text, isDone) {
        this.text = text;
        this.id = Date.now();
        this.isDone = isDone;
    }
}