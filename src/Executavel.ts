import promptSync from 'prompt-sync';
import Banco from './Banco';
import ContaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';

const prompt = promptSync();
class Menu {
	private banco: Banco;

	constructor() {
		this.banco = new Banco();
	}

	exibeMenu(): void {
		while (true) {
			console.log('\n======== MENU =========');
			console.log(' _____________________');
			console.log('|1 - Criar Conta      |');
			console.log('|____________________ |');
			console.log('|2 - Selecionar Conta |');
			console.log('|____________________ |');
			console.log('|3 - Remover Conta    |');
			console.log('|____________________ |');
			console.log('|4 - Gerar Relatório  |');
			console.log('|____________________ |');
			console.log('|5 - Sair             |');
			console.log('|_____________________|');

			const opcao = parseInt(prompt('Escolha uma opção: '));

			switch (opcao) {
				case 1:
					this.criarConta();
					break;
				case 2:
					this.selecionarConta();
					break;
				case 3:
					this.removerConta();
					break;
				case 4:
					this.gerarRelatorio();
					break;
				case 5:
					console.log('Saindo......');
					return;
				default:
					console.log('Opção inválida. Por favor, escolha novamente(1 a 5)');
			}
		}
	}

	criarConta(): void {
		const tipoConta = prompt(
			'Informe o tipo de conta (Poupança ou Corrente): '
		).toLocaleLowerCase();
		const numeroConta = prompt('Informe o número da conta: ');
		const saldoInicial = parseFloat(
			prompt('Informe o valor do saldo inicial da conta: ')
		);

		let taxaDeOperacao: number | null = null;
		if (tipoConta === 'poupança') {
			const taxaDeOperacaoInp = prompt(
				'Informe a taxa de operação para a conta poupança: '
			);
			if (taxaDeOperacaoInp.trim() !== '') {
				const taxa = parseFloat(taxaDeOperacaoInp);
				if (!isNaN(taxa)) {
					taxaDeOperacao = taxa;
				}
			}
		}

		let limite: number | null = null;
		if (tipoConta === 'corrente') {
			const limiteInp = prompt('Informe o limite da conta: ');
			if (limiteInp.trim() !== '') {
				const limiteNum = parseFloat(limiteInp);
				if (!isNaN(limiteNum)) {
					limite = limiteNum;
				}
			}
		}

		if (tipoConta === 'poupança' && taxaDeOperacao !== null) {
			const novaConta = new ContaPoupanca(
				numeroConta,
				saldoInicial,
				taxaDeOperacao
			);
			this.banco.inserir(novaConta);
		} else if (tipoConta === 'corrente' && limite !== null) {
			const novaConta = new ContaCorrente(numeroConta, saldoInicial, limite);
			this.banco.inserir(novaConta);
		} else {
			console.log(
				'Tipo de conta inválido ou valores de taxa de operação ou limite inválidos!'
			);
		}
	}

	selecionarConta(): void {
		const numeroConta = prompt('Informe o número da conta: ');
		const conta = this.banco.procurarConta(numeroConta);
		if (conta instanceof ContaPoupanca) {
			this.exibeMenuDaConta(conta);
		} else if (conta instanceof ContaCorrente) {
			this.exibeMenuDaConta(conta);
		} else {
			console.log('Conta inexistente ou numero errado');
		}
	}
	exibeMenuDaConta(conta: ContaPoupanca | ContaCorrente): void {
		while (true) {
			console.log('\n===== MENU CONTA =====');
			console.log('1 - Depositar');
			console.log('2 - Sacar');
			console.log('3 - Transferir');
			console.log('4 - Gerar relatório');
			console.log('5 - Retornar ao menu anterior');

			const opcao = parseInt(prompt('\nInforme a opção desejada: '));

			switch (opcao) {
				case 1:
					const valorDeposito = parseFloat(
						prompt('\nInforme o valor do depósito: ')
					);
					conta.depositar(valorDeposito);
					break;
				case 2:
					const valorSaque = parseFloat(prompt('\nInforme o valor do saque: '));
					conta.sacar(valorSaque);
					break;
				case 3:
					const transferencia = parseFloat(
						prompt('\nInforme o valor para transferir: ')
					);
					const numContaDestino = prompt('\nInforme a conta de destino: ');
					const contaDestino = this.banco.procurarConta(numContaDestino);
					if (contaDestino) {
						conta.transferir(transferencia, contaDestino);
					} else {
						console.log('Conta de destino inexistente ou numero incorreto!');
					}
					break;
				case 4:
					conta.mostrarDados();
					break;
				case 5:
					return;
				default:
					console.log('Opção inválida!');
			}
		}
	}
	removerConta(): void {
		const numeroConta = prompt('\nInforme o número da conta: ');
		const conta = this.banco.procurarConta(numeroConta);
		if (conta) {
			this.banco.remover(conta);
		} else {
			console.log('Conta inexistente.');
		}
	}
	gerarRelatorio(): void {
		this.banco.mostrarDados();
	}
}

const iniciaBanco = new Menu();
iniciaBanco.exibeMenu();
