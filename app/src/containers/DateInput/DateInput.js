import React, { Component } from 'react';
import {string, func, shape} from 'prop-types';
import Select from '../Select/Select';
import utilities from '../../utilities/utilities';
import appData from '../../app-data';

class DateInput extends Component{
  $mapProps(obj, item){
    return {...obj, id: "", options: utilities.setSelect(appData.DATE_SELECTORS[item])}
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