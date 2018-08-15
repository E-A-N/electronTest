module.exports = (type, target, amount) => {
    const addBtn = document.create("button");
    addBtn.innerHTML = type;
    addBtn.onClick = () => {
        var content = JSON.parse(target.innerHTML) + amount;
        target.innerHTML = amount;
    }
    return addBtn;
}
