import React from 'react';

export function Alert( { text } ) {
  console.log(text);
  return (
    <div className="alert alert-primary" role="alert">
      { text }
    </div>
  )
}

