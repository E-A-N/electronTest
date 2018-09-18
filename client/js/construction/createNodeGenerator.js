module.exports = (settings) => {
    const elmRegion = document.getElementById(settings.regionId);
    let node;
    let config = {};
    switch(settings.type){
        case "incrementer":
            config.action = "count";
            config.amount = 1;
            config.type   = "counterBtnAdd";
            config.msgID  = "msg";
            config.target = elmRegion;
            node = document.createElement("button");
            node.setAttribute("class", "incrementer");
            node.innerHTML = "Add +/- node";
            node = require("../construction/actionGrant")(node, config);
        break;

        case "deleter":
            config.type = "btnDelete";
            config.target = document.body.lastElementChild;
            node = document.createElement("button");
            node.setAttribute("class", "nodeDeleter");
            node.innerHTML = "Delete Last Node";
            node = require("../actions/nodeRemove")(node);
        break;
    }

    if(settings.id) {
        node.setAttribute("id", settings.id);
    }
    return node;
}
