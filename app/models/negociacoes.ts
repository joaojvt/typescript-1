
import { Negociacao } from './negociacao.js';

export class Negociacoes{
  private negeociacoes: Array<Negociacao> = []

  adiciona(negociacao: Negociacao): void{
    this.negeociacoes.push(negociacao)
  }

  lista(): ReadonlyArray<Negociacao>{
    return this.negeociacoes
  }

}