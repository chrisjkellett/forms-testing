import React, {Component} from 'react';
import {shape, string, func, any} from 'prop-types';
import Checkbox from '../../components/Checkbox/Checkbox';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import DateGroup from '../../components/DateGroup/DateGroup';
import TextArea from '../../components/TextArea/TextArea';

class Field extends Component {
  $errors(){
    const {validation} = this.props.data;
    if(validation){
      const errors = Object.keys(validation).filter(item => !validation[item].valid);
      return errors.length !== 0 ? errors : [];
    }
  }

  $updatedProps(){
    return {
      ...this.props.data,
      errors: this.$errors()
    }
  }

  render() {
    const data = this.$updatedProps();
    switch(this.props.data.type){
      case 'checkbox': 
        return <Checkbox data={data} />
      case 'select':
        return <Select data={data} />
      case 'date':
        return <DateGroup data={data} />
      case 'textarea':
        return <TextArea data={data} />
      default:
        return <Input data={data} />
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