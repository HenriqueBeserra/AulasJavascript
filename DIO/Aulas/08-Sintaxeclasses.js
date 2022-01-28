class ContaBanco{
    construtor(nome, tipoConta, _saldo, credCard, banco){
        this.nome = nome;
        this.tipoConta = tipoConta;
        this.saldo = _saldo;
        this.credCard = credCard;
        this.banco = banco    
    }

    
    set Banco(nomeBanco){
        this.banco = nomeBanco
    }

    get Banco(){
        return this.banco
    }
    
    get Getnome(){
        return this.nome
    }

    set Setnome(nome){
        this.nome = nome;
    }

    set Conta(tipoConta){
        this.tipoConta = tipoConta;
    }

    get Conta(){
        return this.tipoConta
    }

    set Saldo(_saldo){
        this._saldo = _saldo;
    }

    get Saldo(){
        return this._saldo;
    }

}





var banco = new ContaBanco;
var bradesco = new ContaBanco

banco.Conta = 'Corrente'
banco.Setnome = 'Henrique'
banco.Saldo = 1000
banco.Banco = 'Bradesco'

console.log(banco.Banco, banco.Conta, banco.Saldo, banco.Getnome)