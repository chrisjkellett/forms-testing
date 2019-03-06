import React, {Component} from 'react';
import {string, object} from 'prop-types';
import Field from '../Field/Field';

class Form extends Component {
  componentWillMount(){
    this.$mapHandlers();
    this.$mapStateFromProps();
  }

  $mapHandlers(){
    const {model} = this.props;
    Object.keys(model).forEach(item => {
      switch(model[item].type){
        case 'checkbox':
          model[item].change = this.handlers.changeCheckbox;
          break;
        default:
          model[item].change = this.handlers.change;
      }
    })
  }

  $mapStateFromProps(){
    this.setState({
      [this.props.id]: {
        ...this.props.model
      }
    })
  }

  $mapFields(){
    const fields = this.state[this.props.id];
    return Object.keys(fields).map(item => {
      return <Field key={item} data={fields[item]} />
    });
  }

  handlers = {
    change: () => {

    },

    changeCheckbox: () => {

    }
  }

  render() {
    const fields = this.$mapFields();
    return (
      <div>
        {fields}
      </div>
    )
  }
}

Form.propTypes = {
  id: string.isRequired,
  model: object.isRequired
}

export default Form;