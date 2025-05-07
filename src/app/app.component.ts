import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PlayButtonComponent} from './play-button/play-button.component';
import {PlayFieldComponent} from './play-field/play-field.component';
import {LoadSaveButtonsComponent} from './load-save-buttons/load-save-buttons.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayButtonComponent, PlayFieldComponent, LoadSaveButtonsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drumSequencerWebsite';
}
