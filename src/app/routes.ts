export const BaseURLs = {
  // base routes to lazily loaded modules
  masterIndex: 'master-index',
  ieltsBasicSpeaking: 'ielts-basic-speaking',
  oxfords: 'oxfords'
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
