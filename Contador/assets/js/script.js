var numExibidoHtml = document.getElementById('currentNumber');
var num = 0;

function increment() {
    num = num + 1;
    numExibidoHtml.innerHTML = num;
}

function decrement() {
    num = num - 1;
    numExibidoHtml.innerHTML = num;
}