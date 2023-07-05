import axios from 'axios';
import { AppDispatch } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { addFewCoinsToCart, deleteCoins } from './cartSlice';
import { CoinInfo } from '../../types/ICoin';

export const fetchList = createAsyncThunk('coins/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('https://api.coincap.io/v2/assets');
    return response.data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Не удалось загрузить данные');
  }
});

export const deleteAllCoins = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(deleteCoins(id));
  } catch (err) {
    console.log('Невозможно удалить');
  }
};

export const addCoinsToCart = (coin: CoinInfo, count: number) => async (dispath: AppDispatch) => {
  try {
    dispath(addFewCoinsToCart({ coin, count }));
  } catch (err) {
    console.log('Невозможно изменить количество');
  }
};
