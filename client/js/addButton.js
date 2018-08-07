const adder = (amount = 1) => {

    var action = amount >= 0 ? "added" : "subtracted";
    var cnt = document.getElementById("countText");
    cnt.innerHTML = JSON.parse(cnt.innerHTML) + amount;
    console.log(cnt.innerHTML);

    var msg = document.getElementById("msg");
    msg.innerHTML = amount + " has been " + action + " to the counter!"

    //eanDebug NOTE: make this sort of timer external so multiple things aren't resetting DOM message
//     setTimeout(function(){
//         msg.innerHTML = "Current Message!";
//     },2000)
}

const live = () => {
    var liveType = document.getElementById("liveType");
    var nameInput = document.getElementById("nameField");
    var val = nameInput.value;
    var msgOut = document.getElementById("sideNote").innerHTML;
    liveType.oninput = () => {
        msgOut = val;
    }
}

live();
