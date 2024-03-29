"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContaBancaria_1 = __importDefault(require("./ContaBancaria"));
class ContaPoupanca extends ContaBancaria_1.default {
    taxaDeOperacao;
    constructor(numeroConta, saldoInicial, taxaDeOperacao) {
        super(numeroConta, saldoInicial);
        this.taxaDeOperacao = taxaDeOperacao;
    }
    sacar(valor) {
        if (this.saldo >= valor + this.taxaDeOperacao) {
            this.saldo -= valor + this.taxaDeOperacao;
            console.log(`Sacou R$${valor} da conta poupança número ${this.numeroConta} 
				a taxa de operação foi: R$${this.taxaDeOperacao}`);
            console.log(`Saldo restante: R$${this.saldo}`);
        }
        else {
            console.log('Saldo insuficiente!');
        }
    }
    depositar(valor) {
        this.saldo += valor - this.taxaDeOperacao;
        console.log(`Depositou R$${valor} na conta poupança número ${this.numeroConta}, novo saldo é de R$ ${this.saldo} a taxa de operação foi: R$${this.taxaDeOperacao}`);
    }
    mostrarDados() {
        console.log(`Conta Poupança - Número: ${this.numeroConta}, Saldo: R$${this.saldo}, Taxa de Operação: R$${this.taxaDeOperacao}`);
    }
}
exports.default = ContaPoupanca;
