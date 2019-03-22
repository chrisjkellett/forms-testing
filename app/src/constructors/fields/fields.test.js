import {Input, Checkbox, Select, DateInput, TextArea} from './fields';
import utilities from '../../utilities/utilities';

describe('models for creating form fields', () => {
  const name = 'test';
  describe('new Input', () => {
    test('can be created', () => {
      const ins = new Input(name);
      const field = ins[name];
      expect(field).toBeDefined();
    })

    test('can have custom validation and does not overwrite existing rules', () => {
      const ins = new Input(name, {validation: {custom_rule: {valid: false}}});
      const field = ins[name];
      expect(field.validation.custom_rule).toBeDefined();
      expect(Object.keys(field.validation).length).not.toBe(1);
    })

    test('validation does not overwrite default rules', () => {
      const ins = new Input(name, {
        value: 'new_default_value'
      });
      const field = ins[name];
      expect(field.value).toBe('new_default_value');
    })
  })

  describe('new Checkbox', () => {
    test('can be created', () => {
      const ins = new Checkbox(name, {
        value: ['option-a']
      });
      const field = ins[name];
      expect(field).toBeDefined();
    })
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


