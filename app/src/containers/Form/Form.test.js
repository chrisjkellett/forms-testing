import React from 'react';
import {shallow} from 'enzyme';
import Form from './Form';
import Field from '../Field/Field';

describe('<Form />', () => {
  let cmp, instance;
  const testInput = 'test-input';
  const testCheckbox = 'test-checkbox';
  const id = 'test';
  const newModel = {
    [testInput]: {
      type: 'text',
      value: '',
      change: null
    },
    [testCheckbox]: {
      type: 'checkbox',
      change: null,
      options: {
        option1: {checked: false},
        option2: {checked: false}
      }
    },
    'test-select': {
      type: 'select',
      change: null,
      options: [
        {id: 'option1', label: 'Option 1'},
        {id: 'option2', label: 'Option 2'}
      ],
      value: ''
    },
    'test-date': {
      type: 'date',
      change: null,
      value: '14-03-2019'
    }
  }
  
  beforeAll(() => {
    cmp = shallow(<Form model={newModel} id={id} />);
    instance = cmp.instance();
  })

  test('should set own state via props where key is id and model is value', () => {
    expect(cmp.state(id)).toEqual(newModel);
  })

  test('maps handlers to model on mounting', () => {
    const input = Object.keys(newModel).find(item => newModel[item].type === 'text');
    expect(newModel[input].change).not.toBeNull();
  })

  test('maps a Field cmp for each key in state', () => {
    const numberOfKeys = Object.keys(cmp.state()[id]).length;
    expect(cmp.find(Field)).toHaveLength(numberOfKeys);
  })

  test('controls a Checkbox', () => {
    const group = testCheckbox;
    const testOption = 'option1';
    const event = {
      target: {
        id: testOption,
        attributes: {
          group: {
            value: group
          }
        },
        checked: true
      }
    }

    instance.handlers.$changeCheckbox(event);
    expect(cmp.state()[id][group].options[testOption].checked).toBe(true);
  })

  test('controls an Input', () => {
    const event = {
      target: {
        id: testInput,
        value: 'hello'
      }
    }
    instance.handlers.$change(event);
    expect(cmp.state()[id][event.target.id].value).toBe('hello');
  })

  test('controls a Select', () => {
    const event = {
      target: {
        id: 'test-select',
        value: 'Option 2'
      }
    }
    instance.handlers.$change(event);
    expect(cmp.state()[id][event.target.id].value).toBe('Option 2');
  })

  test('controls a DateGroup', () => {
    const event = {
      target: {
        id: 'test-select',
        value: 'Option 2'
      }
    }
    instance.handlers.$change(event);
    expect(cmp.state()[id][event.target.id].value).toBe('Option 2');
  })
  
  
})

