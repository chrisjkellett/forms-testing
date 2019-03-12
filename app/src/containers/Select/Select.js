import React, {Component} from 'react';
import {string, shape, func,arrayOf, object} from 'prop-types';
import styles from './Select.module.css';

class Select extends Component {
  $renderOptions(){
    return this.props.data.options.map(item => {
      return <option key={item.id} value={item.id}>{item.label}</option>
    })
  }

  $ifNoId(){
    if(this.props.data.id[0] === "$"){
      return styles.Inline
    }
  }

  $shouldAddLabel(){
    if(this.props.data.id[0] !== "$"){
      return this.props.data.id
    }
  }

  render() {
    const options = this.$renderOptions();
    const {id, change, value} = this.props.data;
    return (
      <div id={`${id}-wrapper`} className={this.$ifNoId()}>
        <label>{this.$shouldAddLabel()}</label>
        <select id={id} value={value} onChange={change}>
          {options}
        </select>
      </div>
    )
  }
}


Select.propTypes = {
  data: shape({
    change: func.isRequired,
    id: string.isRequired,
    options: arrayOf(object).isRequired,
    type: string.isRequired,
    value: string.isRequired
  })
}

export default Select;