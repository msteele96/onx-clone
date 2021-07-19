// export const setUser = user => {
//     return {
//       type: 'SET_USER',
//       user: Object.assign({}, user)
//     }
//   }

    export const setUser = (userInfo) => {
    return (dispatch) => {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        }

      fetch('http://localhost:3001/users', configObj)
      .then(response => {
        return response.json()
      }).then(responseJSON => {
        dispatch({ type: 'SET_USER', user: responseJSON })
      })
    }
  }