import { styled } from 'styled-components';

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0);
  z-index: 999999;
`;

export const ModalWrapper = styled.div`
  width: 40%;
  height: 40%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding-top: 40px;

  input {
    width: 150px;
    height: 30px;
    border: 1px solid #7d7b7b;
    border-radius: 5px;
    padding: 3px;
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

export const ContentName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

  span {
    font-size: 24px;
  }

  :nth-child(2n) {
    color: #ec22ae;
  }
`;

export const Button = styled.button`
  width: 85px;
  height: 35px;
  border: 1px solid #7d7b7b;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    border: 2px solid #7d7b7b;
    background-color: #f2f2f2;
  }
`;
