import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CoinInfo } from '../../types/ICoin';

interface CoinsCount extends CoinInfo {
  count: number;
}

interface CartSliceState {
  items: CoinsCount[];
  totalPrice: number;
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

interface CoinPayload {
  coin: CoinInfo;
  count: number;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteCoins(state, action: PayloadAction<string>) {
      const deletedItem = state.items.filter((i) => i.id === action.payload)[0];
      state.totalPrice -= Math.round(+deletedItem.priceUsd * 100 * deletedItem.count) / 100;
      if (state.totalPrice < 0) {
        state.totalPrice = 0;
      }
      state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    addFewCoinsToCart(state, action: PayloadAction<CoinPayload>) {
      const stateFiltered = state.items.filter((item) => item.id === action.payload.coin.id);

      if (stateFiltered.length === 0) {
        state.items.push({ ...action.payload.coin, count: action.payload.count });
      } else {
        stateFiltered[0].count += action.payload.count;
      }

      state.totalPrice +=
        Math.round(+action.payload.coin.priceUsd * 100 * action.payload.count) / 100;
      state.totalPrice = parseFloat(state.totalPrice.toFixed(2));
    },
  },
});
export const { addFewCoinsToCart, deleteCoins } = cartSlice.actions;

export default cartSlice.reducer;
