import { useLocation, useNavigate, useParams } from "react-router-dom"
import { TOKEN_NAME } from "../constants/url"
import logo from "../assets/Group 3labenu_logo.svg"
import { goToLoginPage } from "../routes/coordinator"
import { ExitImg, HeadersContainer, LogoHeadersContainer } from "./styledHeaders"
import exit from "../assets/Group 2exit_img.svg"

export const Headers = ()=>{
    const navigate = useNavigate();
    const {id} = useParams()
    const location = useLocation();

    const logOff = ()=>{
        window.localStorage.removeItem(TOKEN_NAME)
        goToLoginPage(navigate)
    }

    const logIn = ()=>{
        goToLoginPage(navigate)
    }

    const exitComments = () =>{
        navigate(-1)
    }
    return(
        <HeadersContainer>
            <div>
                  <ExitImg hidden={location.pathname !== `/posts/${id}`}>
              <img src={exit} onClick={()=>exitComments()}/>     
            </ExitImg>  
            </div>                         
            <LogoHeadersContainer src={logo}/>
            {location.pathname === "/signup" && <h2 onClick={()=>logIn()}>Entrar</h2>}
            {location.pathname !== "/signup" && <h2 onClick={()=>logOff()}>Logout</h2>}            
        </HeadersContainer>
    )
}