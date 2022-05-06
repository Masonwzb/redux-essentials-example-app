import {configureStore} from '@reduxjs/toolkit'

import postsReducer from '../features/posts/PostsSlice'
import userReducer from '../features/users/UserSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
})
