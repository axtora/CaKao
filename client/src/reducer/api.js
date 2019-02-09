import * as types from '../actions/ActionTypes';

const initialState = {
  req: false,
}

function api(state = initialState, action) {
  switch(action.type) {
    case types.API:
      return {
        req: action.req
      }
    default:
      return state;
  }
}

export default api;