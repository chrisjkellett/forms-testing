import React, { Component } from 'react';
import {string, func, shape} from 'prop-types';
import Select from '../Select/Select';
import {setSelect} from '../../constructors/utilities/utilities'

const VALUES = {
  day: [
    "1", "2", "3"
  ],
  month: [],
  year: []
}

class DateInput extends Component{
  $mapProps(obj, item){
    return {...obj, id: "", options: setSelect(VALUES[item])}
  }

  render() {
    return (
      <div>
        <label>{this.props.data.id}</label>
        {["day", "month", "year"].map(item => {
          return <Select key={item} data={this.$mapProps(this.props.data, item)}/>
        })}
        
      </div>
    )
  }
}

DateInput.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    type: string.isRequired,
    value: string.isRequired
  })
}

export default DateInput;