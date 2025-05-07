import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BarButtonComponent} from './bar-button.component';

describe('BarButtonComponent', () => {
  let component: BarButtonComponent;
  let fixture: ComponentFixture<BarButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
