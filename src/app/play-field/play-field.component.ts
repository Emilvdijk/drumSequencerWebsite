import {Component, inject} from '@angular/core';
import {BarComponent} from '../bar/bar.component';
import {BarsService} from '../bars.service';
import {NgForOf} from '@angular/common';
import {AppState} from '../app-state';
import {BpmClockButtonComponent} from '../bpm-clock-button/bpm-clock-button.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-play-field',
  imports: [
    BarComponent,
    NgForOf,
    BpmClockButtonComponent,
    FormsModule
  ],
  template: `
    <section>
<!--      FIXME ngModel sometime error-->
      <input type="text" [(ngModel)]="appState.name" (ngModelChange)="updateName($event)">
      <app-bpm-clock-button [bpm]="appState.bpm"
                            (bpmChange)="updateBpm($event)"></app-bpm-clock-button>
      <app-bar *ngFor="let bar of appState.bars index as i;" [barIndex]="i" [bar]="bar"></app-bar>
    </section>
  `,
  styleUrl: './play-field.component.css'
})

export class PlayFieldComponent {
  appState!: AppState;
  barService: BarsService = inject(BarsService);

  constructor() {
    this.barService.data$.subscribe((state) => {
      this.appState = state;
    })
  }

  updateBpm(newBpm: number) {
    if(newBpm!=this.appState.bpm){
      this.barService.updateBpm(newBpm)
    }
  }

  updateName(newName: string) {
    if (newName!=this.appState.name){
    this.barService.updateName(newName);
  }}
}
