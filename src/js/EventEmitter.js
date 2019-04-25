export default class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    on(eventName, callback) {
        if (!(this.events.has(eventName))) {
            this.events.set(eventName, []);
        }
        this.events.get(eventName).push(callback);
    }

    emit(eventName, payload) {
        const invokedEvents = this.events.get(eventName);
        if (invokedEvents.length > 0) {
            invokedEvents.forEach((event) => {
                event(payload);
            });
            return true;
        }

        return false;
    }
}