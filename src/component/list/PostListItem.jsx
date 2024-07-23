import React from "react";
import styled from "styled-components";

import { Wrapper02 } from "./StyledComponents";

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props) {
    const {post, onClick} = props;

    return (
        <Wrapper02 onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper02>
    );
}

export default PostListItem;