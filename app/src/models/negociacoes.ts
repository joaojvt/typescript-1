
import { Modelo } from '../interfaces/modelo.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Modelo<Negociacoes> {
  private negeociacoes: Negociacao[] = []

  adiciona(negociacao: Negociacao): void {
    this.negeociacoes.push(negociacao)
  }

  lista(): readonly Negociacao[] {
    return this.negeociacoes
  }

  public paraTexto(): string {
    return JSON.stringify(this.lista(), null, 2)
  }

  public ehIgual(obj: Negociacoes): boolean {
    return JSON.stringify(this.lista()) === JSON.stringify(obj.lista())
  }
}