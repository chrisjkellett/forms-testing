import React from 'react';
import {shallow} from 'enzyme';
import DateInput from './DateInput';
import Select from '../Select/Select';
import moment from 'moment';
import data from '../../app-data';

describe('<DateInput />', () => {
  const cmp_data = {
    change: jest.fn(),
    id: 'test',
    type: 'date',
    value: moment().format(data.DATE_FORMAT)
  }
  const cmp = shallow(<DateInput data={cmp_data} />);
  
  test('renders <Select /> for day, month and year', () => {
    expect(cmp.find(Select)).toHaveLength(3);
  })
})

