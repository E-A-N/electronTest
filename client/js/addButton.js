module.exports = () => {
    const domAdder = (amt = 0) => {
        const action = amt >= 0 ? "added" : "subtracted";
        const cnt = document.getElementById("countText");
        cnt.innerHTML = JSON.parse(cnt.innerHTML) + amt;
        console.log(cnt.innerHTML);

        const msg = document.getElementById("msg");
        msg.innerHTML = amt + " has been " + action + " to the counter!"
    }

    const addButton = document.getElementById("addBtn");
    const subtractBtn = document.getElementById("subtractBtn");
    addButton.onclick = () => {
        domAdder(1);
        var n = require("./nodeAdd")()("counter");
        console.log(n);
    }
    subtractBtn.onclick = () => {
        domAdder(-1);
    }


}
