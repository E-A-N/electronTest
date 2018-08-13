module.exports = () => {

    return function(type, id){
        console.log("Doc is:", document.body);
        const node = document.createElement("div");
        const label = document.createElement("span");
        switch(type){
            case "counter":
                label.innerHTML = "Counter: ";
                const addBtn = require("counterBtn")("+")
                addBtn.innerHTML = "+";
            break;
        }


        document.body.append(node);
    }
}
