import React from 'react';
import {
  Background,
  CartTable,
  CloseButton,
  ModalContent,
  ModalWrapper,
  TableRow,
  Tablesum,
} from '../styles/cartStyle';
import closeIcon from '../assets/img/close-icon.png';
import { useAppDispatch, useAppSelector } from '../store/hooks/redux';
import { deleteAllCoins } from '../store/reducers/ActionCreators';

interface CartProps {
  active: boolean;
  setActive: (params: boolean) => void;
}

function Cart({ active, setActive }: CartProps) {
  const dispatch = useAppDispatch();
  const { items, totalPrice } = useAppSelector((state) => state.coinReducer);

  const deleteFromCart = (id: string) => {
    dispatch(deleteAllCoins(id));
  };

  return (
    <>
      {active && (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <span>Портфель</span>

              <CartTable>
                <TableRow>
                  <div>Название</div>
                  <div>Цена</div>
                  <div>Количество</div>
                  <div>Итого</div>
                  <div>Удалить</div>
                </TableRow>

                {items.map((coin) => {
                  return (
                    <TableRow key={coin.id}>
                      <div>{coin.name}</div>
                      <div>{parseFloat(coin.priceUsd).toFixed(2)} $</div>
                      <div>{coin.count}</div>
                      <div>{Math.round(+coin.priceUsd * 100 * coin.count) / 100} $</div>
                      <div onClick={() => deleteFromCart(coin.id)}>
                        <img src={closeIcon} alt="delete_coin" />
                      </div>
                    </TableRow>
                  );
                })}
              </CartTable>

              <Tablesum>Итого: {totalPrice} $</Tablesum>
            </ModalContent>
            <CloseButton onClick={() => setActive(false)}>
              <img src={closeIcon} alt="close" />
            </CloseButton>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
}

export default Cart;
