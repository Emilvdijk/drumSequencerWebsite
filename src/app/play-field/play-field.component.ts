import {Component, inject} from '@angular/core';
import {BarComponent} from '../bar/bar.component';
import {Bar} from '../bar';
import {BarsService} from '../bars.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-play-field',
  imports: [
    BarComponent,
    NgForOf
  ],
  template: `
    <section>
      <app-bar *ngFor="let bar of barList index as i;" [barIndex]="i" [bar]="bar"></app-bar>
    </section>
  `,
  styleUrl: './play-field.component.css'
})

export class PlayFieldComponent {
  barList: Bar[] = [];
  barService: BarsService = inject(BarsService);

  constructor() {
    this.barService.data$.subscribe((data) => {
      this.barList = data;
    })
  }
}
