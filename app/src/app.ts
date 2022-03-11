
import { NegociacaoController } from './controllers/negociacao-controller.js';

const controller = new NegociacaoController()

const form = document.querySelector('.form')

if (!form) {
  throw Error('Form não encotrado, verifique se elemento existe na DOM')
}

form.addEventListener('submit', event => {
  event.preventDefault()
  controller.adiciona()
})

const botaoImporta = document.querySelector('#botao-importa')

if (!botaoImporta) {
  throw Error('Botao importa não foi encontrato')
}

botaoImporta.addEventListener('click', () => {
  controller.importarDados()
})