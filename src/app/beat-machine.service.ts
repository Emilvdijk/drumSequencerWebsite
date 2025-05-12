import {inject, Injectable} from '@angular/core';
import {BarsService} from './bars.service';
import {AppState} from './app-state';
import {Subject} from 'rxjs';
import {SoundBar} from './sound-list';

@Injectable({
  providedIn: 'root'
})
export class BeatMachineService {
  currentStep: number = 0
  appState!: AppState;
  // soundList:SoundBar[] = []
  barService: BarsService = inject(BarsService);
  highlightTrigger = new Subject<number>();
  highlight$ = this.highlightTrigger.asObservable();

  constructor() {
    this.barService.data$.subscribe((data) => {
      this.appState = data;
      // this.updateSoundList(data)
    })
  }

  // updateSoundList(data: AppState) {
  //   data.bars.forEach((bar, barIndex) => {
  //     this.soundList[barIndex] ??= ({
  //       barAudio: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
  //     });
  //     bar.barIsOn.forEach((step, stepIndex) => {
  //       if(step){
  //         this.soundList[barIndex].barAudio[stepIndex] = new Audio(bar.kitURL);
  //       }else{
  //         this.soundList[barIndex].barAudio[stepIndex] = null;
  //       }
  //     })
  //   })
  // }

  doBeat() {
    console.log('current step: ' + (this.currentStep + 1));
    this.appState.bars.forEach(item => {
      if (item.barIsOn[this.currentStep]) {
        let audio = new Audio(item.kitURL);
        audio.volume = (this.appState.volume/100)
        audio.play();
      }
    }
    );
    this.highlightTrigger.next(this.currentStep)

    // this.soundList.forEach(bar => {
    //   this.highlightTrigger.next(this.currentStep);
    //   bar.barAudio[this.currentStep]?.play()
    // })

    if (this.currentStep > 14) {
      this.currentStep = 0
    } else {
      this.currentStep++
    }
  }

  resetCounter() {
    this.highlightTrigger.next(-1)
    this.currentStep = 0
  }

  // removeBar(barIndex: number) {
  //   this.soundList.splice(barIndex,1);
  // }
}
