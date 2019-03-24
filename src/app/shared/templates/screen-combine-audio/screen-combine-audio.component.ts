import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-screen-combine-audio',
  templateUrl: './screen-combine-audio.component.html',
  styleUrls: ['./screen-combine-audio.component.scss']
})
export class ScreenCombineAudioComponent implements OnInit, AfterViewInit {
  minSpeed = 0.5;
  maxSpeed = 2;
  arr = Array;

  curPlayingItem = null;
  curPlayingTitle = '';
  audioArr;
  loop = false;
  @Input() curSpeed = 1.3;

  @Input() detailList = [];
  @Input() audioPath = '';
  @Input() audioType = '.mp3';
  @Input() screenshotPath = '';
  @Input() screenshotType = '.jpg';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.audioArr = $('audio');
    if (this.curSpeed !== 1) {
      this.onChangePlaySpeed(this.curSpeed);
    }
  }

  onPlayAudio(item, e) {
    const self = this;
    if (this.curPlayingItem) {
      const targetId = $(e.target).attr('id');
      this.curPlayingItem.isPlaying = null;
      $.each(this.audioArr, function() {
        if (!this.paused && targetId !== $(this).attr('id')) {
          this.pause();
        }
      });
    }
    item.isPlaying = true;
    this.curPlayingItem = item;
    this.curPlayingItem.id = $(e.target).attr('id');
    this.curPlayingTitle = item.audioTitle ? item.audioTitle : item.title;
  }

  toTop() {
    $('html,body').animate({
      scrollTop: 0
    }, 0);
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
    if (this.curSpeed >= this.maxSpeed) {
      return;
    }
    this.curSpeed += 0.1;

    $.each(this.audioArr, function() {
      this.playbackRate = self.curSpeed;
    });
  }

  onDecreaseSpeed() {
    const self = this;
    if (this.curSpeed <= this.minSpeed) {
      return;
    }
    this.curSpeed -= 0.1;

    $.each(this.audioArr, function() {
      this.playbackRate = self.curSpeed;
    });
  }

}
