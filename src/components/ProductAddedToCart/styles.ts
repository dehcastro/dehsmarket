import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: #fff;
  padding: 20px;
  margin-top: 10px;
  border-radius: 18px;
`

export const ImageContainer = styled.div`
  width: 70px;
  height: 50px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductImage = styled.img`
  width: 100%;
`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  margin-left: 18px;
`

export const Title = styled.p`
  font-family: 'IBM Plex Sans';
  font-size: 22px;
  color: #0a4565;
  margin: 0;
`

export const Price = styled.p`
  font-family: 'Nunito';
  font-weight: 800;
  font-size: 14px;
  color: #fd7272;
  margin: 0;
`

export const Unit = styled.span`
  font-weight: 700;
  color: #80a2ad;
`

export const Quantity = styled.span`
  color: #fd7272;
  font-family: 'Nunito';
  font-weight: 700;
`

export const MinusButton = styled.button`
  background-color: #80a2ad;
`

export const PlusButton = styled.button`
  background-color: #fd7272;
`

export const RemoveButton = styled.button`
  background-color: transparent;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 120px;

  & button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`
