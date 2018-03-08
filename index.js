
let orderNum = 0;

let chgOrder = (e) => {
    e.target.style.order = orderNum--;
};

let pink = document.getElementById('pink');
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let gray = document.getElementById('gray');

pink.addEventListener("click", chgOrder);
red.addEventListener("click", chgOrder);
blue.addEventListener("click", chgOrder);
green.addEventListener("click", chgOrder);
gray.addEventListener("click", chgOrder);


let marginLeft = (e) => {
    e.target.style = 'margin-left: 400%'
};

let deleteMl = (e) => {
    e.target.style = 'margin-left: 10px'
};

pink.addEventListener("mousedown", marginLeft);
pink.addEventListener("mouseup", deleteMl);
red.addEventListener("mousedown", marginLeft);
red.addEventListener("mouseup", deleteMl);
blue.addEventListener("mousedown", marginLeft);
blue.addEventListener("mouseup", deleteMl);
green.addEventListener("mousedown", marginLeft);
green.addEventListener("mouseup", deleteMl);
gray.addEventListener("mousedown", marginLeft);
gray.addEventListener("mouseup", deleteMl);