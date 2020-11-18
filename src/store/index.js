import { configureStore } from '@reduxjs/toolkit';

import installmentsReducer from './ducks/installments';
import layoutReducer from './ducks/layout';

export default configureStore({
  reducer: {
    installments: installmentsReducer,
    layout: layoutReducer,
  },
});
