import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  justify-content: center;
  align-items: center;

  padding: 120px 170px
`

export const ProductsListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  justify-self: center;
  max-width: 1400px;
  flex-wrap: wrap;
  gap: 20px;
`;
