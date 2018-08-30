module.exports = (node, config) => {

    console.log(config);
    switch(config.type){
        case "counterBtnAdd":
            const nodeBuilder = require("../actions/nodeAdd");
            const nodeAction = require("../actions/parseAdd");
            const msgNode    = document.getElementById("msg");
            node.onclick = () => {
                nodeAction(msgNode, config.amount);
                let config = {type: 'counter', amount: 1};
                var n = nodeBuilder(config);
                console.log(n);
            }
        break;

        case "btnDelete":
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
