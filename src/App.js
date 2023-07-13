import React from 'react';
import './App.css';
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";
import CreateCommentPage from "./pages/CreateCommentPage/CreateCommentPage";
import CreateCarPage from "./pages/CreateCarPage/CreateCarPage";
import DeleteCarPage from "./pages/DeleteCarPage/DeleteCarPage";
import ChangeCarPage from "./pages/ChangeCarPage/ChangeCarPage";

const App = () => {

    return (
        <div className={'block'}>
            <CreateCarPage />
            <DeleteCarPage />
            <ChangeCarPage />

            {/*<div><CreateUserPage /></div>*/}
            {/*<div><CreateCommentPage /></div>*/}
        </div>
    );
};

export default App;