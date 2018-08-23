module.exports = () => {
    const nodeBuilder = require("./nodeAdd")();
    const domAdder = require("./actions/domAdder");
    const msgNode = document.getElementById("countText");
    const noteNode = document.getElementById("msg");


    const addButton = document.getElementById("counterAdd");
    const subtractBtn = document.getElementById("nodeDelete");
    addButton.onclick = () => {
        domAdder(msgNode, noteNode, 1);
        let config = {type: 'counter', amount: 1};
        var n = nodeBuilder(config);
        console.log(n);
    }
    subtractBtn.onclick = () => {
        domAdder(msgNode,noteNode, -1);
        var child = document.body.lastElementChild;
        if(child.getAttribute("class") === "counterBtn"){
            console.log(child);
            document.body.removeChild(child);
        }
    }
}
