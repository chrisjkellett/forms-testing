import {Input, Checkbox, Select, DateInput, TextArea} from './fields';
import utilities from '../../utilities/utilities';

describe('models for creating form fields', () => {
  test('can create an Input model with custom validation', () => {
    const key = 'test';
    const inputModel = new Input(key, {
      validation: {
        custom_rule: {
          valid: false, 
          limit: 5
        }
      }
    });
    const field = inputModel[key];
    console.log(field.validation)
    expect(field.validation.custom_rule).toBeDefined();
    expect(field.validation.custom_rule.valid).toBeDefined();
    expect(field.touched).toBeDefined();
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

  test('can create a TextArea model with validation', () => {
    const key = 'test';
    const textareaModel = new TextArea(key);
    const field = textareaModel[key];
    expect(field.type).toBe('textarea');
    expect(field.validation).toBeDefined();
  })
  
  
})


