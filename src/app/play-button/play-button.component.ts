import {Component, inject} from '@angular/core';
import {PlayStopService} from '../play-stop.service';

@Component({
  selector: 'app-play-button',
  imports: [],
  template: `
    <button class="playButton" id="startPlayButton" (click)="playStop()">▶️</button>
  `,
  styleUrl: './play-button.component.css'
})
export class PlayButtonComponent {
  playStopService: PlayStopService = inject(PlayStopService);


  constructor() {
  }

  playStop() {
    this.playStopService.playStop()
  }

}
