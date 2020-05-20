import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";
const cliente1 = new Cliente();

cliente1.nome = "Hugo";
cliente1.cpf = 11122233309;

const contaCorrenteHugo = new ContaCorrente();
contaCorrenteHugo._saldo = 10000; 
contaCorrenteHugo.depositar(100);
contaCorrenteHugo.sacar(50);

// contaCorrenteHugo.agencia = 1001; 

console.log(contaCorrenteHugo.saldo);

console.log(cliente1);

