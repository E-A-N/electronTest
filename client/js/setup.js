const liveTyper = require("./client/js/liveType");
const adder =     require("./client/js/addButton");
const addButton = this.document.getElementById("addBtn");
const subtractBtn = this.document.getElementById("subtractBtn");
const start = function() {
    liveTyper();
    addButton.onclick = () => {
        adder();
    }
    subtractBtn.onclick = () => {
        adder(-1);
    }
}
console.log(this);
