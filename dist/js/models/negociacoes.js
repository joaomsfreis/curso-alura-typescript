export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //ReadonlyArray: lista só de leitura
    lista() {
        return this.negociacoes;
    }
}
