import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BpmClockButtonComponent} from './bpm-clock-button.component';

describe('BpmClockButtonComponent', () => {
  let component: BpmClockButtonComponent;
  let fixture: ComponentFixture<BpmClockButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BpmClockButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpmClockButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
