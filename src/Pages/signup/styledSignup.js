import styled from "styled-components";

export const SignupPageContainer = styled.div`
@media screen {
 display:flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 height: 100%;
 width: 100%;
}
`
export const TitleContainer = styled.div`
@media screen {
 display:flex ;
 align-items: center;
 justify-content: space-around;
 marging-left: 32px;
padding-left: 32px;
 font-size: 33px;
 line-height: 43px;
 font-weight: 700;
 margin-bottom: 194px;
}`

export const EmailCheckboxContainer = styled.p`
@media screen {
 display:flex ;
 flex-direction: row;
 flex-wrap: nowrap;
 align-items: center;
 justify-content: center;
 padding:25px ;
 
}`

export const InputCheckBoxContainer = styled.input`
@media screen {
 margin:10px ;
}`

export const TermosLegaisContainer = styled.p`
@media screen {
    margin-top: 65px;
 font-size: 14px;
 font-weight: 19px;
 line-height: 19px;
 padding: 34px;
width: 100vw;
 span{
    color: rgba(64, 136, 203, 1);
  }
}`