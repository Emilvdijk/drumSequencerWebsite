import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BarsService} from '../bars.service';

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
  @Input() isOn!: boolean;

  constructor(private readonly barService: BarsService) {
  }

  toggle() {
    this.barService.toggleBarButton(this.barIndex, this.stepIndex);
  }
}
