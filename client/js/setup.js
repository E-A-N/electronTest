const liveTyper = require("./client/js/liveType");
const adder =     require("./client/js/addButton");
const addButton = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const start = () => {
    liveTyper();
    addButton.onclick = () => {
        adder();
    }
    subtractBtn.onclick = () => {
        adder(-1);
    }
}
