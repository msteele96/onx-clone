const pinsReducer = (state = { pins: [], loading: false }, action) => {
    switch(action.type) {
      case 'LOADING_PINS':
        return {
          ...state,
          pins: [...state.pins],
          loading: true
        }
      case 'ADD_PINS':
        return {
          ...state,
          pins: action.pins,
          loading: false
        }
      default:
        return state;
    }
  }
   
  export default pinsReducer;