import React from 'react';
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";
import CreateCommentPage from "./pages/CreateCommentPage/CreateCommentPage";

const App = () => {

    return (
        <div >
            <div><CreateUserPage /></div>
            <div><CreateCommentPage /></div>
        </div>
    );
};

export default App;