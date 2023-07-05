import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coinsReducer from './reducers/coinsListSlice';
import coinReducer from './reducers/cartSlice';

import { coinAPI } from './services/CoinServise';

const rootReducer = combineReducers({
  coinsReducer,
  [coinAPI.reducerPath]: coinAPI.reducer,
  coinReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(coinAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
