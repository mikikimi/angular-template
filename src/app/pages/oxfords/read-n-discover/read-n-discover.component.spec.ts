import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadNDiscoverComponent } from './read-n-discover.component';

describe('ReadNDiscoverComponent', () => {
  let component: ReadNDiscoverComponent;
  let fixture: ComponentFixture<ReadNDiscoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadNDiscoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadNDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
