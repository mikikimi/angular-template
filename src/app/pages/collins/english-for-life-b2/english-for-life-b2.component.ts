import {Component, OnInit} from '@angular/core';
import {BaseURLs} from '../../../routes';

@Component({
  selector: 'app-english-for-life-b2',
  templateUrl: './english-for-life-b2.component.html',
  styleUrls: ['./english-for-life-b2.component.scss']
})
export class EnglishForLifeB2Component implements OnInit {
  url = BaseURLs;
  detailList = [{
      title: 'Bumping nito people',
      audioFile: 'Track 01',
      images: ['English-for-Life-Speaking-B2 (1)-min', 'English-for-Life-Speaking-B2 (2)-min']
    },
    {
      title: 'Talking about yourself',
      audioFile: 'Track 07',
      images: ['English-for-Life-Speaking-B2 (3)-min', 'English-for-Life-Speaking-B2 (4)-min']
    },
    {
      title: 'Telephone and communication problems',
      audioFile: 'Track 10',
      images: ['English-for-Life-Speaking-B2 (5)-min', 'English-for-Life-Speaking-B2 (6)-min']
    },
    {
      title: 'Exchange information',
      audioFile: 'Track 14',
      images: ['English-for-Life-Speaking-B2 (7)-min', 'English-for-Life-Speaking-B2 (8)-min']
    },
    {
      title: 'Negotiating',
      audioFile: 'Track 17',
      images: ['English-for-Life-Speaking-B2 (9)-min', 'English-for-Life-Speaking-B2 (10)-min']
    },
    {
      title: 'Interrupting and letting others speak',
      audioFile: 'Track 21',
      images: ['English-for-Life-Speaking-B2 (11)-min', 'English-for-Life-Speaking-B2 (12)-min']
    },
    {
      title: 'Showing interest',
      audioFile: 'Track 25',
      images: ['English-for-Life-Speaking-B2 (13)-min', 'English-for-Life-Speaking-B2 (14)-min']
    },
    {
      title: 'Being supportive',
      audioFile: 'Track 30',
      images: ['English-for-Life-Speaking-B2 (15)-min', 'English-for-Life-Speaking-B2 (16)-min']
    },
    {
      title: 'Persuasion',
      audioFile: 'Track 33',
      images: ['English-for-Life-Speaking-B2 (17)-min', 'English-for-Life-Speaking-B2 (18)-min']
    },
    {
      title: 'Being tactful',
      audioFile: 'Track 37',
      images: ['English-for-Life-Speaking-B2 (19)-min', 'English-for-Life-Speaking-B2 (20)-min']
    },
    {
      title: 'Admitting and denying',
      audioFile: 'Track 39',
      images: ['English-for-Life-Speaking-B2 (21)-min', 'English-for-Life-Speaking-B2 (22)-min']
    },
    {
      title: 'Gossiping',
      audioFile: 'Track 42',
      images: ['English-for-Life-Speaking-B2 (24)-min', 'English-for-Life-Speaking-B2 (25)-min']
    },
    {
      title: 'Handling difficult conversations',
      audioFile: 'Track 46',
      images: ['English-for-Life-Speaking-B2 (26)-min', 'English-for-Life-Speaking-B2 (27)-min']
    },
    {
      title: 'Talking about money',
      audioFile: 'Track 50',
      images: ['English-for-Life-Speaking-B2 (28)-min', 'English-for-Life-Speaking-B2 (29)-min']
    },
    {
      title: 'Talking about stress',
      audioFile: 'Track 54',
      images: ['English-for-Life-Speaking-B2 (30)-min', 'English-for-Life-Speaking-B2 (31)-min']
    },
    {
      title: 'Showing that you\'re sceptical',
      audioFile: 'Track 58',
      images: ['English-for-Life-Speaking-B2 (32)-min', 'English-for-Life-Speaking-B2 (33)-min']
    },
    {
      title: 'Sounding confident and hesistant',
      audioFile: 'Track 61',
      images: ['English-for-Life-Speaking-B2 (34)-min', 'English-for-Life-Speaking-B2 (35)-min']
    },
    {
      title: 'Sounding excited',
      audioFile: 'Track 64',
      images: ['English-for-Life-Speaking-B2 (36)-min', 'English-for-Life-Speaking-B2 (37)-min']
    },
    {
      title: 'Showing annoyance and anger',
      audioFile: 'Track 68',
      images: ['English-for-Life-Speaking-B2 (38)-min', 'English-for-Life-Speaking-B2 (39)-min']
    },
    {
      title: 'Using sarcasm',
      audioFile: 'Track 74',
      images: ['English-for-Life-Speaking-B2 (40)-min', 'English-for-Life-Speaking-B2 (41)-min']
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
