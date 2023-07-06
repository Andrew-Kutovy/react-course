import './App.css';
import {PostContainer} from "./Components/PostContainer/PostContainer";

//з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента PostComponent)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

function App() {
  return (
    <>
      <PostContainer/>
    </>
  );
}

export default App;
