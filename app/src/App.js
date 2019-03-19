import React, { Component } from 'react';
import Form from './forms/containers/Form/Form';
import {examinerFormModel} from './constructors/forms/forms';

class App extends Component {
  render() {
    return (
      <Form model={examinerFormModel.model} id={examinerFormModel.id} />
    );
  }
}

export default App;
