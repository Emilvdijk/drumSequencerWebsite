import {Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BarsService} from '../bars.service';
import {BeatMachineService} from '../beat-machine.service';

@Component({
  selector: 'app-bar-button',
  imports: [
    FormsModule
  ],
  template: `
    <div [class.active]="highlightToggle" class="gradient-box">
      <button (click)="toggle()" [class.active]="isOn">
      </button>
    </div>
  `,
  styleUrl: './bar-button.component.css'
})

export class BarButtonComponent {
  @Input() stepIndex!: number;
  @Input() barIndex!: number;
  @Input() isOn!: boolean;
  highlightToggle:boolean = false;
  barService: BarsService = inject(BarsService)
  beatMachineService: BeatMachineService = inject(BeatMachineService);

  ngOnInit() {
    this.beatMachineService.highlight$.subscribe((step) => {
      if(step==-1){
        this.highlightToggle = false;

      } else if(step==0 && this.stepIndex==15){
        this.highlightToggle = false;

      } else if(this.stepIndex==step&&this.isOn){
        this.highlightToggle = true;

      }else if(this.stepIndex==(step-1)){
        this.highlightToggle = false;

      }
    });
  }

  toggle() {
    this.barService.toggleBarButton(this.barIndex, this.stepIndex);
  }
}
