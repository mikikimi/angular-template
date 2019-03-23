import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ielts-basic-speaking',
  templateUrl: './ielts-basic-speaking.component.pug',
  styleUrls: ['./ielts-basic-speaking.component.scss']
})
export class IeltsBasicSpeakingComponent implements OnInit {

  curSpeed = 1.0;

  constructor() { }

  ngOnInit() {
  }

}
