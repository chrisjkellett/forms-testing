import React from 'react';
import {shallow} from 'enzyme';
import DateGroup from './DateGroup';
import DateSelect from '../DateSelect/DateSelect';
import moment from 'moment';
import appData from '../../../app-data';

describe('<DateGroup />', () => {
  test('renders <DateSelect /> for day, month and year', () => {
    const cmp_data = {
      change: jest.fn(),
      id: 'test',
      type: 'date',
      value: {
        day: '01',
        month: '01',
        year: '2019'
      },
      errors: ['is_valid_date'],
      touched: true
    }
    const cmp = shallow(<DateGroup data={cmp_data} />);
    expect(cmp.find(DateSelect)).toHaveLength(3);
  })

  test('renders validation error when date is invalid', () => {
    const cmp_data = {
      change: jest.fn(),
      id: 'test',
      type: 'date',
      value: {
        day: '31',
        month: '02',
        year: '2019'
      },
      errors: ['is_valid_date'],
      touched: true
    }
    const cmp = shallow(<DateGroup data={cmp_data} />);
    expect(cmp.find('.ErrorMessage')).toHaveLength(1);
  })
})

