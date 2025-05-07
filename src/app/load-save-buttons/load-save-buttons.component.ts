import {Component, inject} from '@angular/core';
import {BarsService} from '../bars.service';

@Component({
  selector: 'app-load-save-buttons',
  imports: [],
  template: `
    <button (click)="save()">Save</button>
  `,
  styleUrl: './load-save-buttons.component.css'
})
export class LoadSaveButtonsComponent {
  barService:BarsService = inject(BarsService);

  save() {
    this.barService.saveState()
  }
}
