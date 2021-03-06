import React from 'react'
import {useSelector} from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import {PostAuthor} from './PostAuthor'
import {ReactionButtons} from './ReactionButtons'
import {selectPostById} from './PostsSlice'

export const SinglePostPage = () => {
  const params = useParams()
  const {postId} = params

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <PostAuthor userId={post.user} />
        <ReactionButtons post={post} />
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}
