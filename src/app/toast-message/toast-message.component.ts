import { Component } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-toast-message',
  imports: [
    NgIf
  ],
  template: `
    <div class="toast" *ngIf="visible">
      {{ message }}
    </div>
  `,
  styleUrl: './toast-message.component.css'
})
export class ToastMessageComponent {
  message = '';
  visible = false;

  show(msg: string, duration = 3000) {
    this.message = msg;
    this.visible = true;
    setTimeout(() => this.visible = false, duration);
  }

}
