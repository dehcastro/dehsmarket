import styled from 'styled-components'

export const Header = styled.div`
  max-width: 1000px;
  margin: 40px auto 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ebc5c5;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CartButton = styled.button`
  width: 75px;
  height: 40px;
  background: #fd7272;
  border-radius: 34px;
  border: 0;
  padding: 0 14px 0 16px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > span {
    font-family: 'Jura';
    font-size: 18px;
    color: #fff;
  }
`
