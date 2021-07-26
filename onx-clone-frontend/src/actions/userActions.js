export const setUser = (userInfo, history) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        }

      dispatch({type: 'LOADING_USER'})
      fetch('http://localhost:3001/users', configObj)
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'SET_USER', user: responseJSON })
      }).then(
        history.push(`/dashboard`)
      ).catch(() => {
        history.push("/failure")
      })
    }
}