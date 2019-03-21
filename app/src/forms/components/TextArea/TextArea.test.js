import React from 'react';
import TextArea from './TextArea';
import {shallow} from 'enzyme';
import utilities from '../../../utilities/test-utilities';

describe('<TextArea />', () => {
  const {TestData} = utilities;
  const data = new TestData('textarea');
  const cmp = shallow(<TextArea data={data} />)
  console.log(cmp.debug());
  
  test('render a group element', () => {
    expect(cmp.find(`#${data.id}-wrapper`)).toHaveLength(1);
  })

  test('render a label', () => {
    expect(cmp.find('label').text()).toBe(data.id);
  })

  test('render a text area', () => {
    expect(cmp.find('textarea')).toHaveLength(1);
  })
  
})
