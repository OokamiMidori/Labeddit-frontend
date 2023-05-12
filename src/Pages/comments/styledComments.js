import styled from "styled-components";

export const CommentsContainer = styled.div`
@media screen {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column; 
    height: 100%;
    width: 100%;   
}`

export const CommentInputContainer = styled.div`
@media screen {
    display:flex ;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 order: 0;
 padding-top: 10px;
}`

export const ButtonSendComment = styled.button`
@media screen {
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 145px;
font-weight: 700;
font-size: 18px;
line-height: 23px;
/* position: absolute; */
width: 359px;
height: 47px;
left: 33px;
top: 269px;
color: #ffffff;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
border-radius: 12px;
margin: 5px 0px;
}`

export const CommentInputStyled = styled.input`
@media screen {
    /* position: absolute; */
width: 364px;
height: 131px;
left: 30px;
top: 126px;
background: #EDEDED;
border-radius: 12px;
padding-left: 10px;
}
`
export const PostInCommentStyled = styled.div`
@media screen {
    box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: flex-start;
/* padding: 9px 10px; */
gap: 18px;
width: 364px;
height: 121px;
background: #FBFBFB;
border: 1px solid #E0E0E0;
border-radius: 12px;
flex: none;
flex-grow: 0;
.content{
    padding-left: 10px;
}
}`