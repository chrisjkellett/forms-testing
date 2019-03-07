import React from 'react';
import {shallow} from 'enzyme';
import Select from './Select';

describe('<Select />', () => {
  const data = {
    change: jest.fn(),
    id: 'test',
    options: [
      {id: 'option1', label: 'option 1'},
      {id: 'option2', label: 'option 2'}
    ],
    type: 'select',
    value: 'option1'
  }
  const cmp = shallow(<Select data={data} />)
  test('renders a select element', () => {
    expect(cmp.find('select')).toHaveLength(1);
  })

  test('renders options as per length of data.options', () => {
    expect(cmp.find('option')).toHaveLength(data.options.length);
  })
  
})
