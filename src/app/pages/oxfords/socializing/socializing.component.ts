import { Component, OnInit } from '@angular/core';
import { BaseURLs } from 'app/routes';

@Component({
  selector: 'app-socializing',
  templateUrl: './socializing.component.html',
  styleUrls: ['./socializing.component.scss']
})
export class SocializingComponent implements OnInit {
  url = BaseURLs;
  constructor() { }

  ngOnInit() {
  }

}
