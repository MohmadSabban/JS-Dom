import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppendChildComponent } from './append-child.component';

describe('AppendChildComponent', () => {
  let component: AppendChildComponent;
  let fixture: ComponentFixture<AppendChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppendChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppendChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
