export const addPin = (pin, history) => {
  return (dispatch) => {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(pin)
    }

    fetch('http://localhost:3001/pins', configObj)
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      debugger
      if (responseJSON.error === undefined) {
        dispatch({ type: 'NEW_PIN', pin: responseJSON.data.attributes })
      }
    }).finally(history.push('/dashboard'))
  }
}

export const loadUsersPins = id => {
  return (dispatch) => {
    dispatch({type: 'LOADING_PIN'})
    fetch(`http://localhost:3001/users/${id}`)
    .then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_PINS', pins: responseJSON.data.attributes.pins })
    })
  }
}
