import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OxfordsComponent } from './oxfords.component';

describe('OxfordsComponent', () => {
  let component: OxfordsComponent;
  let fixture: ComponentFixture<OxfordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OxfordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OxfordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
