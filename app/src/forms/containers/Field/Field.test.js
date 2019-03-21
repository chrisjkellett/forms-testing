import React from 'react';
import {shallow} from 'enzyme';
import Field from './Field';
import Checkbox from '../../components/Checkbox/Checkbox';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import DateGroup from '../../components/DateGroup/DateGroup';
import TextArea from '../../components/TextArea/TextArea';

const TestData = function(type){
  return {
    change: jest.fn(),
    id: 'test',
    type: type,
    value: '',
    touched: false
  }
}

describe('<Field />', () => {
  describe('<Input /> with errors', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      value: '',
      type: 'text',
      touched: true,
      validation: {
        required: {
          valid: false
        }
      },
      errors: ['required']
    }
    const cmp = shallow(<Field data={data} />);
    const ins = cmp.instance();

    test('renders Input when type is text', () => {
      expect(cmp.find(Input)).toHaveLength(1);
    })

    test('detects validation errors when not valid', () => {
      expect(ins.$errors()).toEqual(['required']);
    })
  })

  describe('<Input /> with no errors', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      value: '',
      type: 'text',
      touched: false,
      errors: [],
      validation: {
        required: {
          valid: true
        }
      }
    }
    const cmp = shallow(<Field data={data} />);
    const ins = cmp.instance();

    test('renders Input when type is text', () => {
      expect(cmp.find(Input)).toHaveLength(1);
    })

    test('detects validation errors when not valid', () => {
      expect(ins.$errors()).toEqual([]);
    })

  })

  test('renders Checkbox when type is checkbox', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      value: {
        'test-1': false,
        'test-2': false
      },
      type: 'checkbox',
      touched: false
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(Checkbox)).toHaveLength(1);
  })
  
  test('renders Select when type is select', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      options: [
        {id: 'value-1', label: 'value 1'}
      ],
      type: 'select',
      value: 'value 1'
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(Select)).toHaveLength(1);
  })

  test('renders DateInput when type is date', () => {
    const data = {
      change: jest.fn(),
      id: 'test',
      type: 'date',
      value: {
        day: '01',
        month: '01',
        year: '2019'
      },
      touched: false
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(DateGroup)).toHaveLength(1);
  })

  test('renders TextArea when type is textarea', () => {
    const type = 'textarea';
    const data = new TestData(type);
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(TextArea)).toHaveLength(1);
  })
  
})

