module.exports = () => {

    return function(type, id){
        console.log("Doc is:", document.body);
        const node = document.createElement("div");
        const label = document.createElement("span");

        switch(type){
            case "counter":
                label.innerHTML = "Counter: ";
                const counterDiv = document.createElement("span");
                const addBtn      = require("./counterBtn")("+", counterDiv,  1);
                const subtractBtn = require("./counterBtn")("-", counterDiv, -1);
                //addBtn.onclick
                counterDiv.innerHTML = 0;
                label.appendChild(counterDiv);
                label.appendChild(addBtn);
                label.appendChild(subtractBtn);
                node.appendChild(label)
            break;
        }


        document.body.appendChild(node);
        return node;
    }
}
