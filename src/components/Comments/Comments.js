import React, {Component} from 'react';
import {commentsService} from "../../services/commentsService";
import Comment from "./Comment/Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        commentsService.getAll().then(({data})=> this.setState({comments: data}))
    }

    render() {
        const {comments} = this.state;
        return (
            <div>
                {comments.map((comment)=> <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
};

export default Comments;