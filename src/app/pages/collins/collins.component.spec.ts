import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollinsComponent } from './collins.component';

describe('CollinsComponent', () => {
  let component: CollinsComponent;
  let fixture: ComponentFixture<CollinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
