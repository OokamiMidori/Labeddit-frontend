import styled from "styled-components";

export const PostCardStyledContainer = styled.div`
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
order: 1;
flex-grow: 0;
}`

export const AutorContainer = styled.div`
@media screen {
   display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
width: 124px;
height: 16px;
font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 16px;
text-align: center;
color: #6F6F6F;
flex: none;
order: 0;
flex-grow: 0;
}`

export const LikeDislikePostContainer = styled.div`
@media screen {
   display:flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   border: 1px solid #ececec;
   border-radius: 28px;
   padding: 4px;
   gap: 15px;
}
`
export const ExtraPostContainer = styled.div`
@media screen {
 display:flex ;
 flex-direction: row;
 width: 5vw;
 align-items: center;
 justify-content: space-between;
}
`

export const CommentPostContainer = styled.div`
@media screen {
 display:flex;
 flex-direction:row;
 align-items: center;
 justify-content: space-between;
 border: 1px solid #ececec;
 border-radius: 28px;
 padding: 4px;
 gap: 8px;
}
`