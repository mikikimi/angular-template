import { Component, OnInit } from '@angular/core';
import { BaseURLs } from 'app/routes';

@Component({
  selector: 'app-telephoning',
  templateUrl: './telephoning.component.html',
  styleUrls: ['./telephoning.component.scss']
})
export class TelephoningComponent implements OnInit {
  url = BaseURLs;
  constructor() { }

  ngOnInit() {
  }

}
