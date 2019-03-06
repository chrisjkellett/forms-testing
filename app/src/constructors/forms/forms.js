import {Input} from '../fields/fields';

export const examinerFormModel = {
  id: 'examiners',
  model: {
    ...new Input('name'),
    ...new Input('age')
  }
}