const path      = require("path");
const liveTyper = require("./client/js/liveType");
const generate  = require("./client/js/construction/createNodeGenerator");

console.log(path);
const start = function() {
    const genRegion = document.getElementById("generatorRegion");
    const addConfig = {
        regionId: "createRegion",
        type    : "incrementer",
        id      : "counterAdd"
    };
    const addButton = generate(addConfig);
    const deleteConfig = {
        regionId: "createRegion",
        type: "deleter",
        id  : "nodeDelete"
    }
    const deleteButton = generate(deleteConfig);
    genRegion.appendChild(addButton);
    genRegion.appendChild(deleteButton);
    liveTyper();
};
