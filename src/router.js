import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./pages/MainLayout/MainLayout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import {getAllPosts, getAllUsers, postsOfUsers} from "./services/users.service";
import PostsOfUsers from "./components/UsersContainer/PostsOfUsers/PostsOfUsers";
import CommentOfPosts from "./components/UsersContainer/CommentOfPosts/CommentOfPosts";
import commentOfPosts from "./components/UsersContainer/CommentOfPosts/CommentOfPosts";

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>,
                loader: getAllUsers
            },
            {
                path: 'posts',
                element: <PostsPage/>,
                loader: getAllPosts,
                children: [
                    {
                        path: ':id',
                        element: <CommentOfPosts/>,
                        loader: commentOfPosts
                    }
                ]
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
            {
                path: 'users/:id',
                element: <PostsOfUsers/>,
                loader: postsOfUsers
            }
        ]
    }
])
export {router}