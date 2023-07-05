import { styled } from 'styled-components';

export const PaginationContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;

  li {
    display: inline-block;
    text-align: center;
    width: 45px;
    height: 45px;
    padding: 5px;
    border-radius: 30px;
    border: 1px solid #ccc;
    margin-right: 15px;
  }

  a {
    color: #ccc;
    line-height: 35px;
  }

  li:hover {
    border: 1px solid #ec22ae;
    a {
      color: #ec22ae;
      cursor: pointer;
    }
  }

  .selected {
    border: 1px solid #ec22ae;
    a {
      color: #ec22ae;
    }
  }
`;
