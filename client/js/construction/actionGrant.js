module.exports = () => {
        (node, type) => {

            switch(type){
                case "counterBtnAdd":
                    const nodeBuilder = require("../nodeAdd");
                    const nodeAction = require("../actions/parseAdd");
                    const msgNode    = document.getElementById("msg");
                    node.onclick = () => {
                        nodeAction(msgNode, 1);
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
