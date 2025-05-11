import {Component, inject} from '@angular/core';
import {PlayStopService} from '../play-stop.service';

@Component({
  selector: 'app-play-button',
  imports: [],
  template: `
    <div>
      <button class="playButton" id="startPlayButton" [class.active]="isOn" (click)="playStop()">{{ isOn ? 'On' : 'Off' }}</button>
    </div>`,
  styleUrl: './play-button.component.css'
})
export class PlayButtonComponent {
  playStopService: PlayStopService = inject(PlayStopService);
  isOn: boolean = false;
  constructor() {
  }

  playStop() {
    this.isOn = !this.isOn;
    this.playStopService.playStop()
  }

}
