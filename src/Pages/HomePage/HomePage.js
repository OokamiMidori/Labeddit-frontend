import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../contexts/GlobalContext";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import { goToLoginPage } from "../../routes/coordinator";
import axios from "axios";
import PostCard from "../../components/PostCard";
import { ButtonSendPost, HomePageContainer, ImgContainerHome, PostCardContainer, PostInputContainer, PostInputSectionContainer } from "./styledHomePage";
import barrinhabot from "../../assets/Line 3barrinha.svg"
import { Headers } from "../../components/Headers";


export const HomePage = () => {
    const navigate = useNavigate();

    const context = useContext(GlobalContext);
    const { postList, fetchPostList } = context;

    const [isLoading, setIsLoading] = useState(false)
    const [content, setContent] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem(TOKEN_NAME)

        if (!token) {
            goToLoginPage(navigate);
        } else {
            fetchPostList();
        }
    }, []);

    const createPost = async (e) => {
        e.preventDefault()

        setIsLoading(true)

        try {
            const token = window.localStorage.getItem(TOKEN_NAME);

            const config = {
                headers: {
                    Authorization: token
                }
            };

            const body = {
                content: content
            }

            await axios.post(BASE_URL + "/post", body, config)

            setContent("");
            setIsLoading(false)
            fetchPostList()

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    return (
        <HomePageContainer>
            <Headers/>
            <PostInputSectionContainer>
                <form onSubmit={createPost}>
                    <section>
                        <PostInputContainer value={content} onChange={(e) => setContent(e.target.value)} />
                    </section>
                    <ButtonSendPost disabled={isLoading}>Postar</ButtonSendPost>
                </form>
            </PostInputSectionContainer>
            <ImgContainerHome>
                <img src={barrinhabot} />
            </ImgContainerHome>
            <PostCardContainer>
                {postList.map((post) => {
                    return <PostCard key={post.id} post={post} />;
                })}
            </PostCardContainer>
        </HomePageContainer>
    )
}