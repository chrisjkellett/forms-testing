import React from 'react';
import Input from './Input';
import {shallow} from 'enzyme';

describe('<Input />', () => {
  const data = {
    id: 'test',
    type: 'text',
    change: jest.fn(),
    value: ''
  }
  const cmp = shallow(<Input data={data} />)
  test('renders an input', () => {
    const input = cmp.find('#test');
    expect(input).toHaveLength(1);
  })
  
})
