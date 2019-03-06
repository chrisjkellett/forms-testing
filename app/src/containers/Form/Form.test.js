import React from 'react';
import {shallow} from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  let cmp, instance;
  beforeAll(() => {
    cmp = shallow(<Form data={data} id="test" />);
    instance = cmp.instance(); 
  })
 
 

  test('should set its own state via props', () => {
    expect(cmp.state()).toEqual(data);
  })
  
})

