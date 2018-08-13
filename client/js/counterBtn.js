module.exports = (elm) => {
    const addBtn = document.create("button");
    return (amount) => {
        var content = JSON.parse(elm.innerHTML) + amount;
    }
}
