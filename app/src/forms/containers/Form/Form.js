import React, {Component} from 'react';
import {string, object} from 'prop-types';
import Field from '../Field/Field';
import {updateField} from './helpers';
import validation from './validation/validation';

class Form extends Component {
  componentWillMount(){
    this.$mapHandlers();
    this.$mapStateFromProps();    
  }

  $mapHandlers(){
    const {model} = this.props;
    Object.keys(model).forEach(item => {
      model[item].change = this.$change;
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
    let data;
    return Object.keys(fields).map(item => {
      data = {...fields[item], id: item}
      return <Field key={item} data={data} />
    });
  }

  $change = (event, group) => {
    const slice = this.state[this.props.id];
    const updated = updateField(event, group, slice);
    const fieldId = group || event.target.id;
    validation.checkField(updated, fieldId);
    this.$updateState(updated);
  }

  $updateState(object){
    const slice = this.state[this.props.id];
    this.setState({
      [this.props.id]: {
        ...slice, 
        ...object
      }
    })
  }

  $submit = (event) => {
    event.preventDefault();
    console.log(this.state[this.props.id]);
  }

  render() {
    const fields = this.$mapFields();
    return (
      <form onSubmit={this.$submit}>
        {fields}
        <button>submit</button>
      </form>
    )
  }
}

Form.propTypes = {
  id: string.isRequired,
  model: object.isRequired
}

export default Form;