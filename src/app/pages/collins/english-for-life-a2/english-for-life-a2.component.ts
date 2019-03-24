import { Component, OnInit } from '@angular/core';
import {BaseURLs} from '../../../routes';

@Component({
  selector: 'app-english-for-life-a2',
  templateUrl: './english-for-life-a2.component.html',
  styleUrls: ['./english-for-life-a2.component.scss']
})
export class EnglishForLifeA2Component implements OnInit {
  url = BaseURLs;
  detailList = [{
      title: 'Meeting people',
      audioFile: '001 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (1)', 'English-for-Life-Speaking-A2 (2)']
    },
    {
      title: 'Describing people',
      audioFile: '007 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (3)']
    },
    {
      title: 'Talking about things',
      audioFile: '012 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (4)', 'English-for-Life-Speaking-A2 (5)']
    },
    {
      title: 'Talking about places',
      audioFile: '019 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (6)', 'English-for-Life-Speaking-A2 (7)']
    },
    {
      title: 'Making arrangements',
      audioFile: '025 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (8)', 'English-for-Life-Speaking-A2 (9)']
    },
    {
      title: 'Making requests',
      audioFile: '030 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (10)', 'English-for-Life-Speaking-A2 (11)']
    },
    {
      title: 'Ordering and buying',
      audioFile: '035 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (12)', 'English-for-Life-Speaking-A2 (13)']
    },
    {
      title: 'Speaking on the phone',
      audioFile: '043 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (14)', 'English-for-Life-Speaking-A2 (15)']
    },
    {
      title: 'Showing interest in a conversation',
      audioFile: '050 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (16)', 'English-for-Life-Speaking-A2 (17)']
    },
    {
      title: 'Developing a conversation',
      audioFile: '056 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (18)', 'English-for-Life-Speaking-A2 (19)']
    },
    {
      title: 'Checking for understanding',
      audioFile: '061 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (20)', 'English-for-Life-Speaking-A2 (21)']
    },
    {
      title: 'Listening to problems',
      audioFile: '066 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (22)', 'English-for-Life-Speaking-A2 (23)', ]
    },
    {
      title: 'Making a complaint',
      audioFile: '070 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (24)', 'English-for-Life-Speaking-A2 (25)']
    },
    {
      title: 'Making an apology',
      audioFile: '075 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (26)', 'English-for-Life-Speaking-A2 (27)']
    },
    {
      title: 'Showing sympathy',
      audioFile: '080 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (28)', 'English-for-Life-Speaking-A2 (29)']
    },
    {
      title: 'Saying "thank you"',
      audioFile: '084 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (30)', 'English-for-Life-Speaking-A2 (31)']
    },
    {
      title: 'Agreeing and disagreeing',
      audioFile: '091 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (33)', 'English-for-Life-Speaking-A2 (34)']
    },
    {
      title: 'Expressing strong opinions',
      audioFile: '095 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (35)', 'English-for-Life-Speaking-A2 (36)']
    },
    {
      title: 'Giving feedback',
      audioFile: '101 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (37)', 'English-for-Life-Speaking-A2 (38)']
    },
    {
      title: 'Saying "Well done!"',
      audioFile: '106 English for Life - Speaking',
      images: ['English-for-Life-Speaking-A2 (39)', 'English-for-Life-Speaking-A2 (40)']
  }];
  constructor() { }

  ngOnInit() {
  }

}
