import React, {Component} from 'react';
import {string, object} from 'prop-types';

class Form extends Component {
  componentWillMount(){
    this.setState({
      [this.props.id]: {
        ...this.props.model
      }
    })
  }

  render() {
    return (
      <div>
        form placeholder
      </div>
    )
  }
}

Form.propTypes = {
  id: string.isRequired,
  model: object.isRequired
}

export default Form;