var numExibidoHtml = document.getElementById('currentNumber');
var numExibidoHtml2 = document.getElementById('currentNumber2');
var numExibidoHtml3 = document.getElementById('currentNumber3');
var num = 0;

function increment() {
    num = num + 1;
    numExibidoHtml.innerHTML = num;
}

function decrement() {
    num = num - 1;
    numExibidoHtml.innerHTML = num;
}

function incrementStop() {
    num = num + 1;
    numExibidoHtml2.innerHTML = num;
    if (num >= 10) {
        document.getElementById('adicionar2').disabled = true;
    } else {
        document.getElementsById("subtrair2").disabled = false;
    };
}

function decrementStop() {
    num = num - 1;
    numExibidoHtml2.innerHTML = num;
    if (num <= 0) {
        document.getElementById("subtrair2").disabled = true;
    } else {
        document.getElementById("adicionar2").disabled = false;
    };
}

function decrementRed() {
    num = num - 1;
    numExibidoHtml3.innerHTML = num;
    if(num < 0) {
        var negativo = "<b>"+num+"</b>";
        document.getElementById('currentNumber3').innerHTML = negativo;
        document.getElementById('currentNumber3').style.color = "red";
    }
}

function incrementRed() {
    num = num + 1;
    numExibidoHtml3.innerHTML = num;
    if(num < 0) {
        var negativo = "<b>"+num+"</b>";
        document.getElementById('currentNumber3').innerHTML = negativo;
        document.getElementById('currentNumber3').style.color = "red";
    }
}