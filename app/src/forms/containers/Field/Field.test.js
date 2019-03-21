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
    test('renders Input when type is text', () => {
      const type = 'text';
      const data = new TestData(type);
      const cmp = shallow(<Field data={data} />);
      expect(cmp.find(Input)).toHaveLength(1);
    })
  })

  test('renders Checkbox when type is checkbox', () => {
    const type = 'checkbox';
    const data = {
      ...new TestData(type),
      value: {
        'test-1': false,
        'test-2': false
      }
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(Checkbox)).toHaveLength(1);
  })
  
  test('renders Select when type is select', () => {
    const type = 'select';
    const data = {
      ...new TestData(type),
      options: [
        {id: 'value-1', label: 'value 1'}
      ]
    }
    const cmp = shallow(<Field data={data} />);
    expect(cmp.find(Select)).toHaveLength(1);
  })

  test('renders DateInput when type is date', () => {
    const type = 'date';
    const data = {
      ...new TestData(type),
      value: {
        day: '01', month: '01', year: '2019'
      }
    };
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

