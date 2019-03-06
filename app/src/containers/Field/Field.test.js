import React from 'react';
import {shallow} from 'enzyme';
import Field from './Field';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';

describe('<Field />', () => {
  
  test('renders Checkbox whem type is <checkbox>', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      options: {
        'test-1': { checked: false },
        'test-2': { checked: false }
      },
      type: 'checkbox'
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(Checkbox)).toHaveLength(1);
  })

  test('renders Input whem type is <text>', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      value: '',
      type: 'text'
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(Input)).toHaveLength(1);
  })
})

