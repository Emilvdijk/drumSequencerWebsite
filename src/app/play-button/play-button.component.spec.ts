import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayButtonComponent} from './play-button.component';

describe('PlayButtonComponent', () => {
  let component: PlayButtonComponent;
  let fixture: ComponentFixture<PlayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
