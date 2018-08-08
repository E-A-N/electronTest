module.exports = () => {
    const liveType = document.getElementById("liveType");
    liveType.oninput = () => {
        const nameInput = document.getElementById("nameField");
        const val = nameInput.value;
        let msgOut = document.getElementById("sideNote");
        msgOut.innerHTML = val;
    }
}
