import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-bpm-clock-button',
  imports: [
    FormsModule,
  ],
  template: `

    <div class="border">
    <div class="lcd-wrapper">
      <div class="lcd-row">
        BPM: <input class="lcd-row" [ngModel]="bpm" type="number" (ngModelChange)="bpm = $event" (keyup.enter)="updateBpm()"
                    (change)="updateBpm()" size="2" >
      </div>
    </div>
  `,
  styleUrl: './bpm-clock-button.component.css'
})
export class BpmClockButtonComponent {
  lcdText: string[] = [
    'hello, world!   ',
    '5171            '  ];



  @Input() bpm!: number;
  @Output() bpmChange = new EventEmitter<number>();

  updateBpm() {
    this.bpmChange.emit(this.bpm); // bpm to ms delay per step
  }
}
