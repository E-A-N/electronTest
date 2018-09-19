module.exports = (node, config) => {

    const nodeAction = require(config.actionSrc);
    switch(config.type){
        case "counterBtnAdd":
            const nodeBuilder = require("../actions/nodeAdd")(config.target);
            const msgNode    = document.getElementById(config.msgID);
            node.onclick = () => {
                console.log("Node is", node);
                let config2 = {type: 'counter', amount: 1, action: "count"};
                var newNode = nodeBuilder(config2);
                nodeAction(newNode, msgNode, config.amount);
            }
        break;

        case "deleteBtnAdd":
            node = nodeAction(node, config);
            node.onclick = () => {
                var child = config.target.lastElementChild;
                if(child.getAttribute("class") === "counterBtn"){
                    console.log(child);
                    config.target.removeChild(child);
                }
            }
        break;
    }

    return node;
}
