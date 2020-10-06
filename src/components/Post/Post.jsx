import React from 'react';

export default function Post({ post }) {
  return (
    <div className="card">
      <div className="card__body">
        <h5 className="card__title">
          Title here { post.title }
        </h5>
      </div>
    </div>
  )
}