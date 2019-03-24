import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-screen-combine-audio',
  templateUrl: './screen-combine-audio.component.html',
  styleUrls: ['./screen-combine-audio.component.scss']
})
export class ScreenCombineAudioComponent implements OnInit {

  @Input() detailList = [];
  @Input() audioPath = '';
  @Input() audioType = '.mp3';
  @Input() screenshotPath = '';
  @Input() screenshotType = '.jpg';

  constructor() { }

  ngOnInit() {
  }

}
