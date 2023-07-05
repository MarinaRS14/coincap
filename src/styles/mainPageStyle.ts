import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;

  padding: 20px 120px 20px 120px;
  min-height: calc(100vh - 120px);

  @media screen and (max-width: 992px) {
    padding: 20px 30px 20px 30px;
  }
`;

export const TableHeading = styled.div`
  display: grid;
  grid-template-columns:
    minmax(40px, 1fr) minmax(50px, 1fr) minmax(145px, 2fr) minmax(100px, 2fr) minmax(100px, 2fr)
    minmax(120px, 2fr) minmax(100px, 2fr) minmax(30px, 0.5fr);
  grid-template-rows: 30px;
  line-height: 30px;
  background-color: #ccc;
  border: 1px solid #ccc;
  grid-gap: 1px;
  text-align: center;
  font-weight: bold;
  font-size: 14px;

  @media screen and (max-width: 992px) {
  }
`;
