import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueupComponent } from './blueup.component';

describe('BlueupComponent', () => {
  let component: BlueupComponent;
  let fixture: ComponentFixture<BlueupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
