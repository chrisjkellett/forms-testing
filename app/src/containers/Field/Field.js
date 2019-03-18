import React, {Component} from 'react';
import {shape, string, func, any} from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Select from '../Select/Select';
import DateGroup from '../DateGroup/DateGroup';

class Field extends Component {
  $errors(){
    const {validation} = this.props.data;
    if(validation){
      const errors = Object.keys(validation).filter(item => !validation[item].valid);
      return errors.length !== 0 ? errors : [];
    }
  }

  render() {
    switch(this.props.data.type){
      case 'checkbox': 
        return <Checkbox data={this.props.data} />
      case 'select':
        return <Select data={this.props.data} />
      case 'date':
        return <DateGroup data={this.props.data} />
      default:
        return <Input data={this.props.data} errors={this.$errors()}/>
    }
  }
}

Field.propTypes = {
  data: shape({
    id: string.isRequired,
    type: string.isRequired,
    value: any,
    validation: any,
    options: any,
    change: func.isRequired
  })
}

export default Field;