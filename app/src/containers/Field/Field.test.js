import React from 'react';
import {shallow} from 'enzyme';
import Field from './Field';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Select from '../Select/Select';

describe('<Field />', () => {
  
  test('renders Checkbox when type is checkbox', () => {
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

  test('renders Input when type is text', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      value: '',
      type: 'text'
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(Input)).toHaveLength(1);
  })

  test('renders Select when type is select', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      options: [
        {id: 'value-1', label: 'value 1'}
      ],
      type: 'select'
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(Select)).toHaveLength(1);
  })
  
})

