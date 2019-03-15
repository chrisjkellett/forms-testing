export const updateField = (event, group, slice) => {
  const {id, checked, value} = event.target;
  if(group){
    return {
      [group]: {
        ...slice[group],
        value: {
          ...slice[group].value,
          [id]: value ? value : checked
        }
      }
    }
  } 
  else {
    return {
      [id]: {
        ...slice[id],
        value: value
      }
    }
  }
}