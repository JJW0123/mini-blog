import React from "react";

import { Wrapper02, TitleText } from "./StyledComponents";

function PostListItem(props) {
    const {post, onClick} = props;

    return (
        <Wrapper02 onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper02>
    );
}

export default PostListItem;