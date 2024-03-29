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
        }
        else {
            console.log('Saldo insuficiente!');
        }
    }
    depositar(valor) {
        this.saldo += valor - this.taxaDeOperacao;
    }
    mostrarDados() {
        console.log(`\nConta Poupança - Número: ${this.numeroConta}, Saldo: R$${this.saldo}, Taxa de Operação: R$${this.taxaDeOperacao}`);
    }
}
exports.default = ContaPoupanca;
