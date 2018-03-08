
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