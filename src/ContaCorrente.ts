import ContaBancaria from './ContaBancaria';
import Imprimivel from './Imprimivel';
class ContaCorrente extends ContaBancaria implements Imprimivel {
    private limite: number;

    constructor(numeroConta: string, saldoInicial: number, limite: number) {
        super(numeroConta, saldoInicial);
        this.limite = limite;
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else if (this.saldo + this.limite >= valor) {
            const valorSaqueLimite = valor - this.saldo;
            this.saldo = 0;
        } else {
            console.log('Saldo insuficiente');
        }
    }

    depositar(valor: number): void {
        this.saldo += valor;
    }

    mostrarDados(): void {
        console.log(
            `\nConta Corrente - Número: ${this.numeroConta}, Saldo: R$${this.saldo}, Limite de crédito: R$${this.limite}`
        );
    }
}

export default ContaCorrente;
