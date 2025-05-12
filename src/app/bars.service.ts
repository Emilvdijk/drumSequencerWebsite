import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {produce} from 'immer';
import {AppState} from './app-state';

@Injectable({
  providedIn: 'root'
})
export class BarsService {
  protected defaultAppState: AppState = {
    name: "New Project Name",
    bpm: 200,
    bars: [{
      name: 'Hat',
      kitURL: 'assets/kit/hat.wav',
      barIsOn: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
    },
      {
        name: 'Block',
        kitURL: 'assets/kit/block.wav',
        barIsOn: [true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false]
      }, {
        name: 'Snare',
        kitURL: 'assets/kit/snare.wav',
        barIsOn: [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false]
      }, {
        name: 'Clap',
        kitURL: 'assets/kit/clap.wav',
        barIsOn: [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false]
      }],
    volume: 80
  };
  soundMap: Map<string, string> = new Map<string, string>();
  barState = new BehaviorSubject<AppState>(this.defaultAppState);
  data$ = this.barState.asObservable()
  errorMessage = new Subject<string>();
  error$ = this.errorMessage.asObservable();
  // FIXME add kits to selector of bar component


  constructor() {
    this.soundMap.set('Hat', 'assets/kit/hat.wav');
    this.soundMap.set('Block', 'assets/kit/block.wav');
    this.soundMap.set('Snare', 'assets/kit/snare.wav');
    this.soundMap.set('Clap', 'assets/kit/clap.wav');
    this.soundMap.set('Kick1', 'assets/kit/Kick1.wav');
    this.soundMap.set('Shaker', 'assets/kit/Shaker.wav');
    this.soundMap.set('Snare2', 'assets/kit/Snare2.wav');
    this.soundMap.set('Crash', 'assets/kit/Crash.wav');
  }

  toggleBarButton(bar: number, step: number) {
    const nextState = produce(this.barState.value, draft => {
      draft.bars[bar].barIsOn[step] = !draft.bars[bar].barIsOn[step]
    });
    this.barState.next(nextState);
  }

  saveState() {
    console.log(JSON.stringify(this.barState.value))
    const json = JSON.stringify(this.barState.value, null, 2);
    const blob = new Blob([json], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "DrumSequencerSave";
    a.click();
    a.remove()
    URL.revokeObjectURL(url);
  }

  loadState(json: AppState) {
    const nextState = produce(json, draft => {
    })
    this.barState.next(nextState);
  }

  updateBpm(newBpm: number) {
    // check if the value is between a min max bpm range 20-400
    const clampedBpm = Math.max(20, Math.min(400, newBpm));
    const nextState = produce(this.barState.value, draft => {
      draft.bpm = clampedBpm;
    });
    this.barState.next(nextState);
  }

  updateName(newName: string) {
    const nextState = produce(this.barState.value, draft => {
      draft.name = newName;
    });
    this.barState.next(nextState);
  }

  addBar() {
    const nextState = produce(this.barState.value, draft => {
       let newValues = this.nextNewBar()
      if(newValues.length == 0){
        this.errorMessage.next('No more kits to add :(')
        return
      }
      draft.bars.push({
        name: newValues[0],
        kitURL: newValues[1],
        barIsOn: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
      }
      )
    });
    this.barState.next(nextState);
  }

  removeBar(barIndex: number) {
    const nextState = produce(this.barState.value, draft => {
      draft.bars.splice(barIndex,1);
    });
    this.barState.next(nextState);
  }

  updateVolume(newVolume: number) {
    const nextState = produce(this.barState.value, draft => {
      draft.volume = newVolume;
    });
    this.barState.next(nextState);
  }

  resetButtons(barIndex: number) {
    const nextState = produce(this.barState.value, draft => {
      draft.bars[barIndex].barIsOn = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    });
    this.barState.next(nextState);
  }


  nextNewBar(): string[]{
    let list: string[] = []
    let newList: string[] = []
    this.barState.value.bars.forEach(bar => {list.push(bar.name)})
    // @ts-ignore
    this.soundMap.forEach((value, key) =>{
      if(!list.includes(key)){
        newList.push(key)
        newList.push(value)
      }
      })
    return newList
  }
}
