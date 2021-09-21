import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //ReadonlyArray: lista só de leitura
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}