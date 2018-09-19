module.exports = (settings) => {
    const elmRegion = document.getElementById(settings.regionId);
    const actionGrant = require("../construction/actionGrant");
    let node;
    let config = {};
    switch(settings.type){
        case "incrementer":
            config.action = "count";
            config.actionSrc = "../actions/parseAdd";
            config.amount = 1;
            config.type   = "counterBtnAdd";
            config.msgID  = "msg";
            config.target = elmRegion;
            node = document.createElement("button");
            node.setAttribute("class", "incrementer");
            node.innerHTML = "Add +/- node";
        break;

        case "deleter":
            config.type = "deleteBtnAdd";
            config.actionSrc = "../actions/nodeRemove";
            config.target = document.getElementById("createRegion");
            node = document.createElement("button");
            node.setAttribute("class", "nodeDeleter");
            node.innerHTML = "Delete Last Node";
        break;
    }

    node = actionGrant(node, config);
    if(settings.id) {
        node.setAttribute("id", settings.id);
    }
    return node;
}
