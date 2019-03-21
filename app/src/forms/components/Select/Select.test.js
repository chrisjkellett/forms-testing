import React from 'react';
import {shallow} from 'enzyme';
import Select from './Select';
import utilities from '../../../utilities/test-utilities';

describe('<Select />', () => {
  const {TestData} = utilities;
  const data = {
    ...new TestData('select'),
    options: [
        {value: 'option1', label: 'option 1'},
        {value: 'option2', label: 'option 2'}
      ],
  }
  const cmp = shallow(<Select data={data} />)

  test('renders a div grouping element', () => {
    expect(cmp.find(`#${data.id}-wrapper`)).toHaveLength(1);
  })

  test('renders a label with the id', () => {
    expect(cmp.find('label').text()).toBe(data.id);
  })

  test('renders a select element', () => {
    expect(cmp.find('select')).toHaveLength(1);
  })
  
  test('renders options as per length of data.options', () => { 
    expect(cmp.find('option')).toHaveLength(data.options.length);
  })
})
