import {Component, inject, ViewChild} from '@angular/core';
import {BarComponent} from '../bar/bar.component';
import {BarsService} from '../bars.service';
import {NgForOf} from '@angular/common';
import {AppState} from '../app-state';
import {BpmClockButtonComponent} from '../bpm-clock-button/bpm-clock-button.component';
import {FormsModule} from '@angular/forms';
import {PlayButtonComponent} from '../play-button/play-button.component';
import {LoadSaveButtonsComponent} from '../load-save-buttons/load-save-buttons.component';
import {ToastMessageComponent} from '../toast-message/toast-message.component';

@Component({
  selector: 'app-play-field',
  imports: [
    BarComponent,
    NgForOf,
    BpmClockButtonComponent,
    FormsModule,
    PlayButtonComponent,
    LoadSaveButtonsComponent,
    ToastMessageComponent
  ],
  template: `
    <section>
      <div class="topBar">
        <input type="text" [ngModel]="appState.name" (ngModelChange)="updateName($event)">
      <app-load-save-buttons></app-load-save-buttons>
      </div>
      <div>
        <app-play-button></app-play-button>
        <app-bpm-clock-button [bpm]="appState.bpm"
                              (bpmChange)="updateBpm($event)"></app-bpm-clock-button>
        <div class="volumeBar">
        <input type="range" min="1" max="100" [value]="appState.volume" [ngModel]="appState.volume" (ngModelChange)="updateVolume($event)" id="volume">
          <label for="volume">Volume:</label>
        </div>
      </div>
      <app-bar *ngFor="let bar of appState.bars index as i;" [barIndex]="i" [bar]="bar"></app-bar>
      <div>
        <button class="Bar" (click)="addBar()">+</button>
      </div>
      <app-toast-message></app-toast-message>
    </section>
  `,
  styleUrl: './play-field.component.css'
})

export class PlayFieldComponent {
  appState!: AppState;
  barService: BarsService = inject(BarsService);
  @ViewChild(ToastMessageComponent) toast!: ToastMessageComponent;


  constructor() {
    this.barService.data$.subscribe((state) => {
      this.appState = state;
    })
    this.barService.error$.subscribe((error) => {
      this.toast.show(error);
    })
  }


  updateBpm(newBpm: number) {
    if (newBpm != this.appState.bpm) {
      this.barService.updateBpm(newBpm)
    }
  }

  updateName(newName: string) {
    if (newName != this.appState.name) {
      this.barService.updateName(newName);
    }
  }

  addBar() {
    this.barService.addBar()
  }

  updateVolume(newVolume: number) {
    this.barService.updateVolume(newVolume);
  }
}
