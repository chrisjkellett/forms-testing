import React from 'react';
import {shallow} from 'enzyme';
import DateInput from './DateInput';
import moment from 'moment';
import data from '../../constructors/app-data';

describe('<DateInput />', () => {
  const cmp_data = {
    change: jest.fn(),
    id: 'test',
    type: 'date',
    value: moment().format(data.DATE_FORMAT)
  }
  const cmp = shallow(<DateInput data={cmp_data} />);
  
  test('renders <Select /> for day, month and year', () => {
    expect(cmp.find('select')).toHaveLength(3);
  })
})

