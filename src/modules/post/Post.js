import React from 'react'
import { Link } from "react-router-dom";

export function Post(props) {
  let data = props.data;
  let view = props.view;

  let list = <Link to={`/posts/${data.title.split(' ').join('-')}`} className="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin uk-grid" data-uk-grid>
    <div className="uk-card-media-left uk-cover-container">
        <img src="https://picsum.photos/600/400" alt="" data-uk-cover />
        <canvas width="600" height="400"></canvas>
    </div>
    <div>
        <div className="uk-card-body">
            <h3 className="uk-card-title">Media Left</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
    </div>
  </Link>

  let grid = <div className="uk-card uk-card-default uk-margin-medium-bottom">
    <div className="uk-card-header">
      <h3 className="uk-card-title uk-margin-remove-bottom">{data.id}: {data.title}</h3>
    </div>
    <div className="uk-card-body">
      <p>{data.body}</p>
    </div>
    <div className="uk-card-footer">
      <Link to={`/posts/${data.title.split(' ').join('-')}`} className="uk-button uk-button-text">
        Read more
      </Link>
    </div>
  </div>
  
  return (view === 'grid' ? grid : list)
}
