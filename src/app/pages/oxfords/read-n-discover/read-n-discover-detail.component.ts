import { Component, OnInit } from '@angular/core';
import { OxfordReadNImagineContext } from './context';
import { ActivatedRoute } from '@angular/router';
import { OxfordURLs } from 'app/routes';

import * as _ from "lodash";

@Component({
  selector: 'app-read-n-discover-detail',
  templateUrl: './read-n-discover-detail.component.html',
  styleUrls: ['./read-n-discover-detail.component.scss']
})
export class ReadNDiscoverDetailComponent implements OnInit {
  oContext;
  url = OxfordURLs;
  unitNumber = 6.1;

  constructor(private route: ActivatedRoute) {
    window.scroll(0, 0);
    this.route.params.subscribe(params => {
      this.unitNumber = params['unitNumber'];
      console.log(this.unitNumber);
      if (this.unitNumber) {
        this.oContext = _.get(_.filter(OxfordReadNImagineContext.list, ), 0);
      }
    });
  }

  ngOnInit() {
  }

}
