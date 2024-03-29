"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    contas;
    constructor() {
        this.contas = [];
    }
    inserir(conta) {
        this.contas.push(conta);
        console.log(`Conta ${conta.getNumeroConta()} criada com sucesso`);
    }
    remover(conta) {
        const ContaPraRemover = this.contas.findIndex((count) => count.getNumeroConta() === conta.getNumeroConta());
        if (ContaPraRemover !== -1) {
            this.contas.splice(ContaPraRemover, 1);
            console.log(`Conta ${conta.getNumeroConta()} removida com sucesso!`);
        }
        else {
            console.log(`Conta ${conta.getNumeroConta()} não foi encontrada ou não existe!`);
        }
    }
    procurarConta(numeroConta) {
        const contaEncontrada = this.contas.find((count) => count.getNumeroConta() === numeroConta);
        if (contaEncontrada) {
            console.log(`Conta ${numeroConta} encontrada no banco.`);
            return contaEncontrada;
        }
        else {
            console.log(`Conta ${numeroConta} não encontrada no banco.`);
            return null;
        }
    }
    mostrarDados() {
        console.log("CONTAS: ");
        this.contas.forEach(conta => {
            conta.mostrarDados();
        });
    }
}
exports.default = Banco;
