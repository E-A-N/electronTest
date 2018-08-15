module.exports = (type, target, amount) => {
    const addBtn = document.createElement("button");
    addBtn.innerHTML = type;
    addBtn.onClick = () => {
        var content = JSON.parse(target.innerHTML) + amount;
        target.innerHTML = amount;
    }
    return addBtn;
}
