import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeatMachineService {
  currentStep:number = 0
  beatAction$ = new Subject<number>();

  doBeat() {
    this.beatAction$.next(this.currentStep)
    console.log( 'current step: '+ (this.currentStep+1));
    (this.currentStep>14) ? this.currentStep = 0 : this.currentStep++
  }

  resetCounter() {
    this.currentStep =0
  }
}
