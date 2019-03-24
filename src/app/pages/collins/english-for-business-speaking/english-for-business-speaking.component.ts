import { Component, OnInit } from '@angular/core';
import {BaseURLs} from '../../../routes';

@Component({
  selector: 'app-english-for-business-speaking',
  templateUrl: './english-for-business-speaking.component.html',
  styleUrls: ['./english-for-business-speaking.component.scss']
})
export class EnglishForBusinessSpeakingComponent implements OnInit {
  url = BaseURLs;
  detailList = [{
      title: 'Starting a conversation',
      audioFile: '001 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (1)', 'Collins-English-for-Business-Speaking (2)']
    },
    {
      title: 'Talking about jobs',
      audioFile: '007 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (3)', 'Collins-English-for-Business-Speaking (4)']
    },
    {
      title: 'Showing interest in other people',
      audioFile: '010 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (5)', 'Collins-English-for-Business-Speaking (6)']
    },
    {
      title: 'Exchanging information',
      audioFile: '018 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (7)']
    },
    {
      title: 'Cold calling',
      audioFile: '024 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (8)', 'Collins-English-for-Business-Speaking (9)']
    },
    {
      title: 'Confirming or rearranging appointments',
      audioFile: '029 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (10)', 'Collins-English-for-Business-Speaking (11)']
    },
    {
      title: 'Making a complaint on the telephone',
      audioFile: '034 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (12)', 'Collins-English-for-Business-Speaking (13)']
    },
    {
      title: 'Dealing with a complaint on the telephone',
      audioFile: '039 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (14)', 'Collins-English-for-Business-Speaking (15)']
    },
    {
      title: 'Running a face-to-face meeting',
      audioFile: '045 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (16)']
    },
    {
      title: 'Negotiating agreement',
      audioFile: '050 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (17)']
    },
    {
      title: 'Assigning action points',
      audioFile: '055 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (18)', 'Collins-English-for-Business-Speaking (19)']
    },
    {
      title: 'Running a teleconference',
      audioFile: '059 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (20)', 'Collins-English-for-Business-Speaking (21)']
    },
    {
      title: 'Presenting a product or service',
      audioFile: '064 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (22)', 'Collins-English-for-Business-Speaking (23)']
    },
    {
      title: 'Working on a stand',
      audioFile: '067 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (24)', 'Collins-English-for-Business-Speaking (25)']
    },
    {
      title: 'Closing a sale',
      audioFile: '073 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (26)', 'Collins-English-for-Business-Speaking (27)']
    },
    {
      title: 'Saying no \'politely',
      audioFile: '076 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (28)', 'Collins-English-for-Business-Speaking (29)']
    },
    {
      title: 'The successful job interviewer',
      audioFile: '083 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (30)', 'Collins-English-for-Business-Speaking (31)']
    },
    {
      title: 'The successful interview candidate',
      audioFile: '088 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (32)', 'Collins-English-for-Business-Speaking (33)']
    },
    {
      title: 'Carrying out performance reviews',
      audioFile: '092 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (34)', 'Collins-English-for-Business-Speaking (35)']
    },
    {
      title: 'Persuading your manager',
      audioFile: '096 English for Business_ Speaking',
      images: ['Collins-English-for-Business-Speaking (36)', 'Collins-English-for-Business-Speaking (37)']
  }];

  constructor() { }

  ngOnInit() {
  }

}
