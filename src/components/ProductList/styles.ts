import styled from 'styled-components'

export const ProductsContainer = styled.div`
  max-width: 1020px;
  margin: 30px auto;
  display: grid;
  /* grid-template-columns: auto auto auto auto; */
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: center;
`
