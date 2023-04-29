import styled from "styled-components";

export const HeadersContainer = styled.div`
@media screen {
 display: flex ;
 flex-direction: row;
 align-items: center;
 justify-content: space-around;
 width: 100vw;
 background: #EDEDED;
 height: 50px;
 margin-bottom: 10px;
  h2{
    color: #4088CB;
    cursor: pointer;
  }
}`

export const LogoHeadersContainer = styled.img`
@media screen {
 height:3vh;
 width: 3vh;
 margin-left: 32px;
}`

export const ExitImg = styled.div`
@media screen {
    visibility: ${({ hidden }) => hidden ? 'hidden' : 'visible'};
}`