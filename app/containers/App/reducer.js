/*
 *
 * App reducer
 *
 */

import produce from 'immer';
import {
  LOGIN_SUCCESS,
  LOGIN,
  LOGIN_ERROR,
} from 'containers/LoginPage/constants';
import {
  CHECK_EMAIL,
  REGISTER,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  REGISTER_SUCCESS,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_INVALID,
  GET_CURRENCIES_ERROR,
  REGISTER_ERROR,
  CHECK_EMAIL_ERROR,
} from 'containers/RegisterPage/constants';
import { LOGOUT_SUCCESS } from './constants';

export const initialState = {
  isLogged: false,
  isLoading: false,
  error: {},
  token: {},
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      draft.isLogged = true;
      draft.isLoading = false;
      draft.token = action.token;
      draft.user = action.user;
      break;
    case LOGOUT_SUCCESS:
      draft.isLogged = initialState.isLogged;
      draft.token = initialState.token;
      draft.user = initialState.user;
      break;
    case CHECK_EMAIL:
    case REGISTER:
    case GET_CURRENCIES:
    case LOGIN:
      draft.isLoading = true;
      break;
    case GET_CURRENCIES_SUCCESS:
    case REGISTER_SUCCESS:
    case CHECK_EMAIL_SUCCESS:
    case CHECK_EMAIL_INVALID:
      draft.isLoading = false;
      break;
    case LOGIN_ERROR:
    case CHECK_EMAIL_ERROR:
    case REGISTER_ERROR:
    case GET_CURRENCIES_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default appReducer;
