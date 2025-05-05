import {Component, inject, Input, QueryList, ViewChildren} from '@angular/core';
import {BarButtonComponent} from '../bar-button/bar-button.component';
import {NgForOf} from '@angular/common';
import {BeatMachineService} from '../beat-machine.service';
import {Bar} from '../bar';

@Component({
  selector: 'app-bar',
  imports: [
    BarButtonComponent,
    NgForOf,
  ],
  template: `
    <section>
      <div class="grid">
        <p>{{ bar.name }}</p>
        <app-bar-button  *ngFor="let button of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]; index as i;" [index]="i" [beatURL]="bar.kitURL"></app-bar-button>
      </div>
    </section>
  `,
  styleUrl: './bar.component.css'
})
export class BarComponent {
  @Input() bar!:Bar;
  @ViewChildren(BarButtonComponent) children!: QueryList<BarButtonComponent>;
  beatMachineService: BeatMachineService = inject(BeatMachineService);

  ngOnInit() {
    this.beatMachineService.beatAction$.subscribe(value => {
      this.doBeat(value);
    });
  }

  doBeat(barToPlay:number){
    this.children.find((bar)=> bar.index==barToPlay)?.playBeat()
  }
}
