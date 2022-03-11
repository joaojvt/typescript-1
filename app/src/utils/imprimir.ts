import { Imprimivel } from "../interfaces/imprimivel.js";

export function imprimir(...objs: Imprimivel[]) {
  objs.forEach(obj => console.log(obj.paraTexto()))
}