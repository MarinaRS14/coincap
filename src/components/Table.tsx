import React, { useState } from 'react';
import { TableContent } from '../styles/tableStyle';
import Plus from '../assets/img/plus.svg';
import { useNavigate } from 'react-router-dom';
import { CoinInfo } from '../types/ICoin';
import ModalBlock from './ModalBlock';

interface CoinProps {
  coin: CoinInfo;
}

function Table({ coin }: CoinProps) {
  const navigate = useNavigate();

  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <>
      <ModalBlock activeModal={activeModal} setActiveModal={setActiveModal} coin={coin} />

      <TableContent>
        <div>{coin.rank}</div>
        <div className="content-symbol">{coin.symbol}</div>
        <div
          className="content-name"
          onClick={() => navigate('/coincap/coinpage', { state: coin.id })}>
          {coin.name}
        </div>
        <div>{parseFloat(coin.vwap24Hr).toFixed(2)} $</div>
        <div className={parseFloat(coin.changePercent24Hr) > 0 ? 'green' : 'red'}>
          {parseFloat(coin.changePercent24Hr).toFixed(2)} $
        </div>
        <div>{(parseFloat(coin.marketCapUsd) / 1000000000).toFixed(2)} млрд $</div>
        <div>{parseFloat(coin.priceUsd).toFixed(2)} $</div>
        <div>
          <img src={Plus} alt="add" onClick={() => setActiveModal(true)} />
        </div>
      </TableContent>
    </>
  );
}

export default Table;
