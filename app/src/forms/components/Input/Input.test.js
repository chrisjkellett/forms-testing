import React from 'react';
import Input from './Input';
import {shallow} from 'enzyme';

describe('<Input />', () => {
  describe('without errors', () => {
    const data = {
      id: 'test',
      type: 'text',
      change: jest.fn(),
      errors: [],
      value: 'a_value'
    }
    const cmp = shallow(<Input data={data} />)
    
    test('renders an input', () => {
      const input = cmp.find('#test');
      expect(input).toHaveLength(1);
    })
  
    test('assigns Error class when errors present', () => {
      const inputWithError = cmp.find('.Error');
      expect(inputWithError).toHaveLength(0);
    })

    test('no error messages present', () => {
      const errors = cmp.find('.ErrorMessage');
      expect(errors).toHaveLength(0);
    })
  })

  describe('with errors', () => {
    const data = {
      id: 'test',
      type: 'text',
      change: jest.fn(),
      errors: ['required'],
      value: ''
    }
    const cmp = shallow(<Input data={data} />)
    
    test('renders an input', () => {
      const input = cmp.find('#test');
      expect(input).toHaveLength(1);
    })
  
    test('assigns Error class when errors present', () => {
      const inputWithError = cmp.find('.Error');
      expect(inputWithError).toHaveLength(1);
    })

    test('error messages present', () => {
      const errors = cmp.find('.ErrorMessage');
      expect(errors.text()).toBe(data.errors[0]);
    })
  })
  
  
  
})
