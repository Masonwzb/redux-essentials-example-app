import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {PostAuthor} from './PostAuthor'
import {TimeAgo} from './TimeAgo'
import {ReactionButtons} from './ReactionButtons'
import {fetchPosts, selectPostIds, selectPostById} from './PostsSlice'

import {Spinner} from '../../components/Spinner'

const PostExcerpt = ({postId}) => {
  const post = useSelector((state) => selectPostById(state, postId))
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post Detail
      </Link>
    </article>
  )
}

// PostExcerpt = React.memo(PostExcerpt)

export const PostList = () => {
  const dispatch = useDispatch()

  const postStatus = useSelector((status) => status.posts.status)
  const error = useSelector((state) => state.posts.error)

  const orderedPostIds = useSelector(selectPostIds)

  let content
  if (postStatus === 'loading') {
    content = <Spinner text="Loading..." />
  } else if (postStatus === 'succeeded') {
    // Sort posts in reverse chronological order by datetime string
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ))
  } else if (postStatus === 'failed') {
    content = <div>{error}</div>
  }

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
