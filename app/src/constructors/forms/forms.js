import {Input, Checkbox, Select, DateInput} from '../fields/fields';

export const examinerFormModel = {
  id: 'examiners',
  model: {
    ...new Input('name'),
    ...new Input('age'),
    ...new Checkbox('levels'),
    ...new Checkbox('availability'),
    ...new Select('roles'),
    ...new DateInput('session date')
  }
}