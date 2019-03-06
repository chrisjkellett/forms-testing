import {Input} from '../fields/fields';

export const examinerFormModel = {
  id: 'examiners',
  fields: {
    ...new Input('name'),
    ...new Input('age')
  }
}