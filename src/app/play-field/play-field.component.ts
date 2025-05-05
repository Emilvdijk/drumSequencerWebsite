import {Component, inject} from '@angular/core';
import {BarComponent} from '../bar/bar.component';
import {Bar} from '../bar';
import {BarService} from '../bar.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-play-field',
  imports: [
    BarComponent,
    NgForOf
  ],
  template: `
    <section>
      <app-bar *ngFor="let bar of barList" [bar]="bar"></app-bar>
    </section>
  `,
  styleUrl: './play-field.component.css'
})
export class PlayFieldComponent {
  barList:Bar[] = [];
  barService:BarService  = inject(BarService);

  constructor() {
    this.barList = this.barService.getList();
  }
}
