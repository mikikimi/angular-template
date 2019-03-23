import { Component, OnInit } from '@angular/core';
import { BaseURLs } from 'app/routes';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {
  url = BaseURLs;
  constructor() { }

  ngOnInit() {
  }

}
