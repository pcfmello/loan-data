import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  installments: [],
};

export const getInstallments = createAction('GET_INSTALLMENTS');

export default createReducer(INITIAL_STATE, {
  [getInstallments.type]: (state, action) => action.payload,
});
