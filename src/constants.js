const BASE_URL = 'http://localhost:1337/meteora';
const ROOT_PATH = '/';
const STORY_PATH = '/story';
const CHARACTERS_PATH = '/characters';

const ACTIVE_CLASSNAME = 'active';
const LIGHT_CLASSNAME = 'light';
const CARD_CLASSNAME = 'card-item';
const EDITORIAL_CLASSNAME = 'editorial';

const CTA_TEXT = {
  [ROOT_PATH]: 'Play',
  [STORY_PATH]: 'Story',
  [CHARACTERS_PATH]: 'Characters'
};

const SQUARE_CONFIG = {
  SQUARE_APP_ID: 'sandbox-sq0idb-wyDnCeGb3xKoq1jDladoBA',
  SQUARE_LOCATION_ID: 'LREEPV1REVAGE',
  // SQUARE_APP_ID: 'sq0idp-rT4cOK5_kccyWm8GYOnS0g',
  // SQUARE_LOCATION_ID: 'LZQA0FV1D50R3',
};

export {
  BASE_URL,
  ROOT_PATH,
  STORY_PATH,
  CHARACTERS_PATH,
  ACTIVE_CLASSNAME,
  LIGHT_CLASSNAME,
  CARD_CLASSNAME,
  EDITORIAL_CLASSNAME,
  CTA_TEXT,
  SQUARE_CONFIG
};
