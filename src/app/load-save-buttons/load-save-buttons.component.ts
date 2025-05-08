import {Component, inject} from '@angular/core';
import {BarsService} from '../bars.service';

@Component({
  selector: 'app-load-save-buttons',
  imports: [],
  template: `
    <button (click)="save()">Save to File</button>
    <input type="file" (change)="onFileSelected($event)" accept=".json" />
  `,
  styleUrl: './load-save-buttons.component.css'
})
export class LoadSaveButtonsComponent {
  barService: BarsService = inject(BarsService);

  save() {
    this.barService.saveState()
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result as string);
        console.log('Parsed JSON:', json);
        this.barService.loadState(json)
      } catch (err) {
        console.error('Invalid JSON file:', err);
      }
    };
    reader.readAsText(file);
    input.value = '';
  }
}
