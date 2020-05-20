import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Hugo", 11122233309);
const conta2 = new ContaCorrente("Ingrid", 88822233309);

const contaCorrenteHugo = new ContaCorrente(1001, cliente1);
contaCorrenteHugo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteHugo.transferir(valor, conta2);
