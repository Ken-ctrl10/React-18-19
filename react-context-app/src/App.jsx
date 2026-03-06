import './App.css'

import BlogPage from './components/BlogPage'
import UserInfoContext from './context/UserinfoContext'

function App() {

  const userInfo = {
    username: "Admin",
    isAdmin: true
  }

  return <div>
    
    <UserInfoContext.Provider value={userInfo}>
      <BlogPage></BlogPage>
    </UserInfoContext.Provider>
  </div>
}

export default App