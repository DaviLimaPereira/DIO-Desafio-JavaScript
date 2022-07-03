function somaNumeros(arr) {
    return arr.reduce(function(prev, current) {
        console.log(prev);
        console.log(current);
        return prev + current;
    });
}

const meuArray = [1,2];

const lista = [
    {
        name: 'sabão em pó',
        preco: 30
    },
    {
        name: 'cereal',
        preco: 12
    },
    {
        name: 'toalha',
        preco: 30
    }
];

const saldoDisponivel = 100;

function calculaSaldo(disponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log('Item ', index + 1);
        console.log('Saldo Disponivel: ',prev);
        console.log(current);
        return prev - current.preco;
    }, disponivel);
}



//console.log(somaNumeros(meuArray));
//console.log('Saldo Final: ',calculaSaldo(saldoDisponivel, lista));