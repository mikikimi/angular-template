import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoningComponent } from './telephoning.component';

describe('TelephoningComponent', () => {
  let component: TelephoningComponent;
  let fixture: ComponentFixture<TelephoningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
