import React from 'react'
import { Link } from "react-router-dom";

export function Post(props) {
  let data = props.data
  
  return <div className="uk-card uk-card-default uk-margin-medium-bottom">
    <div className="uk-card-header">
      <h3 className="uk-card-title uk-margin-remove-bottom">{data.id}: {data.title}</h3>
    </div>
    <div className="uk-card-body">
      <p>{data.body}</p>
    </div>
    <div className="uk-card-footer">
      <Link to={`/posts/${data.id}`} className="uk-button uk-button-text">
        Read more
      </Link>
    </div>
  </div>
}
