import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  showLoading: false,
};

export const showLoading = createAction('SHOW_LOADING');
export const hideLoading = createAction('HIDE_LOADING');

export default createReducer(INITIAL_STATE, {
  [showLoading.type]: (state) => ({ ...state, showLoading: true }),
  [hideLoading.type]: (state) => ({ ...state, showLoading: false }),
});
