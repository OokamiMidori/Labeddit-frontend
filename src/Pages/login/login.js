import { useNavigate } from "react-router-dom";
import { LoginPageContainer, FormContainer, LogoContainer, InputContainer, ButtonLoginContainer, ButtonSignupContainer, ContainerTopo, ContainerBottom } from "./styledLogin";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToSignupPage } from "../../routes/coordinator";
import { useState } from "react";
import axios from "axios";
import { goToHomePage } from "../../routes/coordinator";
import logoIcon from "../../assets/Group 3labenu_logo.svg"
import barrinha from "../../assets/Line 3barrinha.svg"

export const LoginPage = () => {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const changeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const login = async (event) => {
        event.preventDefault()

        try {
            setIsLoading(true)
            const body = {
                email: form.email,
                password: form.password
            };

            const response = await axios.post(BASE_URL + "/users/login", body);
            window.localStorage.setItem(TOKEN_NAME, response.data.token)

            setIsLoading(false);
            goToHomePage(navigate)
        } catch (error) {
            setIsLoading(false)
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }


    return (
        <LoginPageContainer>
            <ContainerTopo>
                <LogoContainer src={logoIcon} />
                <h1>LabEddit</h1>
                <h3>O projeto de rede social da Labenu</h3>
            </ContainerTopo>

            <FormContainer onSubmit={login} autoComplete="off">
                <section>

                    <InputContainer
                        type={"email"}
                        name={"email"}
                        placeholder="E-mail"
                        value={form.email}
                        onChange={changeForm}
                        autoComplete="off" />

                </section>

                <section>

                    <InputContainer
                        type={"password"}
                        name={"password"}
                        placeholder="Password"
                        value={form.password}
                        onChange={changeForm}
                        autoComplete="off" />

                </section>
            </FormContainer>
            <ContainerBottom>
                <ButtonLoginContainer disabled={isLoading} onClick={login}>
                   Continuar
                </ButtonLoginContainer>
                <img src={barrinha} />
                <ButtonSignupContainer disabled={isLoading} onClick={() => goToSignupPage(navigate)}>
                    Criar uma conta!
                </ButtonSignupContainer>
            </ContainerBottom>


        </LoginPageContainer>
    )
}