import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  width: 100%;
  height: 34px;
  background-color: ${(props) => props.theme.colors.lightGray};
  justify-content: center;
  align-items: center;

  span {
    font-size: ${(props) => props.theme.font.size.sm}px;
    font-weight: ${(props) => props.theme.font.weight.regular};
    font-family: ${(props) => props.theme.font.family}, sans-serif;
  }
`
