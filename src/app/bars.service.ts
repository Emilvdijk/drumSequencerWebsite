import { Injectable } from '@angular/core';
import {Bar} from './bar';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BarsService {
  protected barList: Bar[] = [{
    name: 'Hat',
    kitURL: 'assets/kit/hat.wav',
    barIsOn: [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]
  },
  //   {
  //   name: 'block',
  //   kitURL: 'assets/kit/block.wav',
  //   barIsOn: [{on: true },{on: false },{on: true },{on: false },{on: true },{on: false },{on: true },{on: false },{on: true },{on: false },{on: true },{on: false },{on: true },{on: false },{on: true },{on: false }]
  // }, {
  //   name: 'snare',
  //   kitURL: 'assets/kit/snare.wav',
  //   barIsOn: [{on: true },{on: false },{on: false },{on: false },{on: true },{on: false },{on: false },{on: false },{on: true },{on: false },{on: false },{on: false },{on: true },{on: false },{on: false },{on: false }]
  // }, {
  //   name: 'clap',
  //   kitURL: 'assets/kit/clap.wav',
  //   barIsOn: [{on: true },{on: false },{on: false },{on: false },{on: true },{on: false },{on: false },{on: false },{on: true },{on: false },{on: false },{on: false },{on: true },{on: false },{on: false },{on: false }]
  // }
  ];



  //FIXME service to component = observable
  //FIXME component to service = event
  buttonSubject = new Subject<string>();
  data$ = this.buttonSubject.asObservable();

  toggleButton(barIndex:number,stepIndex:number) {
    this.barList[barIndex].barIsOn[stepIndex]=!this.barList[barIndex].barIsOn[stepIndex];
  }


  getList():Bar[] {
    return this.barList;
  }

  logState(){
    //FIXME remove after testing
    console.log(this.barList);
  }

  toggleBarButton() {

  }

  saveState() {
    this.logState()
  }
}
