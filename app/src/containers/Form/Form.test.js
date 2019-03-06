import React from 'react';
import {shallow} from 'enzyme';
import Form from './Form';
import {examinerFormModel} from '../../constructors/forms/forms';

describe('<Form />', () => {
  let cmp, instance;
  const {model, id} = examinerFormModel;
  beforeAll(() => {
    cmp = shallow(<Form model={model} id={id} />);
    instance = cmp.instance(); 
  })

  test('should set own state via props where key is id and model is value', () => {
    expect(cmp.state(id)).toEqual(model);
  })
  
})

