import { styled } from 'styled-components';

export const Background = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  position: fixed;
  display: flex;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  width: 60%;
  height: 60%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10;
  border-radius: 10px;
  overflow: scroll;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  span {
    font-size: 26px;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  z-index: 10;

  img {
    width: 30px;
    height: 30px;
  }

  img:hover {
    width: 32px;
    height: 32px;
  }
`;

export const CartTable = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const TableRow = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  align-items: end;

  &:first-child {
    font-weight: bold;
  }

  div {
    text-align: center;
  }

  img {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

export const Tablesum = styled.div`
  padding-top: 20px;
  font-size: 18px;
`;
