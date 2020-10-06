import React from 'react';

// import { connect } from 'react-redux';

import Post from '../Post/Post';
import { useSelector } from 'react-redux';

function Posts() {
  const posts = useSelector((state) => state.posts.posts);
  if (!posts.length) {
    return <p className="text-center">Постов пока нет</p>
  }
  return posts.map(post => <Post post={post} key={post.id}/>);
}

// const mapStateToProps = state => {
//   return {
//     syncPosts: state.posts.posts,
//   }
// }

// export default connect(mapStateToProps, null)(Posts);
// вТОРОЙ СПОСОБ ПОЛУЧЕНИЯ СТЕЙТА

export default Posts;
