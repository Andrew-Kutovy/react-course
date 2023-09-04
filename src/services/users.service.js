const getAllUsers = async () =>{
   return await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
}

const postsOfUsers = async ({params:{id}}) => {
  return await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(res => res.json())
}

const getAllPosts = async () => {
  return await fetch('https://jsonplaceholder.typicode.com/posts').then(res=>res.json())
}

const commentsOfPosts = async ({params:{id}}) => {
    console.log(id);
    return await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
}


export {getAllUsers, postsOfUsers, getAllPosts}