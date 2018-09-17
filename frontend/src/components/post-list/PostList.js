import React from 'react'

import Post from '../post/Post'

import './PostList.css'

const PostList = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => <Post post={post} key={post.id}/>)}
    </div>
  )
}

export default PostList