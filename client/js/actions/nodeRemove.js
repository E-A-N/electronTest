module.exports = (node) => {
    node.onclick = () => {
        var child = document.body.lastElementChild;
        if(child.getAttribute("class") === "counterBtn"){
            console.log(child);
            document.body.removeChild(child);
        }
    }

    return node;
}
