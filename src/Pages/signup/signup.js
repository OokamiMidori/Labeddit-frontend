import { useState } from "react";
import { Headers } from "../../components/Headers"
import { useNavigate } from "react-router-dom";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToHomePage } from "../../routes/coordinator";
import axios from "axios";
import { EmailCheckboxContainer, InputCheckBoxContainer, SignupPageContainer, TermosLegaisContainer, TitleContainer } from "./styledSignup";
import { ButtonLoginContainer, ContainerBottom, FormContainer, InputContainer } from "../login/styledLogin";

export const SignupPage = () => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)
    const [isCheked, setIsChecked] = useState(false)

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })
    const changeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isCheked)
    }

    const signup = async (event) => {
      
            try {
                setIsLoading(true)
                const body = {
                    name: form.name,
                    email: form.email,
                    password: form.password
                };
                const response = await axios.post(BASE_URL + "/users/signup", body);

                window.localStorage.setItem(TOKEN_NAME, response.data.token)

                setIsLoading(false)
                goToHomePage(navigate)
            } catch (error) {
                setIsLoading(false)
                console.error(error?.response?.data)
                window.alert(error?.response?.data)
            }

        
    }


    return (
        <SignupPageContainer>
            <Headers />
            <TitleContainer>
                <div>Olá, boas vindas ao LabEddit ;) </div>
            </TitleContainer>
            
            <div>
                <FormContainer onSubmit={signup} autoComplete="off">
                    <section>
                        <InputContainer
                            type={"name"}
                            name={"name"}
                            placeholder="Apelido"
                            value={form.name}
                            onChange={changeForm}
                            autoComplete="off"
                        />
                    </section>
                    <section>
                        <InputContainer
                            type={"email"}
                            name={"email"}
                            placeholder="E-mail"
                            value={form.email}
                            onChange={changeForm}
                            autoComplete="off"
                        />
                    </section>
                    <section>
                        <InputContainer
                            type={"password"}
                            name={"password"}
                            placeholder="Senha"
                            value={form.password}
                            onChange={changeForm}
                            autoComplete="off"
                        />
                    </section>
                </FormContainer>
            </div>
            <div>
                <TermosLegaisContainer>                
                Ao continuar, você concorda com o nosso <span>Contrato de usuário</span> e nossa <span>Política de Privacidade</span>
            </TermosLegaisContainer>
            </div>
            
            <EmailCheckboxContainer>
                <InputCheckBoxContainer
                    type="checkbox"
                    checked={isCheked}
                    onChange={handleCheckboxChange} />
                    <p>Eu concordo em receber emails sobre coisas legais no LabEddit</p>
            </EmailCheckboxContainer>
            <ContainerBottom>
                <ButtonLoginContainer
                    disabled={isLoading}
                    onClick={signup}
                >Cadastrar</ButtonLoginContainer>
            </ContainerBottom>

        </SignupPageContainer>
    )
}