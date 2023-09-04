import React from 'react';
import {Link} from "react-router-dom";

const PostComponent = ({post}) => {
    return (
        <div>
            <Link to={`${post.id}`} state={post.body}>{post.title}</Link>
        </div>
    );
};

export default PostComponent;