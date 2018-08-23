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

            case "deleteBtn":

            break;
        }
    }
}
