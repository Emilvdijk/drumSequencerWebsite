import { Injectable } from '@angular/core';
import {Bar} from './bar';

@Injectable({
  providedIn: 'root'
})
export class BarService {
  protected barList: Bar[] = [{
    name: 'Hat',
    kitURL: 'assets/kit/hat.wav'
  }, {
    name: 'block',
    kitURL: 'assets/kit/block.wav'
  }, {
    name: 'snare',
    kitURL: 'assets/kit/snare.wav'
  }, {
    name: 'clap',
    kitURL: 'assets/kit/clap.wav'
  }];

  constructor() { }

  getList():Bar[] {
    return this.barList;
  }
}
