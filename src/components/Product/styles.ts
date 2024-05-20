import styled from 'styled-components'
import { RiShoppingBag3Line } from "react-icons/ri";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 218px;
  height: 285px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius}px;
  padding-top: 14px;
  padding-bottom: 0;
  overflow: hidden;

  box-shadow: 0px 2px 8px 0px #00000022;

  img {
    max-height: 138px;
    max-width: 182px;
    height: auto;
    width: auto;
    align-self: center;
    padding: 0 14px;
  }

  button {
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    div {
      font-size: ${(props) => props.theme.font.size.sm}px;
      font-weight: ${(props) => props.theme.font.weight.semibold};
      font-family: ${(props) => props.theme.font.family}, sans-serif;
      color: ${(props) => props.theme.colors.white};
      padding: 10px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  padding-top: 10px;

  div {
    font-size: ${(props) => props.theme.font.size.default - 1}px;
    font-weight: ${(props) => props.theme.font.weight.regular};
    line-height: 19px;
  }

  span {
    width: 64px;
    height: 26px;
    border-radius: ${(props) => props.theme.borderRadius}px;
    padding: 4px 6px;
    background-color: ${(props) => props.theme.colors.darkGray};

    font-size: ${(props) => props.theme.font.size.sm - 1}px;
    font-weight: ${(props) => props.theme.font.weight.bold};
    font-family: ${(props) => props.theme.font.family}, sans-serif;
    color: ${(props) => props.theme.colors.white};
    text-align: center;
    line-height: 19px;
  }
`

export const Description = styled.div` 
  font-size: ${(props) => props.theme.font.size.xxs}px;
  font-weight: ${(props) => props.theme.font.weight.light};
  line-height: 12px;
  padding: 10px 14px;
  max-height: 60px;
`

export const ShoppingBag = styled(RiShoppingBag3Line)`
  stroke: ${(props) => props.theme.colors.white};
  width: ${(props) => props.theme.font.size.md - 2}px;
  height: ${(props) => props.theme.font.size.md - 2}px;
`
