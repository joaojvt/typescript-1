import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector('#data')
    this.inputQuantidade = document.querySelector('#quantidade')
    this.inputValor = document.querySelector('#valor')
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao()
    console.log(negociacao)
    this.limpaFormulario()
  }

  criaNegociacao(): Negociacao{
    return new Negociacao(
      this.inputData.valueAsDate,
      this.inputQuantidade.valueAsNumber,
      this.inputValor.valueAsNumber
    )
  }

  limpaFormulario(): void{
    this.inputData.value = null
    this.inputQuantidade.valueAsNumber= null
    this.inputValor.valueAsNumber= null
    this.inputData.focus()
  }
}
