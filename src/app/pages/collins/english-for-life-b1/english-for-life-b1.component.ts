import { Component, OnInit } from '@angular/core';
import {BaseURLs} from '../../../routes';

@Component({
  selector: 'app-english-for-life-b1',
  templateUrl: './english-for-life-b1.component.html',
  styleUrls: ['./english-for-life-b1.component.scss']
})
export class EnglishForLifeB1Component implements OnInit {
  url = BaseURLs;
  detailList = [{
      title: 'Starting an informal conversation',
      audioFile: '001 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (1)', 'English-for-Life-Speaking-B1 (2)']
    },
    {
      title: 'Responding',
      audioFile: '006 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (3)']
    },
    {
      title: 'Interrupting',
      audioFile: '012 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (5)', 'English-for-Life-Speaking-B1 (6)']
    },
    {
      title: 'Exchange information',
      audioFile: '018 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (7)', 'English-for-Life-Speaking-B1 (8)']
    },
    {
      title: 'What to say when you don\'t remember a word',
      audioFile: '024 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (9)', 'English-for-Life-Speaking-B1 (10)']
    },
    {
      title: 'Changing the subject',
      audioFile: '030 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (11)', 'English-for-Life-Speaking-B1 (12)']
    },
    {
      title: 'Asking for clarification and checking understanding',
      audioFile: '035 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (13)', 'English-for-Life-Speaking-B1 (14)']
    },
    {
      title: 'Showing interest in a conversation',
      audioFile: '040 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (15)', 'English-for-Life-Speaking-B1 (16)']
    },
    {
      title: 'How to end the conversation politely',
      audioFile: '048 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (17)', 'English-for-Life-Speaking-B1 (18)']
    },
    {
      title: 'Making suggestions and proposals',
      audioFile: '054 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (19)', 'English-for-Life-Speaking-B1 (20)']
    },
    {
      title: 'Making polite requests',
      audioFile: '060 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (21)', 'English-for-Life-Speaking-B1 (22)']
    },
    {
      title: 'Asking for and giving advice',
      audioFile: '064 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (23)', 'English-for-Life-Speaking-B1 (24)']
    },
    {
      title: 'Asking for and giving opinions',
      audioFile: '069 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (25)', 'English-for-Life-Speaking-B1 (26)']
    },
    {
      title: 'Agreeing and disagreeing',
      audioFile: '074 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (27)', 'English-for-Life-Speaking-B1 (28)']
    },
    {
      title: 'Emphasizing what you say',
      audioFile: '079 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (29)', 'English-for-Life-Speaking-B1 (30)']
    },
    {
      title: 'Giving and receiving compliments',
      audioFile: '084 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (31)', 'English-for-Life-Speaking-B1 (32)']
    },
    {
      title: 'Encouraging and reassuring',
      audioFile: '090 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (33)', 'English-for-Life-Speaking-B1 (34)']
    },
    {
      title: 'Giving negative feedback or bad news',
      audioFile: '094 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (35)', 'English-for-Life-Speaking-B1 (36)']
    },
    {
      title: 'Saying no politely',
      audioFile: '100 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (37)', 'English-for-Life-Speaking-B1 (38)']
    },
    {
      title: 'Complaining about something',
      audioFile: '107 English for Life - Speaking',
      images: ['English-for-Life-Speaking-B1 (39)', 'English-for-Life-Speaking-B1 (40)']
  }];
  constructor() { }

  ngOnInit() {
  }

}
