const path      = require("path");
const liveTyper = require("./client/js/liveType");
const adder     = require("./client/js/addButton");
const nodePlus  = require("./client/js/nodeAdd");
const generate  = require("./client/js/addGenerator");
const elmRegion = document.getElementById("createRegion");
console.log(path);
const start = function() {
    const addButton = generate("incrementer");
    const deleteButton = generate("deleter")
    liveTyper();
    adder();
    nodePlus();
}
