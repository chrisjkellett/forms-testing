const utilities = {
  TestData: function(type){
    return {
      change: jest.fn(),
      id: 'test',
      type: type,
      value: '',
      touched: false
    }
  }
}

export default utilities;