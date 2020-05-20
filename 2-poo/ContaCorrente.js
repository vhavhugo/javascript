export class ContaCorrente{
    agencia;
    cliente;

    //#saldo privado e vc só pode ver dentro do metodo
    //_saldo privado vc pode estanciar fora, apenas sinaliza o fato.
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}