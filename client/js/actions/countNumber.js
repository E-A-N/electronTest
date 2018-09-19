module.exports = (node, target, amount) => {
    node.onclick = () => {
        const content = JSON.parse(target.innerHTML) + amount;
        target.innerHTML = content;
    }
    return node;
}
