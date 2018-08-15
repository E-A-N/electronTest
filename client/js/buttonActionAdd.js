module.exports = (target, amount) => {
   return (event) => {
       var content = JSON.parse(target.innerHTML) + amount;
       console.log("I am clicked!!",content);
       target.innerHTML = amount;
   }
}
