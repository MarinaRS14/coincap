import React, { useState } from 'react';
import {
  HeaderContainer,
  HeaderInfo,
  TopCoins,
  CoinInfoBlock,
  HeaderCart,
  CartBlock,
} from '../styles/headerStyle';
import CartLogo from '../assets/img/cartLogo.svg';
import { useAppSelector } from '../store/hooks/redux';
import Cart from './Cart';
import { coinAPI } from '../store/services/CoinServise';
import { CoinInfo } from '../types/ICoin';

function Header() {
  const cartState = useAppSelector((state) => state.coinReducer);

  const [active, setActive] = useState<boolean>(false);

  const { data, isLoading } = coinAPI.useFetchAllCoinsQuery(15);

  return (
    <>
      <HeaderContainer>
        <HeaderInfo>
          <span>Популярные криптовалюты:</span>
          <TopCoins>
            {isLoading && <span>---</span>}
            {data &&
              data.data.slice(0, 3).map((coin: CoinInfo) => (
                <CoinInfoBlock key={coin.id}>
                  <b>{coin.name}</b>
                  <span>{parseFloat(coin.priceUsd).toFixed(2)} $</span>
                </CoinInfoBlock>
              ))}
          </TopCoins>
        </HeaderInfo>

        <HeaderCart onClick={() => setActive(true)}>
          <div>
            <img src={CartLogo} alt="logo" />
          </div>
          <CartBlock>
            <b>Итого:</b>
            <span>{cartState.totalPrice} $</span>
          </CartBlock>
        </HeaderCart>
      </HeaderContainer>
      <Cart active={active} setActive={setActive} />
    </>
  );
}

export default Header;
