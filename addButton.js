const adder = (amount = 1) => {
    var cnt = document.getElementById("countText");
    cnt.innerHTML = JSON.parse(cnt.innerHTML) + amount;
    console.log(cnt.innerHTML);
}
