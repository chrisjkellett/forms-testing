import React from 'react';
import {shallow} from 'enzyme';
import Select from './Select';

describe('<Select />', () => {
  describe('with an id', () => {
    let cmp, data;
    beforeAll(() => {
      data = {
        change: jest.fn(),
        id: 'test',
        options: [
          {id: 'option1', label: 'option 1'},
          {id: 'option2', label: 'option 2'}
        ],
        type: 'select',
        value: 'option1'
      }
      cmp = shallow(<Select data={data} />)
    })

    test('renders a select element', () => {
      expect(cmp.find('select')).toHaveLength(1);
    })
    

    test('renders options as per length of data.options', () => { 
      expect(cmp.find('option')).toHaveLength(data.options.length);
    })

    test('has no conditional styling', () => {
      expect(cmp.find('.Inline')).toHaveLength(0);
    })
  })

  describe('without an id', () => {
    let data, cmp;

    beforeAll(() => {
      data = {
        change: jest.fn(),
        id: '',
        options: [
          {id: 'option1', label: 'option 1'},
          {id: 'option2', label: 'option 2'}
        ],
        type: 'select',
        value: 'option1'
      }
      cmp = shallow(<Select data={data} />)
    })
    
    test('adds styles.Inline if id is empty string', () => {
      expect(cmp.find('.Inline')).toHaveLength(1);
    })
  })

})
