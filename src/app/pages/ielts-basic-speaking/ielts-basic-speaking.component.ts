import { AfterViewInit, Component } from '@angular/core';
import { BaseURLs } from 'app/routes';

@Component({
  selector: 'app-ielts-basic-speaking',
  templateUrl: './ielts-basic-speaking.component.html',
  styleUrls: ['./ielts-basic-speaking.component.scss']
})
export class IeltsBasicSpeakingComponent implements AfterViewInit {
  url = BaseURLs;

  constructor() {
  }

  ngAfterViewInit() {
  }
}
