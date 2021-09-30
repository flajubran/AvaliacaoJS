let Aluno = require("./alunoExport")

let curso = {
    nomeDoCurso: "Certified Tech Developer",
    notaDeAprovacao: 7,
    faltasMaximas: 2,
    listaDeAlunos: [
        new Aluno("Eduardo", 2, [7, 8, 8, 8]),
        new Aluno("Ederson", 1, [5, 6, 7, 8]),
        new Aluno("Flaviane", 1, [4, 5, 6, 7])],
    addAluno: function (aluno) {
        return this.listaDeAlunos.push(aluno);
    },
    aprovacao: function (aluno) {
        let porcentagem = this.notaDeAprovacao * 1.1;
        let estudante = this.listaDeAlunos[aluno];
        if ((estudante.calcularMedia(aluno) > this.notaDeAprovacao) && (estudante.faltas < this.faltasMaximas)) {
            return true;
        } else if ((estudante.faltas == this.faltasMaximas) && (estudante.calcularMedia(aluno) >= porcentagem)) {
            return true;
        } else {
            return false;
        }
    },
    aprovacaoAutomatica: function (lista) {
        let listaDeAprovados = [];
        for (let i = 0; i < lista.length; i++) {
            listaDeAprovados.push(this.aprovacao(i));
        }
        return listaDeAprovados;
    }
}

console.log(curso.aprovacaoAutomatica(curso.listaDeAlunos)); 