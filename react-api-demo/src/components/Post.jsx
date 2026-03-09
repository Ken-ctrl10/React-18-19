import { useEffect, useState } from 'react'
import { getPosts, deletePosts } from '../services/postService'

import PostForm from './PostForm';

export default function Post(){
  const [post, setPost] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    getPosts()
      .then((result) => {
        setPost(result.data)
      })
      .catch((err) => {
        console.error(err);
      })

  }, []); 

  const handleDelete = (id) => {
      deletePosts(id)
      .then(() => {
        setPost(post.filter(post => post.id !== id));
        //it will take seconds after clicking the delete button but it is much safer so that the api may not fail.
      })
      .catch((err) => {
        console.error(err);
      })
  }
  
  function startEditing(post){
    setEditingPost(post);
  }

  return(
    <div>
      <h1>Posts:</h1>
      <PostForm posts={post} setPosts={setPost} editingPost={editingPost} setEditingPost={setEditingPost}></PostForm>
      <ul>
        {
          post.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => startEditing(post)}>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}