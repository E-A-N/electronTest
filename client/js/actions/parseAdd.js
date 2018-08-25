module.exports = (node, amount = 0) => {
    const action = amount >= 0 ? "added" : "subtracted";
    node.innerHTML = JSON.parse(node.innerHTML) + amount;
    console.log(node.innerHTML);
    postNode.innerHTML = amount + " has been " + action + " to the counter!"
}
