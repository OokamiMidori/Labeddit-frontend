import { useContext, useEffect, useState } from "react";
import { Headers } from "../../components/Headers";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import likeImg from "../../assets/Vectorlike_img.svg";
import dislikeImg from "../../assets/Vectordislike_img.svg";
import commentsImg from "../../assets/Vectorcomments_icon.svg";
import { BASE_URL, TOKEN_NAME } from "../../constants/url";
import axios, { Axios } from "axios";
import CommentCard from "../../components/CommentCard";
import { ButtonSendComment, CommentInputContainer, CommentInputStyled, CommentsContainer, PostInCommentStyled } from "./styledComments";
import { AutorContainer, CommentPostContainer, ExtraPostContainer, LikeDislikePostContainer, PostCardStyledContainer } from "../../components/styledPostCard";

export const CommentPage = () => {
    const context = useContext(GlobalContext);
    const { id } = useParams();
    const { postList } = context;
    const [post, setPost] = useState({ content: "", creator: {} });
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [commentsList, setCommentsList] = useState([])
    const [content, setContent] = useState("")



    useEffect(() => {
        setIsLoading(true);
        const foundPost = postList.find((item) => item.id === id);
        setPost(foundPost);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (post.creator && post.creator.name) {
            setName(post.creator.name);
        }
    }, [post]);

    const fetchCommentsList = async () => {
        setIsLoading(true)
        try {
            const token = window.localStorage.getItem(TOKEN_NAME)

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const response = await axios.get(BASE_URL + `/comment/${id}`, config)

            setCommentsList(response.data)
            setIsLoading(false)
        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    useEffect(() => {
        fetchCommentsList();
    }, [])

    const createComment = async (e) => {
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

            await axios.post(BASE_URL + `/comment/${id}`, body, config)

            setContent("");
            setIsLoading(false)
            fetchCommentsList()

        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }


    return (
        <CommentsContainer>
            <Headers />
            <PostInCommentStyled>
                <AutorContainer>Enviado por: {name}</AutorContainer>
                <div>{post.content}</div>
                <ExtraPostContainer>
                    <LikeDislikePostContainer>
                        <img src={likeImg} />
                        <span>{post.likes}</span>
                        <img src={dislikeImg} />
                    </LikeDislikePostContainer>
                    <CommentPostContainer>
                        <img src={commentsImg} />
                        <span>{commentsList.length}</span>
                    </CommentPostContainer>

                </ExtraPostContainer>

            </PostInCommentStyled>
            <CommentInputContainer>
                <form onSubmit={createComment}>
                    <section>
                        <CommentInputStyled value={content}
                            onChange={(e) => setContent(e.target.value)} />
                        <ButtonSendComment disabled={isLoading}>
                            Postar
                        </ButtonSendComment>
                    </section>
                </form>

            </CommentInputContainer>
            <div>
                {commentsList.map((comment) => {
                    return <CommentCard key={comment.id}
                        comment={comment}
                        fetchCommentsList={fetchCommentsList}
                    />
                })}
            </div>
        </CommentsContainer>
    );
};