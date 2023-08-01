import React, { Component } from 'react';
import { postsService } from "../../services/postService";
import Post from "./Post/Post";

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        postsService.getAll().then(({ data }) => this.setState({ posts: data }));
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                {posts.map((post) => <Post key={post.id} post={post} />)}
            </div>
        );
    }
}

export default Posts;
