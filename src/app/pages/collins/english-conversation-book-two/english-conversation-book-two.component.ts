import { Component, OnInit } from '@angular/core';
import {BaseURLs} from '../../../routes';

@Component({
  selector: 'app-english-conversation-book-two',
  templateUrl: './english-conversation-book-two.component.html',
  styleUrls: ['./english-conversation-book-two.component.scss']
})
export class EnglishConversationBookTwoComponent implements OnInit {
  url = BaseURLs;
  constructor() { }

  ngOnInit() {
  }

}
