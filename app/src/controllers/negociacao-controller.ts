import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/log-tempo-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Imprimivel } from "../interfaces/imprimivel.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
  @domInjector('#data')
  private inputData: HTMLInputElement;
  @domInjector('#quantidade')
  private inputQuantidade: HTMLInputElement;
  @domInjector('#valor')
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView('#negociacoesView');
  private mensagemView = new MensagemView('#mensagemView')
  private negociacoesService = new NegociacaoService()

  constructor() {
    this.negociacoesView.update(this.negociacoes)
  }

  @inspect()
  @logarTempoExecucao()
  public adiciona(): void {
    const negociacao = Negociacao.criaDe(
      this.inputData.value,
      this.inputQuantidade.value,
      this.inputValor.value
    )

    if (!this.ehDiaUtil(negociacao.data)) {
      this.mensagemView.update('Apenas necoiações em dias úteis são aceitas')
      return
    }

    this.negociacoes.adiciona(negociacao)
    imprimir(negociacao, this.negociacoes)
    this.atualizaView();
    this.limpaFormulario()
  }

  public async importarDados(): Promise<void> {
    const negociacoesDeHoje = await this.negociacoesService.obeterNecodiacoesDoDia()
      .then(negociacoesDeHoje => {
        return negociacoesDeHoje.filter(negociacaoDeHoje => {
          return !this.negociacoes
            .lista()
            .some(negociacao => negociacao.ehIgual(negociacaoDeHoje))
        });
      })

    negociacoesDeHoje.forEach(negociacao => {
      this.negociacoes.adiciona(negociacao)
    })
    this.negociacoesView.update(this.negociacoes)
  }

  private ehDiaUtil(data: Date): boolean {
    return data.getDay() !== DiasDaSemana.DOMINGO
      && data.getDay() !== DiasDaSemana.SABADO
  }

  private limpaFormulario(): void {
    this.inputData.value = ''
    this.inputQuantidade.valueAsNumber = 0
    this.inputValor.valueAsNumber = 0
    this.inputData.focus()
  }

  private atualizaView(): void {
    this.mensagemView.update('Negociacao adicionada com sucesso')
    this.negociacoesView.update(this.negociacoes)
  }
}
