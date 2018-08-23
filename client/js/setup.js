const path      = require("path");
const liveTyper = require("./client/js/liveType");
const adder     = require("./client/js/addButton");
const nodePlus  = require("./client/js/nodeAdd");
const generate  = require("./client/js/addGenerator");

console.log(path);
const start = function() {
    const elmRegion = document.getElementById("createRegion");
    const addButton = generate("incrementer","counterAdd");
    const deleteButton = generate("deleter", "nodeDelete");
    elmRegion.appendChild(addButton);
    elmRegion.appendChild(deleteButton);
    liveTyper();
    adder();
    nodePlus();
}
