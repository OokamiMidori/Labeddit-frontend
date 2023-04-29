import styled from "styled-components";

export const HomePageContainer = styled.div`
@media screen {
   display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column; 
    height: 100%;
    width: 100%;
}
`

export const ImgContainerHome = styled.div`
@media screen {
height: 25px ;
}
`

export const PostCardContainer = styled.div`
@media screen {
   display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
/* width: 100vw;
height: 66vh; */
order: 1;
}
`

export const PostInputContainer = styled.input`
@media screen {
    /* position: absolute; */
width: 364px;
height: 131px;
left: 30px;
top: 126px;
background: #EDEDED;
border-radius: 12px;
}
`

export const PostInputSectionContainer = styled.div`
@media screen {
 display:flex ;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 order: 0;
}`

export const ButtonSendPost = styled.button`
@media screen {
    display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 145px;

/* position: absolute; */
width: 359px;
height: 47px;
left: 33px;
top: 269px;

background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
border-radius: 12px;
}`