import Controller from "./Controller.js";
import Model from "./Model.js";
import View from "./View.js";
import "./../css/style.css";
import EventEmitter from "./EventEmitter.js";


let a = new Controller();
a.show();
let b = new Model();
b.show();
let c = new View();
c.render();
let ee = new EventEmitter();
ee.on( "change", function() {
    console.log("I am EventEmitter");
});

ee.trigger("change");