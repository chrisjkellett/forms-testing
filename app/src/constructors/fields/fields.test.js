import moment from 'moment';
import {Input, Checkbox, Select, DateInput} from './fields';
import utilities from '../../utilities/utilities';
import appData from '../../app-data';

describe('models for creating form fields', () => {
  test('can create an Input model with custom validation', () => {
    const key = 'test';
    const inputModel = new Input(key, {required: {valid: false}});
    const field = inputModel[key];
    expect(field).toBeDefined();
    expect(field.validation.required).toBeDefined();
    expect(field.validation.required.valid).toBeDefined();
    console.log(field);
  })

  test('can create a Checkbox model with default required validation', () => {
    const key = 'test';
    const checkboxModel = new Checkbox(key);
    const field = checkboxModel[key];
    expect(field).toBeDefined();
    expect(field.validation.required_cb).toBeDefined();
    expect(field.validation.required_cb.valid).toBeDefined();
  })

  test('can create an Options model for Checkbox', () => {
    const data = ["value-1", "value-2"];
    const result = utilities.setCheckBoxValues(data);
    expect(result["value-1"]).toEqual(false);
  })
  
  test('can create a DateInput model with validation', () => {
    const key = 'test';
    const dateModel = new DateInput('test', {is_valid_date: {valid: true}});
    const field = dateModel[key];
    expect(field).toBeDefined();
    expect(field.validation.is_valid_date).toBeDefined();
    expect(field.validation.is_valid_date.valid).toBe(true);
  })
  
})


