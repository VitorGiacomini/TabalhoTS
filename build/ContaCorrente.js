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
        }
        else if (this.saldo + this.limite >= valor) {
            const valorSaqueLimite = valor - this.saldo;
            this.saldo = 0;
        }
        else {
            console.log('Saldo insuficiente');
        }
    }
    depositar(valor) {
        this.saldo += valor;
    }
    mostrarDados() {
        console.log(`\nConta Corrente - Número: ${this.numeroConta}, Saldo: R$${this.saldo}, Limite de crédito: R$${this.limite}`);
    }
}
exports.default = ContaCorrente;
