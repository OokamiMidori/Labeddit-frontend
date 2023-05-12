import styled from "styled-components";

export const LoginPageContainer = styled.div`
    @media screen {
        background: white;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }

`;

export const ContainerTopo = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const FormContainer = styled.div`
    @media screen {
        width: 100vw;
        height: 128px;
        border-radius: 4px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        font-family: 'Noto Sans', sans-serif;
}
`;

export const ButtonLoginContainer = styled.button`
    @media screen {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 13px;
        width: 100%;     
        background: linear-gradient(to right, #ff6489, #f9b24e);
        border: none;
        border-radius: 27px;
        color: #FFFFFF;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        font-family: 'Noto Sans', sans-serif;
}
`;

export const ButtonSignupContainer = styled.button`
    @media screen {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 13px ;
        width: 100%;       
        background: white;
        border: 1px solid #fe7e02;
        border-radius: 27px;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #FE7E02;
        font-family: 'Noto Sans', sans-serif;
}
`;

export const LogoContainer = styled.img`
    @media screen {
        width: 84px;
        height: 84.02px;
        margin-bottom: 20px;
}
`;

export const InputContainer = styled.input`
    @media screen {
        box-sizing: border-box;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #FFFFFF;
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    width: 363px;
    height: 60px;
    padding-left: 6px;
}
`;

export const ContainerBottom = styled.section`
@media screen {
display:flex ;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 365px;
height: 25vh;
}
`