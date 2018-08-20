module.exports = (type, target, amount) => {
    let addBtn = document.createElement("button");
    addBtn.innerHTML = type;
    addBtn = require("../actions/countNumber")(addBtn, target, amount);
    return addBtn;
}
