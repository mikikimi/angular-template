import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffortlessEnglishComponent } from './effortless-english.component';

describe('EffortlessEnglishComponent', () => {
  let component: EffortlessEnglishComponent;
  let fixture: ComponentFixture<EffortlessEnglishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffortlessEnglishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffortlessEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
