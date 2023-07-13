import React from 'react';
import CreateUserPage from "./pages/CreateUserPage/CreateUserPage";


//Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на
// http://jsonplaceholder.typicode.com/users
const App = () => {

    return (
        <div>
            <CreateUserPage />
        </div>
    );
};

export default App;