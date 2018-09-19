module.exports = (node, config) => {
    node.onclick = () => {
        var child = config.target.lastElementChild;
        if(child.getAttribute("class") === "counterBtn"){
            console.log(child);
            config.target.removeChild(child);
        }
    }

    return node;
}
