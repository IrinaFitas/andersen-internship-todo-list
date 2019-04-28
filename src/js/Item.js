export default class Item {
    constructor (text, id=null, isDone=false) {
        this.text = text;
        this.id = id;
        this.isDone = isDone;
    }
}