import {Component, inject, Input} from '@angular/core';
import {BarButtonComponent} from '../bar-button/bar-button.component';
import {NgForOf} from '@angular/common';
import {Bar} from '../bar';
import {BarsService} from '../bars.service';

@Component({
  selector: 'app-bar',
  imports: [
    BarButtonComponent,
    NgForOf,
  ],
  template: `
      <div class="grid">
        <div>
        <p>{{ bar.name }}</p>
<!--          <select (ngModel)="selectedOption">-->
<!--            <option *ngFor="let kit of kits" [value]="kit">-->
<!--              {{ kit }}-->
<!--            </option>-->
<!--          </select>-->
        <button (click)="resetButtons()">⟳</button>
        </div>
        <app-bar-button *ngFor="let button of bar.barIsOn; index as i;" [stepIndex]="i"
                        [barIndex]="barIndex" [isOn]="button" ></app-bar-button>
        <div class="center">
          <button class="delete-button" (click)="removeBar()" >✖</button>
        </div>
      </div>
  `,
  styleUrl: './bar.component.css'
})
export class BarComponent {
  @Input() bar!: Bar;
  @Input() barIndex!: number;
  @Input() kits!: string[];
  barService:BarsService = inject(BarsService);

  removeBar() {
    this.barService.removeBar(this.barIndex)
  }

  resetButtons() {
    this.barService.resetButtons(this.barIndex)
  }
}

