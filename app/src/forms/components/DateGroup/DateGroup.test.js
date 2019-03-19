import React from 'react';
import {shallow} from 'enzyme';
import DateGroup from './DateGroup';
import DateSelect from '../DateSelect/DateSelect';
import moment from 'moment';
import appData from '../../../app-data';

describe('<DateGroup />', () => {
  const cmp_data = {
    change: jest.fn(),
    id: 'test',
    type: 'date',
    value: {
      day: '01',
      month: '01',
      year: '2019'
    }
  }
  const cmp = shallow(<DateGroup data={cmp_data} />);
  
  test('renders <DateSelect /> for day, month and year', () => {
    expect(cmp.find(DateSelect)).toHaveLength(3);
  })
})

