import {Input, Checkbox, Select} from '../fields/fields';

export const examinerFormModel = {
  id: 'examiners',
  model: {
    ...new Input('name'),
    ...new Input('age'),
    ...new Checkbox('levels'),
    ...new Checkbox('availability'),
    ...new Select('roles')
  }
}