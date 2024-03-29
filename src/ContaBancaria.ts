import Imprimivel from './Imprimivel';

abstract class ContaBancaria implements Imprimivel {
	protected numeroConta: string;
	protected saldo: number;

	constructor(numeroConta: string, saldoInicial: number) {
		this.numeroConta = numeroConta;
		this.saldo = saldoInicial;
	}

	abstract sacar(valor: number): void;
	abstract depositar(valor: number): void;

	transferir(
		valor: number,
		contaTransferencia: ContaBancaria,
		mostrarMensagens: boolean = true
	) {
		if (this.saldo >= valor) {
			this.saldo -= valor;
			contaTransferencia.saldo += valor;
			if (mostrarMensagens) {
				console.log(
					`\nTransferência de R$${valor} realizada da conta ${this.numeroConta} para a conta ${contaTransferencia.numeroConta}`
				);
			}
		} else {
			if (mostrarMensagens) {
				console.log(
					`\nSaldo insuficiente na conta ${this.numeroConta} para realizar a transferência de R$${valor}`
				);
			}
		}
	}

	getSaldo(): number {
		return this.saldo;
	}

	getNumeroConta(): string {
		return this.numeroConta;
	}

	mostrarDados(): void {}
}

export default ContaBancaria;
