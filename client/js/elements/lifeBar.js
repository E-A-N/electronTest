module.exports = (name, type, props) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContex("2d");
    const x = props.x ? props.x : 0;
    const y = props.y ? props.y : 0;
    const width = props.width ? props.width : 100;
    const height = props.height ? props.height : 100;
    //canvas.innerHTML = type
    //addBtn = require("../actions/countNumber")(addBtn, target, amount);
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height)
    return canvas;
}
