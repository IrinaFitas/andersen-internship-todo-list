export default class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {                      //регистрируем событие
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }
    }

    trigger(eventName, data) {                 // дергаем его
        if (this.events[eventName]) {
            this.events[eventName].map( cb => {
                cb(data);
            }); 
        }
    }
}