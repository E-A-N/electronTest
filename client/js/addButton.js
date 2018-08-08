module.exports = (amount = 1) => {

    const action = amount >= 0 ? "added" : "subtracted";
    const cnt = document.getElementById("countText");
    cnt.innerHTML = JSON.parse(cnt.innerHTML) + amount;
    console.log(cnt.innerHTML);

    const msg = document.getElementById("msg");
    msg.innerHTML = amount + " has been " + action + " to the counter!"
}
