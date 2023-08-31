import {createBrowserRouter} from "react-router-dom";
import MainLayout from "./pages/MainLayout/MainLayout";
import UsersPage from "./pages/UsersPage/UsersPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";
import PostsPage from "./pages/PostsPage/PostsPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: 'users',
                element: <UsersPage/>
            },
            {
                path: 'comments',
                element: <CommentsPage/>
            },
            {
                path: 'posts',
                element: <PostsPage/>
            }
        ]
    }
])

export {routes}