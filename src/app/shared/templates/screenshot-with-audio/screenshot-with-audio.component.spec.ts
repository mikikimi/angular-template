import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotWithAudioComponent } from './screenshot-with-audio.component';

describe('ScreenshotWithAudioComponent', () => {
  let component: ScreenshotWithAudioComponent;
  let fixture: ComponentFixture<ScreenshotWithAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenshotWithAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenshotWithAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
