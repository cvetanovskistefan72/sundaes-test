import React from 'react'

const PostItem = ({post}) => {
  return (
    <div>
      <h1 data-testid="post">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default PostItem