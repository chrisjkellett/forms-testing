import {examinerFormModel} from './forms';

describe('examinerFormModel constructs an object', () => {
  test('with an id prop type string', () => {
    expect(examinerFormModel.id).toBeDefined();
  })

  test('with a model prop type object ', () => {
    expect(examinerFormModel.model).toBeDefined();
  })
  
})
