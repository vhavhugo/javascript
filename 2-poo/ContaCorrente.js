export class ContaCorrente{
    agencia;
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
}