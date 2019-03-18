import validation from './validation';

const field = 'test';
const objToValidate = (rule, value) => {
  return {
    [field]: {
      validation: {
        [rule]: {valid: false}
      },
      value: value
    }
  }
}

describe('<Form /> validation', () => {
  describe('required: true', () => {
    const rule = 'required';
    
    test('is valid when value is not empty', () => {
      const obj = objToValidate(rule, 'a_value');
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(true);
    })

    test('is invalid when value is empty', () => {
      const obj = objToValidate(rule, ' ');
      validation.checkField(obj, field);
      expect(obj[field].validation[rule].valid).toBe(false);
    })
  })
  
})
