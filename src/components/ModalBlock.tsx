import React, { useState } from 'react';
import closeIcon from '../assets/img/close-icon.png';
import { useAppDispatch } from '../store/hooks/redux';
import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseButton,
  Button,
  ContentName,
} from '../styles/modalBlockStyle';
import { addCoinsToCart } from '../store/reducers/ActionCreators';
import { CoinInfo } from '../types/ICoin';

interface ModalProps {
  activeModal: boolean;
  setActiveModal: (params: boolean) => void;
  coin: CoinInfo;
}

function ModalBlock({ activeModal, setActiveModal, coin }: ModalProps) {
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<string>('');

  const addToCart = () => {
    if (coin && +amount !== 0 && !Number.isNaN(+amount)) {
      dispatch(addCoinsToCart(coin, +amount));
      setActiveModal(false);
      setAmount('');
    } else if (Number.isNaN(+amount)) {
      alert('Введите число');
      setAmount('');
    }
  };

  return (
    <>
      {activeModal && (
        <Background>
          <ModalWrapper>
            <ModalContent>
              <ContentName>
                <span>Купить</span>
                <span>{coin.name}</span>
              </ContentName>

              <span>Введите количество:</span>
              <input
                type="text"
                placeholder="Введите количество"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                pattern="[0-9]*"
              />
              <Button onClick={addToCart}>Добавить</Button>
            </ModalContent>
            <CloseButton onClick={() => setActiveModal(false)}>
              <img src={closeIcon} alt="close" />
            </CloseButton>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
}

export default ModalBlock;
