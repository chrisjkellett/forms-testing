const utilities = {
  TestData: function(type){
    return {
      change: jest.fn(),
      id: 'test',
      type: type,
      value: '',
      touched: true,
      errors: ['test-error'],
      validation: {}
    }
  }
}

export default utilities;