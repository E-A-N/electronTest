module.exports = (type, id) = {
    let node;
    switch(type){
        case "incrementer":
            node = document.createElement("button");
            //node.setAttribute("class", "addBtn");
            node.innerHTML = "Add incrementer node";
        break;

        case "deleter":
            node = document.createElement("button");
            //node.setAttribute("class", "subtractBtn");
            node.innerHTML = "Delete Node";
        break;
    }

    if(id) {
        node.setAttribute("id", id);
    }
    return node;
}
