import React, { Component } from 'react';

class Post extends Component {
    render() {
        const { post } = this.props;
        const { userId, id, title, body } = post;
        return (
            <div>
                <p>user id: {userId}</p>
                <p>id: {id}</p>
                <h5>{title}</h5>
                <p>{body}</p>
                <hr />
            </div>
        );
    }
}

export default Post;
