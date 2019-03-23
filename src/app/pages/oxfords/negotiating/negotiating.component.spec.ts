import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegotiatingComponent } from './negotiating.component';

describe('NegotiatingComponent', () => {
  let component: NegotiatingComponent;
  let fixture: ComponentFixture<NegotiatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegotiatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegotiatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
