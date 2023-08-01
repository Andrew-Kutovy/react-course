import React, {Component} from 'react';

class Comment extends Component{
    render() {
        const {comment} = this.props;
        const {postId, id, name, email, body} = comment
        return (
            <div>
                <p>id:{id} post id: {postId}</p>
                <p>name:{name}</p>
                <p>email:{email}</p>
                <p>body:{body}</p>
                <hr/>
            </div>
        );
    }
};

export default Comment;