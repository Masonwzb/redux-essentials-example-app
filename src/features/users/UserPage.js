import React from 'react'
import {useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom'

import {selectUserById} from './UserSlice'
import {selectPostsByUser} from '../posts/PostsSlice'

export const UserPage = () => {
  const params = useParams()
  const {userId} = params

  const user = useSelector((state) => selectUserById(state, userId))

  const postsForUser = useSelector((state) => selectPostsByUser(state, userId))

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  )
}
