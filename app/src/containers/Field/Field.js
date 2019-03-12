import React from 'react';
import {shape, string, func, any} from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Select from '../Select/Select';
import DateGroup from '../DateGroup/DateGroup';

const Field = props => {
  switch(props.data.type){
    case 'checkbox': 
      return <Checkbox data={props.data} />
    case 'text':
      return <Input data={props.data} />
    case 'select':
      return <Select data={props.data} />
    case 'date':
      return <DateGroup data={props.data} />
    default:
      return (
        <div>
          other field type
        </div>
      )
  }
}

Field.propTypes = {
  data: shape({
    id: string.isRequired,
    type: string.isRequired,
    value: any,
    options: any,
    change: func.isRequired
  })
}

export default Field;