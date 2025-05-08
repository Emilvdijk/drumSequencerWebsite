import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-bpm-clock-button',
  imports: [
    FormsModule
  ],
  template: `
    <p>BPM:</p>
    <input [ngModel]="bpm" type="number" (ngModelChange)="bpm = $event" (keyup.enter)="updateBpm()"
           (change)="updateBpm()">
  `,
  styleUrl: './bpm-clock-button.component.css'
})
export class BpmClockButtonComponent {
  @Input() bpm!: number;
  @Output() bpmChange = new EventEmitter<number>();

  updateBpm() {
    this.bpmChange.emit(this.bpm); // bpm to ms delay per step
  }
}
