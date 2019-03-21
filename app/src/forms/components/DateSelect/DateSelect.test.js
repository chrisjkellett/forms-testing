import React from 'react';
import {shallow} from 'enzyme';
import DateSelect from './DateSelect';
import utls from '../../../utilities/test-utilities';

describe('<DateSelect />', () => {
  const data = {
    ...new utls.TestData('date'),
    groupId: 'test-set',
    options: [
      {id: '01', label: '1'},
      {id: '02', label: '2'}
    ],
    value: {
      day: '01',
      month: '01',
      year: '2019'
    }
  }
  const cmp = shallow(<DateSelect data={data} />);

  test('renders a div grouping element', () => {
    expect(cmp.find(`#${data.id}-wrapper`)).toHaveLength(1);
  })

  test('renders no label', () => {
    expect(cmp.find('label')).toHaveLength(0);
  })

  test('renders a select element', () => {
    expect(cmp.find('select')).toHaveLength(1);
  })
  
  test('renders options as per length of data.options', () => { 
    expect(cmp.find('option')).toHaveLength(data.options.length);
  })
})
