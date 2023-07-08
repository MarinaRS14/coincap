import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CoinContainer,
  HeadingBlock,
  PurchaseBlock,
  InfoBlock,
  Button,
} from '../styles/coinPageStyle';
import { coinAPI } from '../store/services/CoinServise';
import { useAppDispatch } from '../store/hooks/redux';
import { addCoinsToCart } from '../store/reducers/ActionCreators';

function CoinPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [coinId] = useState<string>(location.state);
  const { data: coin, isLoading } = coinAPI.useGetCoinByIdQuery(coinId);

  const [amount, setAmount] = useState<string>('');

  const openInNewTab = (url: string): void => {
    window.open(url, '_blank', 'noreferrer');
  };

  const addToCart = () => {
    if (coin && +amount !== 0 && !Number.isNaN(+amount)) {
      dispatch(addCoinsToCart(coin.data, +amount));
      setAmount('');
    } else if (Number.isNaN(+amount)) {
      alert('Введите число');
      setAmount('');
    }
  };

  return (
    <>
      {isLoading && <h1>Идет загрузка...</h1>}
      {coin && (
        <CoinContainer>
          <HeadingBlock>
            <div className="symbol">{coin.data.symbol}</div>
            <div>{coin.data.name}</div>
          </HeadingBlock>

          <PurchaseBlock>
            <span>Введите количество:</span>
            <input
              type="text"
              placeholder="Введите количество"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Button onClick={addToCart}>Купить</Button>
          </PurchaseBlock>

          <InfoBlock>
            <div className="l1">Информация</div>
            <div className="l2">Цена</div>
            <div className="l3">Доступное предложение для торговли</div>
            <div className="l4">Общее количество выпущенных активов</div>
            <div className="l5">Объем торгов за последние 24 часа</div>
            <div className="l6">Средняя цена по объему за последние 24 часа</div>
            <div className="l7">Процентное изменение цены за последние 24 часа</div>
            <div className="l8">Сайт</div>
            <div className="r1">Данные о валюте</div>
            <div className="r2">{parseFloat(coin.data.priceUsd).toFixed(2)} $</div>
            <div className="r3">{(parseFloat(coin.data.supply) / 1000000).toFixed(2)} млн $</div>
            <div className="r4">
              {coin.data.maxSupply === null
                ? 0
                : `${(parseFloat(coin.data.maxSupply) / 1000000).toFixed(2)} млн $`}
            </div>
            <div className="r5">
              {(parseFloat(coin.data.volumeUsd24Hr) / 1000000000).toFixed(2)} млрд $
            </div>
            <div className="r6">{parseFloat(coin.data.vwap24Hr).toFixed(2)} млрд $</div>
            <div className="r7">{parseFloat(coin.data.changePercent24Hr).toFixed(2)} %</div>
            <div
              className="r8 link"
              role="link"
              onClick={() => openInNewTab(`${coin.data.explorer}`)}>
              Перейти на сайт
            </div>
          </InfoBlock>

          {/* <div>тут будет график</div> */}

          <Button onClick={() => navigate('/coincap')}>На главную</Button>
        </CoinContainer>
      )}
    </>
  );
}

export default CoinPage;
