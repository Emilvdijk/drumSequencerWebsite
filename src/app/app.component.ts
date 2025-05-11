import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {PlayFieldComponent} from './play-field/play-field.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'drumSequencerWebsite';
}
