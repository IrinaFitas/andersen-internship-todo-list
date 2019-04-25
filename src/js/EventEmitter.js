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
            this.events[eventName].forEach( cb => {
                cb(data);
            }); 
        }
    }
}

// let a = new EventEmitter();
// console.log(a);


// const EventEmitter = new Map([
//     ["events", {}],
//     ["on", function(eventName, callback) {                    
//         if (this.events[eventName]) {
//             this.events[eventName].push(callback);
//         } else {
//             this.events[eventName] = [callback];
//         }
//     }],
//     ["trigger", function(eventName, data) {                 
//         if (this.events[eventName]) {
//             this.events[eventName].forEach( cb => {
//                 cb(data);
//             }); 
//         }
//     }]
// ]);

// console.log(EventEmitter);
// export default EventEmitter;