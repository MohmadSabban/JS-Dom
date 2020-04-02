import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateElementsComponent } from './create-elements.component';

describe('CreateElementsComponent', () => {
  let component: CreateElementsComponent;
  let fixture: ComponentFixture<CreateElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
