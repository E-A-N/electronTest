module.exports = (type, target, amount) => {
    const addBtn = document.create("button");
    addBtn.innerHTML = type;
    return (amount) => {
        var content = JSON.parse(target.innerHTML) + amount;
        addBtn.
    }
}
