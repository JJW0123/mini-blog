import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import data from "../../data.json"
import CommentList from "../list/CommentList"

import { Wrapper, Container, PostContainer, TitleText, CommentLabel, ContentText } from "./StyledComponents";

function PostViewPage(props) {
    const navigate = useNavigate();
    const {postId} = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                <CommentList comments={post.comments}/>

                <TextInput
                    height={40}
                    value={comment}
                    onChange={(event) => {
                        setComment(event.target.value);
                    }}
                />
                <Button
                    title="댓글 작성하기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;