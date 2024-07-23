import React from "react";

import { Wrapper02, ContentText } from "./StyledComponents";

function CommentListItem(props) {
    const {comment} = props;

    return(
        <Wrapper02>
            <ContentText>{comment.content}</ContentText>
        </Wrapper02>
    );
}

export default CommentListItem;