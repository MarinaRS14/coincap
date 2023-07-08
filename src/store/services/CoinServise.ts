import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData } from '../../types/IData';
import { ICoin } from '../../types/ICoin';

const BASE = process.env.REACT_APP_BASE_URL;

export const coinAPI = createApi({
  reducerPath: 'coinAPI',
  baseQuery: fetchBaseQuery({ baseUrl: BASE }),
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
