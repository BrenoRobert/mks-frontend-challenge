import styled from 'styled-components'

import { TiShoppingCart } from "react-icons/ti";

export const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 100px;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: space-between;
  align-items: center;
  padding: 0 65px;

  div {
    display: flex;
    align-items: end;
    color: ${(props) => props.theme.colors.white};

    h1 {
      font-size: ${(props) => props.theme.font.size.lg}px;
      font-weight: ${(props) => props.theme.font.weight.semibold};
    }

    h2 {
      font-size: ${(props) => props.theme.font.size.md}px;
      font-weight: ${(props) => props.theme.font.weight.light};
      line-height: 10px;
      margin-left: 6px;
    }
  }

  button {
    width: 90px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => props.theme.borderRadius}px;
    border: none;
    cursor: pointer;

    span {
      font-size: ${(props) => props.theme.font.size.default}px;
      font-weight: ${(props) => props.theme.font.weight.bold};
      font-family: ${(props) => props.theme.font.family}, sans-serif;
      padding: 10px;
    }
  }
`

export const ShoppingCart = styled(TiShoppingCart)`
  stroke: ${(props) => props.theme.colors.white};
  width: ${(props) => props.theme.font.size.md}px;
  height: ${(props) => props.theme.font.size.md}px;
`
