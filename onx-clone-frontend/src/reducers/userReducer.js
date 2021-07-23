const userReducer = (state = { user: {data: {id: 0}}, loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_USER':
        return {
          ...state,
          loading: true
        }
      case 'SET_USER':
        return {
          user: action.user,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default userReducer;