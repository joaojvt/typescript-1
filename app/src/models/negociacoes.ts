
import { Negociacao } from './negociacao.js';

export class Negociacoes {
  private negeociacoes: Negociacao[] = []

  adiciona(negociacao: Negociacao): void {
    this.negeociacoes.push(negociacao)
  }

  lista(): readonly Negociacao[] {
    return this.negeociacoes
  }

}