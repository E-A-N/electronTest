module.exports = () => {
    const nodeBuilder = require("./nodeAdd")();
    const msgNode = document.getElementById("countText");
    const noteNode = document.getElementById("msg");
    const domAdder = (node, postNode, amt = 0) => {
        const action = amt >= 0 ? "added" : "subtracted";
        node.innerHTML = JSON.parse(node.innerHTML) + amt;
        console.log(node.innerHTML);
        postNode.innerHTML = amt + " has been " + action + " to the counter!"
    }

    const addButton = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
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
