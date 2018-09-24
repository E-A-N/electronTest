const path      = require("path");
const liveTyper = require("./client/js/liveType");
const generate  = require("./client/js/construction/createNodeGenerator");

console.log(path);
const start = function() {
    const genRegion = document.getElementById("generatorRegion");
    const addConfig = require("./client/js/config/generatorConfig")("incrGen");
    const addButton = generate(addConfig);

    const deleteConfig = require("./client/js/config/generatorConfig")("delGen");
    const deleteButton = generate(deleteConfig);

    const lifeBarConfig = require("./client/js/config/generatorConfig")("lifeBarGen");
    const lifeBarButton - generate(lifeBarConfig);
    genRegion.appendChild(addButton);
    genRegion.appendChild(deleteButton);
    genRegion.appendChild(lifeBarButton):
    liveTyper();
};
