import { useContext } from 'react'
import Post from './Post.jsx'
import UserInfoContext from '../context/UserinfoContext.js'


export default function BlogPage(){
  const userInfo = useContext(UserInfoContext)

  return <div>
    <h1>Blog</h1>
    <Post username = {userInfo.username} isAdmin={userInfo.isAdmin}></Post>
  </div>
}