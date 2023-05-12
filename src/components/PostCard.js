import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
import { BASE_URL, TOKEN_NAME } from "../constants/url"
import axios from "axios"
import likeImg from "../assets/Vectorlike_img.svg"
import dislikeImg from "../assets/Vectordislike_img.svg"
import commentImg from "../assets/Vectorcomments_icon.svg"
import { AutorContainer, CommentPostContainer, ExtraPostContainer, LikeDislikePostContainer, PostCardStyledContainer } from "./styledPostCard"
import { goToCommentsPage } from "../routes/coordinator"
import { useNavigate, useParams } from "react-router-dom"

export default function PostCard(props) {
    const { post } = props

    const pathParams = useParams();
    const navigate = useNavigate();
    const context = useContext(GlobalContext)
    const { fetchPostList } = context
    const [comments, setComments] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const fetchComments = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem(TOKEN_NAME)
            const config = {
                headers: {
                    Authorization: token
                }
            }

            const response = await axios.get(BASE_URL + `/comment/${post.id}`, config)
            setComments(response.data)
        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }
    useEffect(() => {
        fetchComments()
    }, []);

    // console.log(comments)

    const like = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem(TOKEN_NAME);

            const config = {
                headers: {
                    Authorization: token
                }
            };

            const body = {
                like: true
            }

            await axios.put(BASE_URL + `/post/${post.id}/like`, body, config);

            setIsLoading(false)
            fetchPostList()
        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    };

    const dislike = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem(TOKEN_NAME);

            const config = {
                headers: {
                    Authorization: token
                }
            };

            const body = {
                like: false
            }

            await axios.put(BASE_URL + `/post/${post.id}/like`, body, config);

            setIsLoading(false)
            fetchPostList()
        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }




    return (
        <PostCardStyledContainer>
            <AutorContainer>Enviando por:{post.creator.name}</AutorContainer>
            <div className="content">{post.content}</div>
            <ExtraPostContainer>
                <LikeDislikePostContainer>
                    <img src={likeImg} onClick={like} />
                    <span>{post.likes}</span>
                    <span>
                        <img src={dislikeImg} onClick={dislike} />
                    </span>
                </LikeDislikePostContainer>
                <CommentPostContainer onClick={() => goToCommentsPage(navigate, post.id)}>
                    <img src={commentImg} 
                    />
                    <span>{comments.length}</span>
                </CommentPostContainer>
            </ExtraPostContainer>
        </PostCardStyledContainer>
    )
}