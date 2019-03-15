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
    const updated = this.$updateObject(event, group);
    this.$updateState(updated);
  }

  $updateObject(event, group){
    const {id, checked, value} = event.target;
    const slice = this.state[this.props.id];
    if(group){
      return {
        [group]: {
          ...slice[group],
          value: {
            ...slice[group].value,
            [id]: value ? value : checked
          }
        }
      }
    }
    else {
      return {
        [id]: {
          ...slice[id],
          value: value
        }
      }
    }
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

  submit(event){
    event.preventDefault();
    this.pullObjectFromState();
  }

  pullObjectFromState(){
    const slice = this.state[this.props.id];
    let obj = {};
    Object.keys(slice).forEach(item => {
      obj[item] = slice[item].value
    });
    return obj;
  }

  render() {
    const fields = this.$mapFields();
    return (
      <form onSubmit={this.submit}>
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