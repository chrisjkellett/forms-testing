import React from 'react';
import {shallow} from 'enzyme';
import Form from './Form';
import Field from '../Field/Field';
import {examinerFormModel} from '../../constructors/forms/forms';

describe('<Form />', () => {
  let cmp, myModel, instance;
  const {model, id} = examinerFormModel;
  
  beforeAll(() => {
    cmp = shallow(<Form model={model} id={id} />);
    instance = cmp.instance();
    myModel = cmp.state(id);
  })

  test('should set own state via props where key is id and model is value', () => {
    expect(cmp.state(id)).toEqual(model);
  })

  test('maps handlers to model on mounting', () => {
    const input = Object.keys(myModel).find(item => myModel[item].type === 'text');
    expect(myModel[input].change).not.toBeNull();
  })

  test('maps a Field cmp for each key in state', () => {
    const numberOfKeys = Object.keys(cmp.state()[id]).length;
    expect(cmp.find(Field)).toHaveLength(numberOfKeys);
  })

  test('controls a Checkbox', () => {
    const group = 'levels';
    const testLevel = 'KET';
    const event = {
      target: {
        id: testLevel,
        attributes: {
          group: {
            value: group
          }
        },
        checked: true
      }
    }
    
    instance.handlers.$changeCheckbox(event);
    expect(cmp.state()[id][group].options[testLevel].checked).toBe(true);
  })
  
})

