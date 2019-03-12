import React from 'react';
import {mount} from 'enzyme';
import DateInput from './DateInput';
import Select from '../Select/Select';
import moment from 'moment';
import appData from '../../app-data';

describe('<DateInput />', () => {
  const cmp_data = {
    change: jest.fn(),
    id: 'test',
    type: 'date',
    value: moment().format(appData.DATE_FORMAT)
  }
  const cmp = mount(<DateInput data={cmp_data} />);
  
  test('renders <Select /> for day, month and year', () => {
    expect(cmp.find(Select)).toHaveLength(3);
  })

  test('renders <Select /> for days with 31 options', () => {
    expect(cmp.find('#day-wrapper')).toHaveLength(1);
  })
})

