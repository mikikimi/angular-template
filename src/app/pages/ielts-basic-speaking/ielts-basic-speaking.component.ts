import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $, LazyLoad: any;

@Component({
  selector: 'app-ielts-basic-speaking',
  templateUrl: './ielts-basic-speaking.component.html',
  styleUrls: ['./ielts-basic-speaking.component.scss']
})
export class IeltsBasicSpeakingComponent implements AfterViewInit {

  curSpeed = 1.0;
  arr = Array;
  isOpenAudioBlock = false;


  curPlaying = 0;
  audioState = 0;
  audioArr = $('audio');
  loop = false;

  constructor() { }

  ngAfterViewInit() {

    const myLazyLoad = new LazyLoad({
      elements_selector: "img"
    });


    $.each(this.audioArr, function(index) {
      $(this).on('play', function() {
        if (this.curPlaying != -1 && this.curPlaying != index) {
          this.audioArr[this.curPlaying].pause();
        }
        this.curPlaying = index;
        let $this = $(this);
        $this.addClass('isFixedTop');
        $this.parent().addClass('isFixedTop');
        setTimeout(function() {
          $('#playPauseAudio').addClass('playing');
          this.audioState = 1;
          $('#playingFile').text($('.audio-tracks li').eq(index).find('span, p').text());
        }, 10);
      });
      $(this).on('pause', function() {
        $('#playPauseAudio').removeClass('playing');
        if (this.curPlaying !== index) {
          $(this).removeClass('isFixedTop');
          $(this).parent().removeClass('isFixedTop');
        }
        this.audioState = 0;
      });
      $(this).on('ended', function() {
        if (this.curPlaying >= this.audioArr.length - 1) return;
        this.curPlaying++;
        this.audioArr[this.curPlaying].play();
      });
    });

    $('#playPauseAudio').on('click', function() {
      if (this.audioState == 0) {
        if (this.curPlaying == -1) {
          this.curPlaying = 0;
        }
        this.audioArr[this.curPlaying].play();
      } else {
        $.each(this.audioArr, function() {
          if (!this.paused) {
            this.pause();
          }
        });
      }
    });

    $('#btnIncrease').on('click', function() {
      if (this.curSpeed >= 1.8) return;
      this.curSpeed += 0.1;
      $('#this.curSpeed').text(this.curSpeed.toFixed(1));
      $.each(this.audioArr, function() {
        this.playbackRate = this.curSpeed;
      });
    });

    $('#btnDecrease').on('click', function() {
      if (this.curSpeed <= 0.6) return;
      this.curSpeed -= 0.1;
      $('#this.curSpeed').text(this.curSpeed.toFixed(1));
      $.each(this.audioArr, function() {
        this.playbackRate = this.curSpeed;
      });
    });

    $('#btnthis.loop').on('click', function() {
      let $this = $(this);
      if (!this.loop) {
        $this.addClass('active');
        this.loop = true;
        $.each(this.audioArr, function() {
          this.this.loop = true;
        });
      } else {
        $this.removeClass('active');
        this.loop = false;
        $.each(this.audioArr, function() {
          this.this.loop = false;
        });
      }
    });

    $('#stepBackward').on('click', function() {
      if (this.curPlaying <= 0) return;

      if (this.curPlaying != -1) {
        this.audioArr[this.curPlaying].pause();
      }

      this.curPlaying--;
      this.audioArr[this.curPlaying].play();
    });

    $('#stepForward').on('click', function() {
      if (this.curPlaying >= this.audioArr.length - 1) return;

      if (this.curPlaying != -1) {
        this.audioArr[this.curPlaying].pause();
      }
      this.curPlaying++;
      this.audioArr[this.curPlaying].play();
    });

    $('#toTop').on('click', function() {
      $('html,body').animate({
        scrollTop: 0
      }, 100);
    });


    $('#triggerPlay').on('submit', function(e) {
      e.preventDefault();

      let num = parseInt($('#numOfTrack').val()) - 1;
      if (num < 0 || num === this.curPlaying || num > this.audioArr.length - 1) return;

      this.audioArr[this.curPlaying].pause();
      this.curPlaying = num;
      this.audioArr[this.curPlaying].play();
    });

    $('[data-toggle-audio]').on('click', function() {
      $('[data-audio-content]').toggleClass('expanded');
    });
  }

  toggleAudioBlock() {
    this.isOpenAudioBlock = !this.isOpenAudioBlock;
  }
}
