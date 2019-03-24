export const BaseURLs = {
  // base routes to lazily loaded modules
  masterIndex: 'master-index',
  ieltsBasicSpeaking: 'ielts-basic-speaking',
  oxfords: 'oxfords',
  collins: 'collins'
};

export const OxfordURLsNoPrefix = {
  // base routes to lazily loaded modules
  meeting: 'meeting',
  negotiating: 'negotiating',
  socializing: 'socializing',
  telephoning: 'telephoning',
  readNDiscover: 'read-n-discover'
};

export const OxfordURLs = {
  // base routes to lazily loaded modules
  meeting: BaseURLs.oxfords + '/' + OxfordURLsNoPrefix.meeting,
  negotiating: BaseURLs.oxfords + '/' + OxfordURLsNoPrefix.negotiating,
  socializing: BaseURLs.oxfords + '/' + OxfordURLsNoPrefix.socializing,
  telephoning: BaseURLs.oxfords + '/' + OxfordURLsNoPrefix.telephoning,
  readNDiscover: BaseURLs.oxfords + '/' + OxfordURLsNoPrefix.readNDiscover
};
export const CollinsURLsNoPrefix = {
  // base routes to lazily loaded modules
  englishForLifeA2: 'english-for-life-a2',
  englishForLifeB1: 'english-for-life-b1',
  englishForLifeB2: 'english-for-life-b2',
  englishForBusinessSpeaking: 'english-for-business-speaking',
  englishConversationBookTwo: 'english-conversation-book-2',
  collinsForIELTSSpeaking: 'collins-for-ielts-speaking'
};

export const CollinsURLs = {
  // base routes to lazily loaded modules
  englishForLifeA2: BaseURLs.collins + '/' + CollinsURLsNoPrefix.englishForLifeA2,
  englishForLifeB1: BaseURLs.collins + '/' + CollinsURLsNoPrefix.englishForLifeB1,
  englishForLifeB2: BaseURLs.collins + '/' + CollinsURLsNoPrefix.englishForLifeB2,
  englishForBusinessSpeaking: BaseURLs.collins + '/' + CollinsURLsNoPrefix.englishForBusinessSpeaking,
  englishConversationBookTwo: BaseURLs.collins + '/' + CollinsURLsNoPrefix.englishConversationBookTwo,
  collinsForIELTSSpeaking: BaseURLs.collins + '/' + CollinsURLsNoPrefix.collinsForIELTSSpeaking
};
