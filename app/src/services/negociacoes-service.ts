import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {
  public async obeterNecodiacoesDoDia(): Promise<Negociacao[]> {
    const dados = <NegociacaoDoDia[]>await fetch('http://localhost:8080/dados')
      .then(res => res.json());

    return dados.map(dado => new Negociacao(
      new Date(),
      dado.vezes,
      dado.montante
    ))
  }
}