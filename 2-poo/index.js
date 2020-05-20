import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Hugo";
cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();

// cliente2.nome = "Ingrid";
// cliente1.cpf = 88822233309;

const contaCorrenteHugo = new ContaCorrente();
contaCorrenteHugo.agencia = 1001; 
contaCorrenteHugo.cliente = cliente1;
contaCorrenteHugo.depositar(500);

console.log(contaCorrenteHugo);
const cliente1 = new Cliente();

cliente1.nome = "Hugo";
cliente1.cpf = 11122233309;

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteHugo.transferir(valor, conta2);
console.log(conta2);