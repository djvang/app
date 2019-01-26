import React from 'react'

export function Content({post}) {
  return <div>
    <h1 className="uk-heading-bullet uk-margin-medium-bottom">
        <span>{post.id} {post.title}</span>
        <a className="uk-text-small" href="/">Author</a>
    </h1>
    <div className="uk-article uk-dropcap uk-margin-large-bottom">
        {post.body}
    </div>
  </div>
}
