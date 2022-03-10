
import { escape } from '../decorators/escape.js';
import { View } from './view.js';

export class MensagemView extends View<string>{

  @escape()
  protected template(model: string): string {
    return /* html */`
      <p class="alert alert-info">${model}</p>
    `
  }
} 