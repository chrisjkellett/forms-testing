import React from 'react';
import {shallow} from 'enzyme';
import DateGroup from './DateGroup';
import DateSelect from '../DateSelect/DateSelect';
import utls from '../../../utilities/test-utilities';

describe('<DateGroup />', () => {
  const data = {
    ...new utls.TestData('date'),
    value: {
      day: '01',
      month: '01',
      year: '2019'
    }
  }
  const cmp = shallow(<DateGroup data={data} />);

  test('renders <DateSelect /> for day, month and year', () => {
    expect(cmp.find(DateSelect)).toHaveLength(3);
  })

  test('renders validation error when date is invalid', () => {
    expect(cmp.find('.ErrorMessage')).toHaveLength(1);
  })
})

