module.exports = (type, id) => {
    let node;
    switch(type){
        case "incrementer":
            node = document.createElement("button");
            //node.setAttribute("class", "addBtn");
            node.innerHTML = "Add +/- node";
        break;

        case "deleter":
            node = document.createElement("button");
            //node.setAttribute("class", "subtractBtn");
            node.innerHTML = "Delete Last Node";
        break;
    }

    if(id) {
        node.setAttribute("id", id);
    }
    return node;
}
