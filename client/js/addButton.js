const adder = (amount = 1) => {

    var action = amount >= 0 ? "added" : "subtracted";
    var cnt = document.getElementById("countText");
    var nameInput = document.getElementById("nameField");
    cnt.innerHTML = JSON.parse(cnt.innerHTML) + amount;
    console.log(cnt.innerHTML);

    var msg = document.getElementById("msg");
    msg.innerHTML = amount + " has been " + action + " to the counter!"

    msg.innerHTML += "\nAlso, the shit you just said is " + nameInput.value;

    //eanDebug NOTE: make this sort of timer external so multiple things aren't resetting DOM message
//     setTimeout(function(){
//         msg.innerHTML = "Current Message!";
//     },2000)
}
