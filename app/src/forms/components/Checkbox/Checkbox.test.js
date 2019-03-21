import React from 'react';
import {shallow} from 'enzyme';
import Checkbox from './Checkbox';
import utls from '../../../utilities/test-utilities';

describe('<Checkbox />', () => {
  const data = {
    ...new utls.TestData('checkbox'),
    value: {
      'test-1': false,
      'test-2': false
    }
  }
  const cmp = shallow(<Checkbox data={data} />);
  const options = Object.keys(data.value);
  
  test('renders a checkbox for each option', () => {
    expect(cmp.find('input')).toHaveLength(options.length);
  })

  test('renders a label for each option', () => {
    expect(cmp.find('label')).toHaveLength(options.length + 1);
  })

  test('can render an error', () => {
    expect(cmp.find('.ErrorMessage')).toHaveLength(1);
  })
  
})

