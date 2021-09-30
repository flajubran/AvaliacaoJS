/* Micro desafio - Passo 1
Crie um objeto aluno que tenha como atributos: nome (string),
quantidade de faltas (number) e notas (array de números).
Crie um construtor para ele e importe-o como o módulo aluno.*/

/*Micro desafio - Passo 2
Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas.
Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
*/

let aluno = {
    nome: "fulano",
    faltas: 5,
    notas: [7, 8, 6, 10]
}

function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function() {
        let n = (this.notas[0] + this.notas[1] + this.notas[2] + this.notas[3]) / 4;
        return n;
    }
    this.contFaltas = function(){
        this.faltas++;
    }
    this.addAluno = function(nome, faltas, notas) {
        return Aluno;
    }
    this.aprovacao = function(aluno) {
        return Aluno;
    }
}

// console.log(Aluno.addAluno("Ronaldo", 1, [2, 2, 2, 2]));


module.exports = Aluno;


/*Micro desafio - Passo 3
Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string),
nota de aprovação (number), faltas máximas (number) e uma lista de estudantes
(um array composto pelos alunos criados no passo 1).*/ 