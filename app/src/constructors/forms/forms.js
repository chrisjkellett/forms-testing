import {Input, Checkbox, Select, DateInput, TextArea} from '../fields/fields';

export const examinerFormModel = {
  id: 'examiners',
  model: {
    ...new Input('name'),
    ...new Input('age'),
    ...new Checkbox('levels', {
      options: ["KET", "PET", "FCE"]
    }),
    ...new Select('ROLES'),
    ...new DateInput('session date'),
    ...new TextArea('comments')
  }
}