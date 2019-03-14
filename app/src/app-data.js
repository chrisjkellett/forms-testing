import utilities from './utilities/utilities';

const appData = {
  DATE_FORMAT: 'DD-MM-YYYY',
  DATE_SELECTORS: {
    day: utilities.generateDays(),
    month: [],
    year: []
  },
  LEVELS: [
    "KET",
    "PET",
    "FCE",
    "CAE",
    "CPE"
  ],
  AVAILABILITY: [
    "mon-morning",
    "mon-afternoon",
    "mon-evening",
  ],
  ROLES: [
    "SE",
    "TL",
    "INV"
  ],
  test: [
    "value-1",
    "value-2",
    "value-3"
  ]
}

export default appData;