module.exports = (type, id) => {
    const elmRegion = document.getElementById("createRegion");
    let node;
    let config;    
    switch(type){
        case "incrementer":
            config.type = "counter";
            config.amount = 1;
            node = document.createElement("button");
            node.setAttribute("class", "incrementer");
            node.innerHTML = "Add +/- node";
        break;

        case "deleter":
            node = document.createElement("button");
            node.setAttribute("class", "nodeDeleter");
            node.innerHTML = "Delete Last Node";
        break;
    }

    if(id) {
        node.setAttribute("id", id);
    }
    return node;
}
