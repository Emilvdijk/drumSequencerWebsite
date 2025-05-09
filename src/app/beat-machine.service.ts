import {inject, Injectable} from '@angular/core';
import {BarsService} from './bars.service';
import {AppState} from './app-state';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeatMachineService {
  currentStep: number = 0
  appState!: AppState;
  barService: BarsService = inject(BarsService);
  highlightTrigger = new Subject<number>();
  highlight$ = this.highlightTrigger.asObservable();

  constructor() {
    this.barService.data$.subscribe((data) => {
      this.appState = data;
    })
  }

  doBeat() {
    console.log('current step: ' + (this.currentStep + 1));
    this.appState.bars.forEach(item => {
      if (item.barIsOn[this.currentStep]) {
        this.highlightTrigger.next(this.currentStep);
        let audio = new Audio(item.kitURL);
        audio.play();
      }
    });
    if (this.currentStep > 14) {
      this.currentStep = 0
    } else {
      this.currentStep++
    }

  }

  reset() {
    this.highlightTrigger.next(-1)
    this.currentStep = 0

  }
}
