import Imprimivel from './Imprimivel';

class Relatorio {
	gerarRelatorio(objeto: Imprimivel): void {
		objeto.mostrarDados();
	}
}
export default Relatorio;
