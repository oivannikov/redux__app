import React from 'react';

import PostForm from './components/PostForm/PostForm';
import Posts from './components/Posts/Posts';
import FetchedPosts from './components/FetchedPosts//FetchedPosts';

function App() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="d-flex">
        <div className="row">
          <div className="col">
            <h2>Синхронные посты</h2>
            <Posts />
          </div>
        </div>
        <div className="col">
          <h2>Ассинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
