import React from 'react';
import {useLocation} from "react-router-dom";

const CommentOfPosts = () => {
    const {state} = useLocation()

    return (
        <div>
            {state}
        </div>
    );
};

export default CommentOfPosts;