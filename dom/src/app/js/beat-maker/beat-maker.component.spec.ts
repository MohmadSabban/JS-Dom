import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatMakerComponent } from './beat-maker.component';

describe('BeatMakerComponent', () => {
  let component: BeatMakerComponent;
  let fixture: ComponentFixture<BeatMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeatMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
