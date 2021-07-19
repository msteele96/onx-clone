const userReducer = (state = { user: "", loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_USERS':
        return {
          ...state,
          user: [...state.user],
          loading: true
        }
      case 'SET_USER':
        debugger
        return {
          ...state,
          user: action.user,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default userReducer;