import { useState } from "react"
import likeImg from "../assets/Vectorlike_img.svg"
import dislikeImg from "../assets/Vectordislike_img.svg"
import { BASE_URL, TOKEN_NAME } from "../constants/url"
import axios from "axios"
import { CommentsCardContainer } from "./styledCommentsCard"
import { AutorContainer, ExtraPostContainer, LikeDislikePostContainer } from "./styledPostCard"

export default function CommentCard(props) {
    const { comment, fetchCommentsList } = props

    const [isLoading, setIsLoading] = useState(false)

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

            await axios.put(BASE_URL + `/comment/${comment.id}/like`, body, config);

            setIsLoading(false)
            fetchCommentsList()
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

            await axios.put(BASE_URL + `/comment/${comment.id}/like`, body, config);

            setIsLoading(false)
            fetchCommentsList()
        } catch (error) {
            console.error(error?.response?.data)
            window.alert(error?.response?.data)
        }
    }

    return (
        <CommentsCardContainer>
            <AutorContainer>Enviado por:{comment.creator.name}</AutorContainer>
            <div>{comment.content}</div>
            <ExtraPostContainer>
                <LikeDislikePostContainer>
                    <img src={likeImg} onClick={like} />
                    <span>{comment.likes}</span>
                    <img src={dislikeImg} onClick={dislike} />
                </LikeDislikePostContainer>
            </ExtraPostContainer>
        </CommentsCardContainer>
    )

}