class ListaNegociacoes {

    constructor() {
        this._negociacoes = []
    }

    adiciona(Negociacao) {

        this._negociacoes.push(Negociacao);
    }

    get negociacoes() {

        return this._negociacoes;
    }
}