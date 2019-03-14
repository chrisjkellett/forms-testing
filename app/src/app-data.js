import utilities from './utilities/utilities';
import moment from 'moment';

const year = moment().format('Y');

const appData = {
  DATE_FORMAT: {
    DAY: 'DD',
    MONTH: 'MM',
    YEAR: 'YYYY'
  },
  DATE_SELECTORS: {
    day: utilities.generateDays(),
    month: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    year: [year, parseInt(year) + 1]
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