import React, { Component } from 'react';
import {string, func, shape, array} from 'prop-types';
import DateSelect from '../DateSelect/DateSelect';
import utilities from '../../../utilities/utilities';
import appData from '../../../app-data';
import forms from '../utilities';

class DateInput extends Component{
  $mapProps(obj, item){
    return {...obj, id: item, groupId: obj.id, options: utilities.setDateSelect(appData.DATE_SELECTORS[item])}
  }

  render() {
    const {id, errors} = this.props.data;
    const validationErrors = forms.printError(errors);
    return (
      <div>
        <label>{id}</label>
        {validationErrors}
        {["day", "month", "year"].map(item => {
          return <DateSelect key={item} data={this.$mapProps(this.props.data, item)}/>
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
    value: shape({
      day: string.isRequired,
      month: string.isRequired,
      year: string.isRequired
    }),
    errors: array
  })
}

export default DateInput;