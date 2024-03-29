import ContaBancaria from './ContaBancaria';
import Imprimivel from './Imprimivel';
class ContaPoupanca extends ContaBancaria implements Imprimivel {
	private taxaDeOperacao: number;

	constructor(
		numeroConta: string,
		saldoInicial: number,
		taxaDeOperacao: number
	) {
		super(numeroConta, saldoInicial);
		this.taxaDeOperacao = taxaDeOperacao;
	}

	sacar(valor: number): void {
		if (this.saldo >= valor + this.taxaDeOperacao) {
			this.saldo -= valor + this.taxaDeOperacao;
		} else {
			console.log('Saldo insuficiente!');
		}
	}

	depositar(valor: number): void {
		this.saldo += valor - this.taxaDeOperacao;
	}

	mostrarDados(): void {
		console.log(
			`\nConta Poupança - Número: ${this.numeroConta}, Saldo: R$${this.saldo}, Taxa de Operação: R$${this.taxaDeOperacao}`
		);
	}
}

export default ContaPoupanca;
