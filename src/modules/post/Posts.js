import React from 'react'

import { Post } from './Post'
import { Pagination } from '../../components'

export function Posts(props) {
  
  return <main className="uk-main">
      <div className="uk-section">
        <div className="uk-container">
            <form className="uk-margin-bottom uk-flex uk-flex-right">
                <select name="order" className="uk-select uk-width-small" onChange={props.onClickOrder} value={props.order}>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                </select>
                <select name="limit" className="uk-select uk-width-small uk-margin-left" onChange={props.onClickLimit} value={props.pagination.limit}>
                    <option value="6">6</option>
                    <option value="12">12</option>
                    <option value="24">24</option>
                </select>
                <div className="uk-button-group uk-margin-left">
                    <button 
                    className={`uk-button uk-button-default ${props.view === 'grid' ? 'uk-active' : ''}`} 
                    onClick={(e) => props.onClickView(e, 'grid')}>
                        <span uk-icon="icon:  thumbnails"></span>
                    </button>
                    <button 
                    className={`uk-button uk-button-default ${props.view === 'list' ? 'uk-active' : ''}`}
                    onClick={(e) => props.onClickView(e, 'list')}>
                        <span uk-icon="icon:  image"></span>
                    </button>
                </div>
            </form>
            <div className={`uk-grid ${props.view === 'grid' ? 'uk-child-width-1-2@s uk-child-width-1-3@m' : 'uk-grid uk-child-width-1-2@s uk-child-width-1-2@m'}`}>
              {props.posts.map((post, index) => <div key={post.id}><Post view={props.view} data={post}/></div>)}
            </div>
            <Pagination 
                onClickPagination={props.onClickPagination} 
                pagination={{
                    limit: props.pagination.limit,
                    page: props.pagination.page,
                    total: props.total
                }}
            />
        </div>
      </div>
  </main>
}


