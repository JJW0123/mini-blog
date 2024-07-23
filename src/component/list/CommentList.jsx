import React from "react";
import CommentListItem from "./CommentListItem";

import { Wrapper01 } from "./StyledComponents";

function CommentList(props) {
    const {comments} = props;

    return(
        <Wrapper01>
            {comments.map((comment, index) => {
                return(
                    <CommentListItem
                        key={comment.id}
                        comment={comment}
                    />
                );
            })}
        </Wrapper01>
    );
}

export default CommentList;