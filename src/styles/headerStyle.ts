import { styled } from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 200px 20px 200px;
`;

export const HeaderInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    color: #7d7b7b;
  }
`;

export const TopCoins = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
`;

export const CoinInfoBlock = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #7d7b7b;
  }
`;

export const HeaderCart = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CartBlock = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 22px;
    color: #ec22ae;
  }
`;
