//solução #1 de palindromo
function verificaPalindromo(string) {
    if (!string) return "string inexistente";

    return string.split("").reverse().join("") === string;
}

//solucao #2 de palindromo
function verificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}


function substituirPares(array) {
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero");
        } else if(array[i] % 2 === 0) {
            console.log("substituindo", array[i] ,"por 0...");
            array[i] = 0;
        };
    };
    return array;
}
/*
let array = [1,2,3,4,5,6,7];

substituirPares(array);
console.log(array); */
const meuObjeto = {chave: valor}

//console.log(meuObjeto.chave);
console.log(meuObjeto[chave]);