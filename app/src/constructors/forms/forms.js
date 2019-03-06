import {Input, Checkbox} from '../fields/fields';

export const examinerFormModel = {
  id: 'examiners',
  model: {
    ...new Input('name'),
    ...new Input('age'),
    ...new Checkbox('levels'),
    ...new Checkbox('availability')
  }
}