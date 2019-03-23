import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocializingComponent } from './socializing.component';

describe('SocializingComponent', () => {
  let component: SocializingComponent;
  let fixture: ComponentFixture<SocializingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocializingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocializingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
