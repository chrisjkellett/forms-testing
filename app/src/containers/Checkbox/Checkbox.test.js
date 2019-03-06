import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox';

describe('<Checkbox />', () => {
  const data = {
    change: jest.fn(),
    id: 'test',
    options: {
      'test-1': { checked: false },
      'test-2': { checked: false }
    },
    type: 'checkbox'
  }
  const cmp = shallow(<Checkbox data={data} />);
  
  test('renders a checkbox for each option', () => {
    const numberOfOptions = Object.keys(data.options).length;
    expect(cmp.find('input')).toHaveLength(numberOfOptions);
  })
})

