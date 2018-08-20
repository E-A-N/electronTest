module.exports = () => {

    return function(config){
        console.log("Doc is:", document.body);
        const node = document.createElement("div");
        const label = document.createElement("span");

        switch(config.type){
            case "counter":
                label.innerHTML = "Counter: ";
                const counterDiv = document.createElement("span");
                const addBtn      = require("./elements/counterBtn")("+", counterDiv,  config.amount);
                const subtractBtn = require("./elements/counterBtn")("-", counterDiv, -config.amount);
                counterDiv.innerHTML = 0;
                label.appendChild(counterDiv);
                label.appendChild(addBtn);
                label.appendChild(subtractBtn);
                node.appendChild(label);
                node.setAttribute("class", "counterBtn");
            break;
        }


        document.body.appendChild(node);
        return node;
    }
}
