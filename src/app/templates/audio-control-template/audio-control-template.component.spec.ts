import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioControlTemplateComponent } from './audio-control-template.component';

describe('AudioControlTemplateComponent', () => {
  let component: AudioControlTemplateComponent;
  let fixture: ComponentFixture<AudioControlTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioControlTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioControlTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
