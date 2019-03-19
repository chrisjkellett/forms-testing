import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  const data = {
    change: jest.fn(),
    id: 'test',
    value: {
      'test-1': false,
      'test-2': false
    },
    type: 'checkbox',
    errors: []
  }
  const cmp = shallow(<Checkbox data={data} />);
  
  test('renders a checkbox for each option', () => {
    const numberOfOptions = Object.keys(data.value).length;
    expect(cmp.find('input')).toHaveLength(numberOfOptions);
  })
})

