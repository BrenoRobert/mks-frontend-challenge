import styled from 'styled-components'

import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  background: ${(props) => props.theme.colors.primary};
  height: 100vh;
  box-shadow: -5px 0px 6px 0px #00000021;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};
  padding: 40px;

  div {
    font-size: ${(props) => props.theme.font.size.md + 7}px;
    font-weight: ${(props) => props.theme.font.weight.bold};
    line-height: 32px;
  }
`

export const CloseBtn = styled(IoCloseCircleSharp)`
  cursor: pointer;
  stroke: ${(props) => props.theme.colors.white};
  fill: ${(props) => props.theme.colors.black};
  width: ${(props) => props.theme.font.size.lg}px;
  height: ${(props) => props.theme.font.size.lg}px;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.white};

  div:has(> div) {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    font-size: ${(props) => props.theme.font.size.md + 8}px;
    font-weight: ${(props) => props.theme.font.weight.bold};
    font-family: ${(props) => props.theme.font.family};
    line-height: 15px;
    margin: 30px 0;
    padding: 0 40px;
    
  }
  
  div:last-child {
    background-color: black;
    flex: 1;
    width: 100%;
    max-height: 100px;
    padding: 40px;
    text-align: center;
    font-size: ${(props) => props.theme.font.size.md + 8}px;
    font-family: ${(props) => props.theme.font.family};
    font-weight: ${(props) => props.theme.font.weight.bold};
    line-height: 15px;
  }
`