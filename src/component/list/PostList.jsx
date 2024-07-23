import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

import { Wrapper01 } from "./StyledComponents";

function PostList(props) {
    const {posts, onClickItem} = props;

    return(
        <Wrapper01>
            {posts.map((post, index) => {
                return(
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper01>
    );
}

export default PostList;