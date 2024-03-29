import ContaPoupanca from './ContaPoupanca';
import ContaCorrente from './ContaCorrente';
import Relatorio from './Relatorio';

class Executavel {
	static execucao(): void {
		//const cp = new ContaPoupanca('1234', 1000, 5);
		const cc = new ContaCorrente('1405', 1500, 100);

		console.log('CONTAS: ');
		// console.log(
		// 	'Conta Poupança: ',
		// 	cp.getNumeroConta(),
		// 	'- Saldo: ',
		// 	cp.getSaldo()
		// );
		console.log(
			'Conta Corrente: ',
			cc.getNumeroConta(),
			'- Saldo: ',
			cc.getSaldo()
		);

		// Creditando algum valor nas contas
		// cp.depositar(500);
		// cc.depositar(500);

		// // Efetuando um saque em cada conta
		// cp.sacar(200); // Tenta sacar mais do que o saldo
		cc.sacar(2800); // Tenta sacar mais do que o saldo e usa o limite

		// Criando objeto de relatório e gerando relatório para cada conta
		const relatorio = new Relatorio();
		// relatorio.gerarRelatorio(cp);
		relatorio.gerarRelatorio(cc);
	}
}

// Executando a classe executável
Executavel.execucao();
