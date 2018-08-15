module.exports = () => {

    return function(type, id){
        console.log("Doc is:", document.body);
        const node = document.createElement("div");
        const label = document.createElement("span");

        switch(type){
            case "counter":
                label.innerHTML = "Counter: ";
                const counterDiv = document.createElement("div");
                const addBtn      = require("counterBtn")("+", counterDiv,  1);
                const subtractBtn = require("counterBtn")("-", counterDiv, -1);

                counterDiv.innerHTML = 0;
            break;
        }


        document.body.append(node);
    }
}
