import {Input} from './fields';

describe('data utilities', () => {
  test('can create an Input', () => {
    const key = 'test';
    const inputModel = new Input(key);
    expect(inputModel[key]).toBeDefined();
  })
})


