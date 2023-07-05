import { styled } from 'styled-components';

export const TableContent = styled.div`
  display: grid;
  grid-template-columns:
    minmax(40px, 1fr) minmax(50px, 1fr) minmax(145px, 2fr) minmax(100px, 2fr) minmax(100px, 2fr)
    minmax(120px, 2fr) minmax(100px, 2fr) minmax(30px, 0.5fr);
  grid-template-rows: 35px;
  line-height: 35px;
  background-color: #ccc;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  grid-gap: 1px;
  text-overflow: ellipsis;

  .content-name:hover {
    cursor: pointer;
    color: #7d7b7b;
    font-size: 105%;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div img {
    width: 25px;
    height: 25px;
  }

  div img:hover {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .content-symbol {
    color: #ec22ae;
  }

  .green {
    color: green;
  }

  .red {
    color: red;
  }

  @media screen and (max-width: 992px) {
  }
`;
