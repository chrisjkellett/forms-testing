import React from 'react';
import {shape, string, func, object} from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';

const Field = props => {
  switch(props.data.type){
    case 'checkbox': 
      return <Checkbox data={props.data} />
    case 'text':
      return <Input data={props.data} />
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
    value: string,
    options: object,
    change: func.isRequired
  })
}

export default Field;