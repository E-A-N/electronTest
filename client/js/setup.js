const path      = require("path");
const liveTyper = require("./client/js/liveType");
const adder     = require("./client/js/addButton");
const generate  = require("./client/js/construction/createNodeGenerator");

console.log(path);
const start = function() {
    const genRegion = document.getElementById("generatorRegion");
    const addButton = generate("incrementer","counterAdd");
    const deleteButton = generate("deleter", "nodeDelete");
    genRegion.appendChild(addButton);
    genRegion.appendChild(deleteButton);
    liveTyper();
    adder();
}
6
