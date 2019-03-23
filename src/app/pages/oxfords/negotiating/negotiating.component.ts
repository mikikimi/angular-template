import { Component, OnInit } from '@angular/core';
import { BaseURLs } from 'app/routes';

@Component({
  selector: 'app-negotiating',
  templateUrl: './negotiating.component.html',
  styleUrls: ['./negotiating.component.scss']
})
export class NegotiatingComponent implements OnInit {
  url = BaseURLs;
  constructor() { }

  ngOnInit() {
  }

}
