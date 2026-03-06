import { useEffect, useState } from 'react'
import { getPosts } from '../services/postService'

export default function Post(){
  const [post, setPost] = useState([])
  useEffect(() => {
    getPosts()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
      })

  }, []); 
  
  return(<></>);
}