import React, { useState } from 'react';
import { MainContainer, TableHeading } from '../styles/mainPageStyle';
import { coinAPI } from '../store/services/CoinServise';
import Pagination from '../components/Pagination';

function Main() {
  const [limit, setLimit] = useState<number>(100);
  const { data, isLoading } = coinAPI.useFetchAllCoinsQuery(limit);

  return (
    <MainContainer>
      <TableHeading>
        <div>№</div>
        <div></div>
        <div>Name</div>
        <div>VWAP(24Hr)</div>
        <div>Change(24Hr)</div>
        <div>Market Cap</div>
        <div>Price</div>
        <div></div>
      </TableHeading>

      {isLoading && <h1>Идет загрузка...</h1>}

      {data && <Pagination coins={data.data} />}
    </MainContainer>
  );
}

export default Main;
