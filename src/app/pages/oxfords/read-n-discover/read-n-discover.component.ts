import { Component, OnInit } from '@angular/core';
import { BaseURLs, OxfordURLs } from 'app/routes';
import { OxfordReadNImagineContext } from '@pages/oxfords/read-n-discover/context';

import * as _ from "lodash";

@Component({
  selector: 'app-read-n-discover',
  templateUrl: './read-n-discover.component.html',
  styleUrls: ['./read-n-discover.component.scss']
})
export class ReadNDiscoverComponent implements OnInit {
  url = BaseURLs;
  oxfordUrl = OxfordURLs;

  unitList = [];
  oContext = OxfordReadNImagineContext.list;

  constructor() {
    this.unitList = _.map(this.oContext, (item) => item.unitNumber);
    console.log(this.unitList);
  }

  ngOnInit() {
  }

}
