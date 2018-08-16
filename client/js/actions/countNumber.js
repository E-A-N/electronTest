module.exports = (node, target, amount) => {
    node.onclick = () => {
        const content = JSON.parse(target.innerHTML) + amount;
        console.log("I am clicked!!",content);
        target.innerHTML = content;
    }
    return node;
}
