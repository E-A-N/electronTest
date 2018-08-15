module.exports = (type, target, amount) => {
    const addBtn = document.createElement("button");
    addBtn.innerHTML = type;
    addBtn.onclick = () => {
        const content = JSON.parse(target.innerHTML) + amount;
        console.log("I am clicked!!",content);
        target.innerHTML = content;
    }
    return addBtn;
}
