import { useState, useEffect } from 'react';
import { createPosts, updatePosts } from '../services/postService';
export default function PostForm({posts, setPosts, editingPost, setEditingPost}){

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if(editingPost){
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [editingPost])

  function handleSubmit(event){
    event.preventDefault();

    if(editingPost){
      editPost();
    }
    else{
      addPost();
    }

    setTitle("");
    setBody("");
    setEditingPost(null);
  }
 
  const addPost = () => {
      createPosts({title, body})
      .then((response) => {
        setPosts([...posts, response.data])
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const editPost = () => {
      updatePosts(editingPost.id, { title, body })
      .then((response) => {
        setPosts(posts.map(post => (post.id === editingPost.id ? response.data : post)))
      })
      .catch((err) => {
        console.error(err);
      })
  }

  return(<>
    <form action="" onSubmit={handleSubmit}>
      <div>Title</div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <div>Body</div>
      <textarea name="" id="" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
      <div>
        <button type="submit" onChange={editPost}>{editingPost ? "Edit Post" : "Add post"}</button>
      </div>
    </form>
  </>);

}