import {Component, inject, Input, QueryList, ViewChildren} from '@angular/core';
import {BarButtonComponent} from '../bar-button/bar-button.component';
import {NgForOf} from '@angular/common';
import {BeatMachineService} from '../beat-machine.service';
import {Bar} from '../bar';

@Component({
  selector: 'app-bar',
  imports: [
    BarButtonComponent,
    NgForOf,
  ],
  template: `
    <section>
      <div class="grid">
        <p>{{ bar.name }}</p>
        <app-bar-button  *ngFor="let button of bar.barIsOn; index as i;" [stepIndex]="i" [barIndex]="barIndex" [isOn]="button"></app-bar-button>
      </div>
    </section>
  `,
  styleUrl: './bar.component.css'
})
export class BarComponent {
  @Input() bar!:Bar;
  @Input() barIndex!: number;
  }

