import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData } from '../../types/IData';
import { ICoin } from '../../types/ICoin';

// const baseQueryWithChange = async (args, api, extraOptions) => {
//     let result = await baseQuery(args, api, extraOptions);
//     if (result.data) {
//         result.data = result.data.data
//     }
//     return result
// }

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
