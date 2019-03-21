import React from 'react';
import Input from './Input';
import {shallow} from 'enzyme';
import utilities from '../../../utilities/test-utilities';

describe('<Input />', () => {
  const data = new utilities.TestData('input');
  const cmp = shallow(<Input data={data} />)
    
  test('renders an input', () => {
    expect(cmp.find('input')).toHaveLength(1);
  })

  test('no error messages present', () => {
   expect(cmp.find('.ErrorMessage')).toHaveLength(1)
  })

})
