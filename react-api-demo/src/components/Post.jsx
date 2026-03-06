import { useEffect, useState } from 'react'
import { getPosts } from '../services/postService'

export default function Post(){
  const [post, setPost] = useState([])
  useEffect(() => {
    getPosts()
      .then((result) => {
        setPost(result.data)
      })
      .catch((err) => {
        console.error(err);
      })

  }, []); 
  
  return(
    <div>
      <h1>Posts:</h1>
      <ul>
        {
          post.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}