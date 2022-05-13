import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Navbar} from './app/Navbar'

import {PostList} from './features/posts/PostList'
import {AddPostForm} from './features/posts/AddPostForm'
import {SinglePostPage} from './features/posts/SinglePostPage'
import {EditPostForm} from './features/posts/EditPostForm'
import {UserList} from './features/users/UserList'
import {UserPage} from './features/users/UserPage'
import {NotificationsList} from './features/notifications/NotificationsList'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <AddPostForm />
                <PostList />
              </React.Fragment>
            }
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserPage />} />
          <Route path="/notifications" element={<NotificationsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
