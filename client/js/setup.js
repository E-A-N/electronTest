const path      = require("path");
const liveTyper = require("./client/js/liveType");
const adder     = require("./client/js/addButton");
const nodePlus  = require("./client/js/nodeAdd");

console.log(path);
const start = function() {
    liveTyper();
    adder();
    nodePlus();
}
