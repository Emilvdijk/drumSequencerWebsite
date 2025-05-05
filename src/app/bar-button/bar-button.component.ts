import {Component, input, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-bar-button',
  imports: [
    FormsModule
  ],
  template: `
    <!--    <div class="barButton">{{ index }}</div>-->
    <!-- From Uiverse.io by PriyanshuGupta28 -->
    <div class="buttonDiv">
      <input type="checkbox" [(ngModel)]="inputValue">{{ index +1}}
    </div>
  `,
  styleUrl: './bar-button.component.css'
})

export class BarButtonComponent {
  @Input() beatURL!: string;
  @Input() index!: number;
  inputValue: boolean = false;

  playBeat() {
    if(this.inputValue){
      let beat =new Audio(this.beatURL)
    beat.play();
  }}
}
