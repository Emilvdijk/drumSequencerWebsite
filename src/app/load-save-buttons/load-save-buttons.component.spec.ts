import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadSaveButtonsComponent} from './load-save-buttons.component';

describe('LoadSaveButtonsComponent', () => {
  let component: LoadSaveButtonsComponent;
  let fixture: ComponentFixture<LoadSaveButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadSaveButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadSaveButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
