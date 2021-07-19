export const addPin = pin => {
    return {
      type: 'ADD_PIN',
      pin: Object.assign({}, pin)
    }
  }