import * as types from '../actions/ActionTypes';

const inititalState = {
  idx: 0,
};

function auth(state = inititalState, action) {
  switch(action.type) {
    case types.SIGNIN:
      return {
        idx: action.idx,
      }
    case types.SIGNUP:
      return {
        idx: action.idx,
      }
    default:
      return state;
  }
}

export default auth;
