import styled from 'styled-components'

export const Container = styled.div`
  height: 286px;
  min-width: 220px;
  width: calc(100% - 20px);
  margin: 15px;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1), 0px 42px 32px -30px #ebc5c5;
  border-radius: 30px 30px 36px 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: relative;
`

export const ImageContainer = styled.div`
  width: 180px;
  height: 154px;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ProductImage = styled.img``

export const ProductDetails = styled.div`
  width: 100%;
  padding: 0 24px 24px;
`

export const Title = styled.p`
  font-family: 'IBM Plex Sans';
  font-size: 28px;
  color: #0a4565;
  margin: 0;
`

export const Price = styled.p`
  font-family: 'Nunito';
  font-weight: 800;
  font-size: 16px;
  color: #fd7272;
  margin: 0;
`

export const Unit = styled.span`
  font-weight: 700;
  color: #80a2ad;
`

export const AddButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fd7272;
  box-shadow: 0px 5px 20px -5px #ea8686;

  display: flex;
  align-items: center;
  justify-content: center;
`
