import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData } from '../../types/IData';
import { ICoin } from '../../types/ICoin';

export const coinAPI = createApi({
  reducerPath: 'coinAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2' }),
  endpoints: (build) => ({
    fetchAllCoins: build.query<IData, number>({
      query: (limit: number) => ({
        url: '/assets',
        params: {
          limit,
        },
      }),
    }),

    getCoinById: build.query<ICoin, string>({
      query: (id: string) => ({
        url: `/assets/${id}`,
      }),
    }),
  }),
});
