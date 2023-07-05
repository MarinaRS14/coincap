import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchList } from './ActionCreators';
import { CoinInfo } from '../../types/ICoin';

interface InitialState {
  coins: CoinInfo[];
  isLoading: boolean;
  error: string;
}

const initialState: InitialState = {
  coins: [],
  isLoading: false,
  error: '',
};

export const coinsListSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchList.fulfilled.type]: (state, action: PayloadAction<CoinInfo[]>) => {
      state.isLoading = false;
      state.coins = action.payload;
      state.error = '';
    },
    [fetchList.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default coinsListSlice.reducer;
