import api from './api';
import auth from './auth';

import { combineReducers } from 'redux';

const reducers = combineReducers({
  apiData: api,
  authData: auth,
})

export default reducers;