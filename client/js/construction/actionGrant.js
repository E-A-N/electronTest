module.exports = () => {

    return (node) => {

        switch(node.type){
            case "counterBtnAdd":
                node.onclick = () => {
                    domAdder(msgNode, noteNode, 1);
                    let config = {type: 'counter', amount: 1};
                    var n = nodeBuilder(config);
                    console.log(n);
                }
            break;

            case "btnDelete":
                node.onclick = () => {
                    var child = document.body.lastElementChild;
                    if(child.getAttribute("class") === "counterBtn"){
                        console.log(child);
                        document.body.removeChild(child);
                    }
                }
            break;
        }
    }
}
