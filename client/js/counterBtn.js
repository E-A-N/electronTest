module.exports = (type, target, amount) => {
    const addBtn = document.createElement("button");
    addBtn.innerHTML = type;
    addBtn.onClick = () => {
        var content = JSON.parse(target.innerHTML) + amount;
        console.log("I am clicked!!",content);
        target.innerHTML = amount;
    }
    return addBtn;
}
