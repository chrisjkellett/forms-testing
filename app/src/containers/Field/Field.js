import React from 'react';
import {shape, string, func} from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';

const Field = props => {
  switch(props.data.type){
    case 'checkbox': 
      return <Checkbox data={props.data} />
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
    type: string.isRequired,
    value: string.isRequired,
    change: func.isRequired
  })
}

export default Field;