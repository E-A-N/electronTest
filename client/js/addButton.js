module.exports = () => {
    const nodeBuilder = require("./nodeAdd")();
    const parseAdd      = require("./actions/parseAdd");
    const actionGranter = require("./construction/actionGrant");
    const msgNode = document.getElementById("countText");
    const noteNode = document.getElementById("msg");

    const addId = document.getElementById("counterAdd");
    const addButton = actionGranter(addId, "counterBtnAdd");
    const subtractId = document.getElementById("nodeDelete");
    const subtractBtn = document.getElementById("nodeDelete");
    // addButton.onclick = () => {
    //     parseAdd(msgNode, noteNode, 1);
    //     let config = {type: 'counter', amount: 1};
    //     var n = nodeBuilder(config);
    //     console.log(n);
    // }

    subtractBtn.onclick = () => {
        parseAdd(msgNode,noteNode, -1);
        var child = document.body.lastElementChild;
        if(child.getAttribute("class") === "counterBtn"){
            console.log(child);
            document.body.removeChild(child);
        }
    }
}
