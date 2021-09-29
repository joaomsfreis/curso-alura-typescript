import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    //ReadonlyArray: lista só de leitura
    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}