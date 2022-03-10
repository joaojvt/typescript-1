import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/log-tempo-execucao.js";

export abstract class View<T> {
  protected elemento: HTMLElement;
  private escapar = false;

  constructor(selector: string, escapar?: boolean) {
    const elemento = document.querySelector(selector);
    if (!elemento) {
      throw Error(`Seletor ${selector} não existe no DOM. Verifique!`)
    }
    this.elemento = elemento as HTMLElement;
    if (escapar) this.escapar = escapar
  }

  protected abstract template(model: T): string;

  @inspect()
  @logarTempoExecucao(true)
  update(model: T): void {
    let template = this.template(model)
    if (this.escapar) {
      template = template
        .replace(/<script>[\s\S]*?<\/script>/, '');
    }
    this.elemento.innerHTML = template
  }
}