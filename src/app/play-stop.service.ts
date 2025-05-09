import {inject, Injectable} from '@angular/core';
import {BeatMachineService} from './beat-machine.service';
import {BarsService} from './bars.service';


@Injectable({
  providedIn: 'root'
})
export class PlayStopService {
  bpmInMs!: number;
  play: boolean | (() => void) = false
  beatMachineService: BeatMachineService = inject(BeatMachineService);
  barService: BarsService = inject(BarsService);

  constructor() {
    this.barService.data$.subscribe(data => {
      this.bpmInMs = 60000 / data.bpm
      if (this.play) {
        this.continueTimerNoReset()
      }
    })
  }

  playStop() {
    if (this.play) {
      // @ts-ignore
      this.play()
      this.play = false
      this.beatMachineService.reset();
    } else {
      this.play = this.intervalTimer(this.bpmInMs)
    }
  }

  intervalTimer(interval = 500) {
    let counter = 1;
    // @ts-ignore
    let timeoutId;
    const startTime = Date.now();
    const main = () => {
      const nowTime = Date.now();
      const nextTime = startTime + counter * interval;
      timeoutId = setTimeout(main, interval - (nowTime - nextTime));
      console.log('deviation', Math.round(nowTime - nextTime));
      counter += 1;
      this.step();
    }
    timeoutId = setTimeout(main, interval);
    return () => {
      // @ts-ignore
      clearTimeout(timeoutId);
    };
  }

  continueTimerNoReset() {
    // @ts-ignore
    this.play()
    this.play = this.intervalTimer(this.bpmInMs)
  }


  step() {
    this.beatMachineService.doBeat();
  }
}
