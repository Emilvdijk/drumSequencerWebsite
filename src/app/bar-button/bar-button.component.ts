import {Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BarsService} from '../bars.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-bar-button',
  imports: [
    FormsModule
  ],
  template: `
    <div>
      <button (click)="toggle()" [class.active]="isOn">
        {{ isOn ? 'On' : 'Off' }}
      </button>
    </div>
  `,
  styleUrl: './bar-button.component.css'
})

export class BarButtonComponent {
  @Input() stepIndex!: number;
  @Input() barIndex!: number;
  @Input() isOn!:boolean;
  barService:BarsService  = inject(BarsService);

  toggle() {
    this.barService.toggleButton(this.barIndex,this.stepIndex);
  }
}
