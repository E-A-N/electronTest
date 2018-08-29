module.exports = (region = document.body) => {

    return function(config){
        console.log("Doc is:", document.body);
        const node = document.createElement("div");
        const label = document.createElement("span");

        switch(config.action){
            case "count":
                label.innerHTML = "Counter: ";
                const counterDiv = document.createElement("span");
                const addBtn      = require("../elements/counterBtn")("+", counterDiv,  config.amount);
                const subtractBtn = require("../elements/counterBtn")("-", counterDiv, -config.amount);
                counterDiv.innerHTML = 0;
                label.appendChild(counterDiv);
                label.appendChild(addBtn);
                label.appendChild(subtractBtn);
                node.appendChild(label);
                node.setAttribute("class", "counterBtn");
            break;
        }

        console.log("Region is:", region);
        region.appendChild(node);
        return node;
    }
}
