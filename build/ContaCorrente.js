"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaCorrente extends ContaBancaria_1.default {
    limite;
    constructor(numeroConta, saldoInicial, limite) {
        super(numeroConta, saldoInicial);
        this.limite = limite;
    }
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Sacou ${valor} da conta corrente ${this.numeroConta}`);
            console.log(`Saldo restante: R$${this.saldo}`);
        }
        else if (this.saldo + this.limite >= valor) {
            const valorSaqueLimite = valor - this.saldo;
            this.saldo = 0;
            console.log(`Sacou ${valor} da conta corrente ${this.numeroConta} (com limite)`);
            console.log(`Disponivel na conta após o saque: R$${this.saldo}`);
            console.log(`Limite utilizado: R$${valorSaqueLimite}`);
        }
        else {
            console.log('Saldo insuficiente');
            console.log(`Saldo disponível na conta: R$${this.saldo}`);
            console.log(`Limite disponível para saque: R$${this.limite}`);
        }
    }
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depositou ${valor} na conta corrente ${this.numeroConta}, novo saldo é de R$ ${this.saldo}`);
    }
    mostrarDados() {
        console.log(`Conta Corrente - Número: ${this.numeroConta}, Saldo: R$${this.saldo}, Limite de crédito: R$${this.limite}`);
    }
}
exports.default = ContaCorrente;
