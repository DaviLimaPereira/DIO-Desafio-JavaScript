const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome:'Miguel',
        nota: 4,
        turma: '2C',
    }
];

function alunosAprovados(array, media) {
    let aprovados = []; 

    for (let index = 0; index < array.length; index++) {
        const {nota, nome} = array[index];
        if (nota >= media) {
            aprovados.push(nome)   
        }
    }
    return aprovados;
}
/*
console.log(alunos);
console.log(alunosAprovados(alunos, 5));
*/

function calculeIdade(anos) {
    return 'Daqui a '+ anos + ' anos, ' + this.nome + ' terá ' +
    (this.idade + anos) + ' anos de idade';
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30,
}

const pessoa2 = {
    nome: 'Carla',
    idade: 26,
}

const animal = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
}

//console.log(calculeIdade.call(animal, 7));
console.log(calculeIdade.apply(pessoa1, [10]));