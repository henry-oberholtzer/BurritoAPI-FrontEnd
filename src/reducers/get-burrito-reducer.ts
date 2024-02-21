import * as c from '../actions/ActionTypes';

export const initialState: burritoReducerState = {
  isLoaded: false,
  burritoList: [],
  error: null,
}

const getBurritoReducer = (state: burritoReducerState, action: Action) => {
  switch (action.type) {
    case c.GET_BURRITO_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        burritoList: action.burritoList
      }
    case c.GET_BURRITO_FAILURE:
      return {
        ...state,
        isLoaded: true,
        error: action.error
      }
    default:
      throw new Error(`No action matches ${action.type}`)
}
}

export default getBurritoReducer;
