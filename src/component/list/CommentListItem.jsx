import React from "react";
import styled from "styled-components";

import { Wrapper02 } from "./StyledComponents";

const ContentText = styled.p`
    font-size: 14px;
`;

function CommentListItem(props) {
    const {comment} = props;

    return(
        <Wrapper02>
            <ContentText>{comment.content}</ContentText>
        </Wrapper02>
    );
}

export default CommentListItem;