import { Component, OnInit } from '@angular/core';
import { BaseURLs } from 'app/routes';

@Component({
  selector: 'app-index',
  templateUrl: './master-index.component.html',
  styleUrls: ['./master-index.component.scss']
})
export class MasterIndexComponent implements OnInit {

  arr = Array;
  url = BaseURLs;

  constructor() { }

  ngOnInit() {
  }

}
