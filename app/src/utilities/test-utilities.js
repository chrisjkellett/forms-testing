const utilities = {
  TestData: function(type){
    return {
      change: jest.fn(),
      id: 'test',
      type: type,
      value: '',
      touched: false,
      errors: [],
      validation: {}
    }
  }
}

export default utilities;