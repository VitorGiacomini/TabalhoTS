"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    numeroConta;
    saldo;
    constructor(numeroConta, saldoInicial) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }
    transferir(valor, contaTransferencia) {
        if (this.saldo >= valor) {
            this.sacar(valor);
            contaTransferencia.depositar(valor);
            console.log(`Transferência de R$${valor} realizada da conta \n ${this.numeroConta} para a conta ${contaTransferencia.getNumeroConta()}`);
        }
        else {
            console.log(`Saldo de transferêmcia é insuficiente na conta ${this.numeroConta}`);
        }
    }
    getSaldo() {
        return this.saldo;
    }
    getNumeroConta() {
        return this.numeroConta;
    }
    mostrarDados() { }
}
exports.default = ContaBancaria;
