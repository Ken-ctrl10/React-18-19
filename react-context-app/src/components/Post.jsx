import Comment from './Comment.jsx';


export default function Post({username, isAdmin}){
  
  return <div>
    {isAdmin && <button>Delete Comment</button>}

    <h2>Example Post Title</h2>
    <p>This is an example post content.</p>

    <Comment username={username} isAdmin={isAdmin}></Comment>
  </div>
}