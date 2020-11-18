import api from '../../services/api';
import { getInstallments } from '../ducks/installments';

import { showLoading, hideLoading } from '../ducks/layout';

export const getAllInstallments = () => {
  return (dispatch) => {
    dispatch(showLoading());
    api.get('/v2/5c923b0932000029056bce39').then((res) => {
      dispatch(getInstallments(res.data));
      dispatch(hideLoading());
    });
  };
};
