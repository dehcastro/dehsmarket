import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(253, 114, 114, 0.31);
`

export const Sidebar = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  right: 0;
  width: 440px;
  height: 100vh;
  background: #fff5f5;
  box-shadow: -24px 0px 40px #f4abab;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CloseButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Header = styled.div`
  display: flex;
  align-items: center;

  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #e5e5e5;

  & h3 {
    margin: 0 0 0 10px;
    color: #80a2ad;
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 26px;
  }
`

export const CartAddedProductsList = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TotalPrice = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid #e5e5e5;

  & p {
    font-family: 'Nunito';
    margin: 0;
  }

  & p:nth-child(1) {
    font-weight: 700;
    font-size: 22px;
    color: #80a2ad;
  }

  & p:nth-child(2) {
    font-weight: 800;
    font-size: 32px;
    color: #fd7272;
  }
`

export const CtaButton = styled.button`
  font-family: 'Nunito';
  font-weight: 700;
  font-size: 22px;
  background: #fd7272;
  color: #fff;
  width: 300px;
  height: 50px;
  border-radius: 34px;
  margin-top: 32px;
`
