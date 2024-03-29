"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    numeroConta;
    saldo;
    constructor(numeroConta, saldoInicial) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }
    transferir(valor, contaTransferencia, mostrarMensagens = true) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            contaTransferencia.saldo += valor;
            if (mostrarMensagens) {
                console.log(`\nTransferência de R$${valor} realizada da conta ${this.numeroConta} para a conta ${contaTransferencia.numeroConta}`);
            }
        }
        else {
            if (mostrarMensagens) {
                console.log(`\nSaldo insuficiente na conta ${this.numeroConta} para realizar a transferência de R$${valor}`);
            }
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
