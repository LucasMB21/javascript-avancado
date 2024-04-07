class Negociacao {

    constructor(data, quantidade, valor) {

        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }

    obtemVolume() {

        return this.quantidade * this.valor;
    }
}