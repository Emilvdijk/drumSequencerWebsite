import {Injectable} from '@angular/core';
import {Bar} from './bar';
import {BehaviorSubject} from 'rxjs';
import {produce} from 'immer';

@Injectable({
  providedIn: 'root'
})
export class BarsService {
  protected barList: Bar[] = [{
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
    }];
  barState = new BehaviorSubject<Bar[]>(this.barList);
  data$ = this.barState.asObservable()

  toggleBarButton(bar: number, step: number) {
    const nextState = produce(this.barState.value, draft => {
      draft[bar].barIsOn[step] = !draft[bar].barIsOn[step]
    });
    this.barState.next(nextState);
  }

  saveState() {
    console.log(JSON.stringify(this.barState.value))
    const json = JSON.stringify(this.barState.value, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "DrumSequencerSave";
    a.click();
    URL.revokeObjectURL(url);
  }

  loadState(json: any) {
    console.log(json)
    console.log(this.barState.value)
    this.barState.next(json);
  }
}
