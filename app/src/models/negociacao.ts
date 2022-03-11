import { Imprimivel } from "../interfaces/imprimivel.js";

export class Negociacao implements Imprimivel {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) { }

    public static criaDe(dateString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = this._data.getTime()
        return new Date(data);
    }

    public paraTexto(): string {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `
    }
}