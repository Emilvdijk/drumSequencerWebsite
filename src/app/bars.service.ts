import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {produce} from 'immer';
import {AppState} from './app-state';

@Injectable({
  providedIn: 'root'
})
export class BarsService {
  protected defaultAppState: AppState = {
    name: "New Project",
    bpm: 120,
    bars:
      [{
        name: 'Hat',
        kitURL: 'assets/kit/hat.wav',
        barIsOn: [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true]
      },
        {
          name: 'block',
          kitURL: 'assets/kit/block.wav',
          barIsOn: [true, true, false, false, true, true, false, false, true, true, false, false, true, true, false, false]
        }, {
        name: 'snare',
        kitURL: 'assets/kit/snare.wav',
        barIsOn: [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false]
      }, {
        name: 'clap',
        kitURL: 'assets/kit/clap.wav',
        barIsOn: [false, false, true, false, false, false, true, false, false, false, true, false, false, false, true, false]
      }]
  };
  barState = new BehaviorSubject<AppState>(this.defaultAppState);
  data$ = this.barState.asObservable()

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
    URL.revokeObjectURL(url);
  }

  loadState(json: any) {
    // FIXME loading twice in a row doesnt work
    console.log(json)
    console.log(this.barState.value)
    this.barState.next(json);
  }

  updateBpm(newBpm: number) {
    // check if value is between a min max bpm range 20-400
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
}
