import React from 'react';

const PostInfo = (props) => {
    let {post} = props
    return (
        <div>
            <div>
                <div>
                    <p>{post.title}</p>
                    <p> id: {post.id}  user id: {post.userId}</p>
                    <p>{post.body}</p>
                    <button>back for list</button>
                </div>
            </div>
        </div>
    );
};

export default PostInfo;













