import * as types from './ActionTypes';

export const api = (req) => ({
  type: types.API,
  req: req,
})

export const signin = (idx) => ({
  type: types.SIGNIN,
  idx,
})

export const signup = (idx) => ({
  type: types.SIGNUP,
  idx,
})