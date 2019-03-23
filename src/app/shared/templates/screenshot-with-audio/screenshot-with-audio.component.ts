import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

declare var $, LazyLoad: any;

@Component({
  selector: 'screenshot-with-audio',
  templateUrl: './screenshot-with-audio.component.html',
  styleUrls: ['./screenshot-with-audio.component.scss']
})
export class ScreenshotWithAudioComponent implements OnInit, AfterViewInit {

  minSpeed = 0.5;
  maxSpeed = 2;
  arr = Array;
  isOpenAudioBlock = false;

  curPlayingIndex = -1;
  curPlayingTitle = '';
  audioState = 0;
  audioArr;
  loop = false;
  triggerPlayTrack = 0;
  screenArray;

  @Input() audioLength;
  @Input() audioPath;
  @Input() audioNamePrefix = '';
  @Input() audioType = '.mp3';

  @Input() screenLength;
  @Input() screenPath;
  @Input() screenSkippedLength = 22;
  @Input() screenType = '.jpg';
  @Input() curSpeed = 1.3;

  constructor() {
  }

  ngOnInit() {
    this.screenArray = new Array(this.screenLength).fill(false);
    console.log(this.screenArray);
  }

  ngAfterViewInit() {
    const mainScope = this;

    mainScope.audioArr = $('audio');

    const myLazyLoad = new LazyLoad({
      elements_selector: "img"
    });

    if (this.curSpeed !== 1) {
      this.onChangePlaySpeed(this.curSpeed);
    }
  }

  toggleAudioBlock(forceToShow = false, forceToClose = false) {
    if (forceToShow) {
      this.isOpenAudioBlock = true;
      return;
    }
    if (forceToClose) {
      this.isOpenAudioBlock = false;
      return;
    }

    this.isOpenAudioBlock = !this.isOpenAudioBlock;
  }


  triggerPlay() {
    const num = this.triggerPlayTrack;
    if (num < 0 || num === this.curPlayingIndex || num > this.audioArr.length - 1) return;

    this.audioArr[this.curPlayingIndex].pause();
    this.curPlayingIndex = num;
    this.audioArr[this.curPlayingIndex].play();
  }

  onPlayAudio(index, fileName) {
    if (this.curPlayingIndex != -1 && this.curPlayingIndex != index) {
      this.audioArr[this.curPlayingIndex].pause();
    }
    this.curPlayingIndex = index;
    setTimeout(() => {
      this.audioState = 1;
      this.curPlayingTitle = fileName;
    }, 10);
  }
  onPauseAudio(index) {
    if (this.curPlayingIndex !== index) {
      this.curPlayingIndex = -1;
    }
    this.audioState = 0;
  }

  toTop() {
    $('html,body').animate({
      scrollTop: 0
    }, 0);
  }

  onTriggerPlayPauseAudio() {
    if (this.audioState == 0) {
      if (this.curPlayingIndex == -1) {
        this.curPlayingIndex = 0;
      }
      this.audioArr[this.curPlayingIndex].play();
    } else {
      $.each(this.audioArr, function() {
        if (!this.paused) {
          this.pause();
        }
      });
    }
  }

  onChangePlaySpeed(customCurSpeed) {
    if (this.curSpeed >= this.maxSpeed || this.curSpeed <= this.minSpeed) {
      return;
    }
    this.curSpeed = customCurSpeed;

    const self = this;
    $.each(this.audioArr, function() {
      this.playbackRate = self.curSpeed;
    });
  }

  onIncreaseSpeed() {
    const self = this;
    if (this.curSpeed >= this.maxSpeed) return;
    this.curSpeed += 0.1;

    $.each(this.audioArr, function() {
      this.playbackRate = self.curSpeed;
    });
  }

  onDecreaseSpeed() {
    const self = this;
    if (this.curSpeed <= this.minSpeed) return;
    this.curSpeed -= 0.1;

    $.each(this.audioArr, function() {
      this.playbackRate = self.curSpeed;
    });
  }


  onBackwardPlayingFile() {
    if (this.curPlayingIndex <= 0) return;

    if (this.curPlayingIndex != -1) {
      this.audioArr[this.curPlayingIndex].pause();
    }

    this.curPlayingIndex--;
    this.audioArr[this.curPlayingIndex].play();
  }

  onForwardPlayingFile() {
    if (this.curPlayingIndex >= this.audioArr.length - 1) return;
    if (this.curPlayingIndex != -1) {
      this.audioArr[this.curPlayingIndex].pause();
    }
    this.curPlayingIndex++;
    this.audioArr[this.curPlayingIndex].play();
  }
  onShowAll() {
    this.toggleAudioBlock(true);
    // this.screenArray = new Array(this.screenLength).fill(true);
  }
  onHideAll() {
    this.toggleAudioBlock(false, true);
    // this.screenArray = new Array(this.screenLength).fill(false);
  }
}
