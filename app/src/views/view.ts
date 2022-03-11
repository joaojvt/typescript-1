export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(selector: string) {
    const elemento = document.querySelector(selector);
    if (!elemento) {
      throw Error(`Seletor ${selector} não existe no DOM. Verifique!`)
    }
    this.elemento = elemento as HTMLElement;
  }

  protected abstract template(model: T): string;

  update(model: T): void {
    const template = this.template(model)
    this.elemento.innerHTML = template
  }
}