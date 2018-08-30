module.exports = (target, amount = 0) => {
    const action = amount >= 0 ? "added" : "subtracted";
    target.innerHTML = JSON.parse(node.innerHTML) + amount;
    console.log(target.innerHTML);
    postNode.innerHTML = amount + " has been " + action + " to the counter!"
}
