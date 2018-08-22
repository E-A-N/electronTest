module.exports = (type, id) = {
    let node;
    switch(type){
        case "addBtn":
            node = document.createElement("button");
            node.setAttribute("class", "addBtn");
            node.innerHTML = "Add 1 to Count";
        break;

        case "subtractBtn":
            node = document.createElement("button");
            node.setAttribute("class", "subtractBtn");
            node.innerHTML = "Take 1 from count";
        break;
    }

    return node;
}
