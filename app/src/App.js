import React, { Component } from 'react';
import Form from './containers/Form/Form';
import {examinerFormModel} from './constructors/forms/forms';

class App extends Component {
  render() {
    return (
      <Form model={examinerFormModel} id="examiners" />
    );
  }
}

export default App;
