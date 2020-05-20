import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Hugo";
cliente1.cpf = 11122233309;

const contaCorrenteHugo = new ContaCorrente();
contaCorrenteHugo.agencia = 1001; 
contaCorrenteHugo.cliente = cliente1;

console.log(contaCorrenteHugo);


