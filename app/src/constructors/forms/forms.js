import {Input, Checkbox, Select, DateInput} from '../fields/fields';

export const examinerFormModel = {
  id: 'examiners',
  model: {
    ...new Input('name'),
    ...new Input('age'),
    ...new Checkbox('LEVELS'),
    ...new Checkbox('AVAILABILITY'),
    ...new Select('ROLES'),
    ...new DateInput('session date')
  }
}