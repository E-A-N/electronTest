module.exports = () => {
        (node, config) => {

            switch(config.type){
                case "counterBtnAdd":
                    const nodeBuilder = require("../nodeAdd");
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
                        var child = document.body.lastElementChild;
                        if(child.getAttribute("class") === "counterBtn"){
                            console.log(child);
                            document.body.removeChild(child);
                        }
                    }
                break;
            }

            return node;
    }
}
