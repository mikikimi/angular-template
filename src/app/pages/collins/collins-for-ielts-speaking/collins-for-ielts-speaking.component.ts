import { Component, OnInit } from '@angular/core';
import {BaseURLs} from '../../../routes';

@Component({
  selector: 'app-collins-for-ielts-speaking',
  templateUrl: './collins-for-ielts-speaking.component.html',
  styleUrls: ['./collins-for-ielts-speaking.component.scss']
})
export class CollinsForIeltsSpeakingComponent implements OnInit {
  url = BaseURLs;
  detailList = [{
    title: 'People and relationship',
    audioFiles: [{
      audioTitle: 'Track 01',
      audioFile: 'CD 1/Track 01'
    },
      {
        audioTitle: 'Track 02',
        audioFile: 'CD 1/Track 02'
      },
      {
        audioTitle: 'Track 03',
        audioFile: 'CD 1/Track 03'
      },
      {
        audioTitle: 'Track 07',
        audioFile: 'CD 1/Track 07'
      }],
    images: ['Collins-IELTS-Speaking (1)', 'Collins-IELTS-Speaking (2)', 'Collins-IELTS-Speaking (2)_2', 'Collins-IELTS-Speaking (3)']
  }, {
    title: 'A healthy body',
    audioFiles: [{
      audioTitle: 'Track 08',
      audioFile: 'CD 1/Track 08'
    },
      {
        audioTitle: 'Track 09',
        audioFile: 'CD 1/Track 09'
      },
      {
        audioTitle: 'Track 13',
        audioFile: 'CD 1/Track 13'
      },
      {
        audioTitle: 'Track 14',
        audioFile: 'CD 1/Track 14'
      }],
    images: ['Collins-IELTS-Speaking (3)_2', 'Collins-IELTS-Speaking (4)', 'Collins-IELTS-Speaking (4)_2', 'Collins-IELTS-Speaking (5)']
  }, {
    title: 'Studies and work',
    audioFiles: [{
      audioTitle: 'Track 15',
      audioFile: 'CD 1/Track 15'
    }, {
      audioTitle: 'Track 16',
      audioFile: 'CD 1/Track 16'
    }, {
      audioTitle: 'Track 17',
      audioFile: 'CD 1/Track 17'
    }, {
      audioTitle: 'Track 18',
      audioFile: 'CD 1/Track 18'
    }],
    images: ['Collins-IELTS-Speaking (6)', 'Collins-IELTS-Speaking (7)', 'Collins-IELTS-Speaking (8)']
  }, {
    title: 'The world around us',
    audioFiles: [{
      audioTitle: 'Track 21',
      audioFile: 'CD 1/Track 21'
    }, {
      audioTitle: 'Track 23',
      audioFile: 'CD 1/Track 23'
    }, {
      audioTitle: 'Track 24',
      audioFile: 'CD 1/Track 24'
    }, {
      audioTitle: 'Track 29',
      audioFile: 'CD 1/Track 29'
    }],
    images: ['Collins-IELTS-Speaking (8)_2', 'Collins-IELTS-Speaking (9)', 'Collins-IELTS-Speaking (10)']
  }, {
    title: 'Communication',
    audioFiles: [{
      audioTitle: 'Track 30',
      audioFile: 'CD 1/Track 30'
    }, {
      audioTitle: 'Track 31',
      audioFile: 'CD 1/Track 31'
    }, {
      audioTitle: 'Track 32',
      audioFile: 'CD 1/Track 32'
    }, {
      audioTitle: 'Track 35',
      audioFile: 'CD 1/Track 35'
    }, {
      audioTitle: 'Track 36',
      audioFile: 'CD 1/Track 36'
    }, {
      audioTitle: 'Track 37',
      audioFile: 'CD 1/Track 37'
    }],
    images: ['Collins-IELTS-Speaking (11)', 'Collins-IELTS-Speaking (12)', 'Collins-IELTS-Speaking (13)']
  }, {
    title: 'Technology',
    audioFiles: [{
      audioTitle: 'Track 38',
      audioFile: 'CD 1/Track 38'
    }, {
      audioTitle: 'Track 39',
      audioFile: 'CD 1/Track 39'
    }, {
      audioTitle: 'Track 44',
      audioFile: 'CD 1/Track 44'
    }, {
      audioTitle: 'Track 45',
      audioFile: 'CD 1/Track 45'
    }, {
      audioTitle: 'Track 46',
      audioFile: 'CD 1/Track 46'
    }, {
      audioTitle: 'Track 47',
      audioFile: 'CD 1/Track 47'
    }, {
      audioTitle: 'Track 48',
      audioFile: 'CD 1/Track 48'
    }, {
      audioTitle: 'Track 49',
      audioFile: 'CD 1/Track 49'
    }, {
      audioTitle: 'Track 50',
      audioFile: 'CD 1/Track 50'
    }],
    images: ['Collins-IELTS-Speaking (14)', 'Collins-IELTS-Speaking (15)', 'Collins-IELTS-Speaking (16)']
  }, {
    title: 'Hobbies',
    audioFiles: [{
      audioTitle: 'Track 51',
      audioFile: 'CD 1/Track 51'
    }, {
      audioTitle: 'Track 52',
      audioFile: 'CD 1/Track 52'
    }, {
      audioTitle: 'Track 01',
      audioFile: 'CD 2/Track 01'
    }, {
      audioTitle: 'Track 02',
      audioFile: 'CD 2/Track 02'
    }, {
      audioTitle: 'Track 03',
      audioFile: 'CD 2/Track 03'
    }, {
      audioTitle: 'Track 04',
      audioFile: 'CD 2/Track 04'
    }, {
      audioTitle: 'Track 10',
      audioFile: 'CD 2/Track 10'
    }],
    images: ['Collins-IELTS-Speaking (16)_2', 'Collins-IELTS-Speaking (17)', 'Collins-IELTS-Speaking (18)', 'Collins-IELTS-Speaking (19)', 'Collins-IELTS-Speaking (20)']
  }, {
    title: 'Youth',
    audioFiles: [{
      audioTitle: 'Track 11',
      audioFile: 'CD 2/Track 11'
    }, {
      audioTitle: 'Track 12',
      audioFile: 'CD 2/Track 12'
    }, {
      audioTitle: 'Track 13',
      audioFile: 'CD 2/Track 13'
    }, {
      audioTitle: 'Track 14',
      audioFile: 'CD 2/Track 14'
    }, {
      audioTitle: 'Track 19',
      audioFile: 'CD 2/Track 19'
    }],
    images: ['Collins-IELTS-Speaking (20)_2', 'Collins-IELTS-Speaking (21)', 'Collins-IELTS-Speaking (22)', 'Collins-IELTS-Speaking (23)']
  }, {
    title: 'Home',
    audioFiles: [{
      audioTitle: 'Track 20',
      audioFile: 'CD 2/Track 20'
    }, {
      audioTitle: 'Track 21',
      audioFile: 'CD 2/Track 21'
    }, {
      audioTitle: 'Track 22',
      audioFile: 'CD 2/Track 22'
    }, {
      audioTitle: 'Track 25',
      audioFile: 'CD 2/Track 25'
    }],
    images: ['Collins-IELTS-Speaking (23)_2', 'Collins-IELTS-Speaking (24)', 'Collins-IELTS-Speaking (25)', 'Collins-IELTS-Speaking (26)']
  }, {
    title: 'Culture',
    audioFiles: [{
      audioTitle: 'Track 30',
      audioFile: 'CD 2/Track 30'
    }, {
      audioTitle: 'Track 31',
      audioFile: 'CD 2/Track 31'
    }, {
      audioTitle: 'Track 32',
      audioFile: 'CD 2/Track 32'
    }, {
      audioTitle: 'Track 37',
      audioFile: 'CD 2/Track 37'
    }, {
      audioTitle: 'Track 38',
      audioFile: 'CD 2/Track 38'
    }, {
      audioTitle: 'Track 44',
      audioFile: 'CD 2/Track 44'
    }],
    images: ['Collins-IELTS-Speaking (26)_2', 'Collins-IELTS-Speaking (27)', 'Collins-IELTS-Speaking (28)']
  }, {
    title: 'On the move',
    audioFiles: [{
      audioTitle: 'Track 45',
      audioFile: 'CD 2/Track 45'
    }, {
      audioTitle: 'Track 46',
      audioFile: 'CD 2/Track 46'
    }, {
      audioTitle: 'Track 47',
      audioFile: 'CD 2/Track 47'
    }, {
      audioTitle: 'Track 49',
      audioFile: 'CD 2/Track 49'
    }, {
      audioTitle: 'Track 51',
      audioFile: 'CD 2/Track 51'
    }, {
      audioTitle: 'Track 52',
      audioFile: 'CD 2/Track 52'
    }],
    images: ['Collins-IELTS-Speaking (29)', 'Collins-IELTS-Speaking (30)', 'Collins-IELTS-Speaking (31)']
  }, {
    title: 'Practice Exam',
    audioFiles: [{
      audioTitle: 'Track 53',
      audioFile: 'CD 2/Track 53'
    }, {
      audioTitle: 'Track 54',
      audioFile: 'CD 2/Track 54'
    }, {
      audioTitle: 'Track 55',
      audioFile: 'CD 2/Track 55'
    }, {
      audioTitle: 'Track 56',
      audioFile: 'CD 2/Track 56'
    }, {
      audioTitle: 'Track 57',
      audioFile: 'CD 2/Track 57'
    }],
    images: ['Collins-IELTS-Speaking (31)_2', 'Collins-IELTS-Speaking (32)', 'Collins-IELTS-Speaking (33)', 'Collins-IELTS-Speaking (34)', 'Collins-IELTS-Speaking (35)']
  }];
  constructor() { }

  ngOnInit() {
  }

}
