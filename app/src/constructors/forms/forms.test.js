import {examinerFormModel} from './forms';

describe('examinerFormModel constructs an object', () => {
  test('with an id prop type string', () => {
    expect(examinerFormModel.id).toBeDefined();
  })

  test('with a model prop type object ', () => {
    expect(examinerFormModel.model).toBeDefined();
  })

  test('checkboxes must be linked to Option', () => {
    const keys = Object.keys(examinerFormModel.model);
    const checkboxes = keys.filter(item => examinerFormModel.model[item].type === 'checkbox');
    const optionsNotUndefined = checkboxes.find(item => (
      examinerFormModel.model[item].options === null));
    expect(optionsNotUndefined).toBeUndefined();
  })
  
})
