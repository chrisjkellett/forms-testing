export function Input(name){
  return {
    [name]: {
      type: 'text',
      value: '',
      change: null
    }
  }
}