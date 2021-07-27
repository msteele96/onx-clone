export const addPin = pin => {
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
      dispatch({ type: 'ADD_PINS', pin: responseJSON })
    }).catch(window.history.back())
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
