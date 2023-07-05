import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationContainer } from '../styles/paginationStyle';
import { CoinInfo } from '../types/ICoin';
import Table from './Table';

interface PaginationProps {
  coins: CoinInfo[];
}

const Pagination = ({ coins }: PaginationProps) => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const endOffset = itemOffset + 15;
  const currentItems = coins.slice(itemOffset, endOffset);
  const pageCount: number = Math.ceil(coins.length / 15);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * 15) % coins.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems && currentItems.map((coin: CoinInfo) => <Table coin={coin} key={coin.id} />)}

      <PaginationContainer>
        <ReactPaginate
          className="pagination__block"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={15}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </PaginationContainer>
    </>
  );
};

export default Pagination;
