import { styled } from 'styled-components';

export const CoinContainer = styled.div`
  width: 100vw;
  padding: 20px 100px 20px 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    padding: 20px 50px 20px 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
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

export const HeadingBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: center;
  align-items: center;
  color: #ec22ae;
  font-size: 30px;

  .symbol {
    border: 3px solid #ec22ae;
    padding: 3px;
  }
`;

export const PurchaseBlock = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #e0dddd;
  border-radius: 10px;
  gap: 15px;
  padding: 15px 0 15px 0;

  span {
    font-size: 120%;
    font-weight: bold;
    background-color: #e0dddd;
  }

  input {
    width: 150px;
    height: 30px;
    border: 1px solid #7d7b7b;
    border-radius: 5px;
    padding: 3px;
  }
`;

export const InfoBlock = styled.div`
  border: 1px solid #e0dddd;
  display: grid;
  grid-template-areas:
    'l1 r1'
    'l2 r2'
    'l3 r3'
    'l4 r4'
    'l5 r5'
    'l6 r6'
    'l7 r7'
    'l8 r8';
  background-color: #e0dddd;
  gap: 1px;

  div {
    background-color: #fffbf9;
    padding: 5px 10px 5px 10px;
    font-size: 14px;
  }

  .l1,
  .r1 {
    text-align: center;
    font-weight: bold;
  }

  .l1 {
    grid-area: l1;
  }
  .l2 {
    grid-area: l2;
  }
  .l3 {
    grid-area: l3;
  }
  .l4 {
    grid-area: l4;
  }
  .l5 {
    grid-area: l5;
  }
  .l6 {
    grid-area: l6;
  }
  .l7 {
    grid-area: l7;
  }
  .l8 {
    grid-area: l8;
  }

  .r1 {
    grid-area: r1;
  }
  .r2 {
    grid-area: r2;
  }
  .r3 {
    grid-area: r3;
  }
  .r4 {
    grid-area: r4;
  }
  .r5 {
    grid-area: r5;
  }
  .r6 {
    grid-area: r6;
  }
  .r7 {
    grid-area: r7;
  }
  .r8 {
    grid-area: r8;
  }

  .link:hover {
    text-decoration: underline;
    cursor: pointer;
    color: blue;
  }
`;
