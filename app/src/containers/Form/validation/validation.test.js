import validation from './validation';

const createObjForValidation = (rule, value) => {
  return {
    'test': {
      valid: false,
      validation: {
        [rule]: true
      },
      value: value
    }
  }
}

describe('<Form /> validation', () => {
  describe('required: true', () => {
    test('is valid when value is not empty', () => {
      const obj = createObjForValidation('required', 'a_value');
      validation.checkField(obj, 'test');
      expect(obj['test'].valid).toBe(true)
    })

    test('is invalid when value is empty', () => {
      const obj = createObjForValidation('required', '');
      validation.checkField(obj, 'test');
      expect(obj['test'].valid).toBe(false)
    })
  })
  
})
