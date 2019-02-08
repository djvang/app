import React from 'react'

import { getData } from '../api'
import { Navigation } from '../components'
import { Posts } from '../modules/post'


export default class extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      posts: [],
      sort: 'id',
      order: 'asc', 
      pagination: {
        limit: 6,
        page: 1
      },
      view: 'grid', // or list
      total: 0
    } 
    
    this.onClickPagination = this.onClickPagination.bind(this);
    this.onClickLimit = this.onClickLimit.bind(this);
    this.onClickOrder = this.onClickOrder.bind(this);
    this.onClickView = this.onClickView.bind(this);
    
  }
  
  componentDidMount() {

    getData('/posts', {
        params: {
            _limit: this.state.pagination.limit,
            _page: this.state.pagination.page,
            _sort: this.state.sort,
            _order: this.state.order
        }
    })
    .then(data => {
        this.setState({
            posts: data.json,
            total: data.headers.total
        })
    })

  }
  
  onClickLimit(event) {
      
    let value = event.target.value;

    getData('/posts', {
        params: {
            _limit: value,
            _page: this.state.pagination.page,
            _sort: this.state.sort,
            _order: this.state.order
        }
    })
    .then(data => {
        this.setState({
            posts: data.json,
            pagination: {...this.state.pagination, ...{ limit: value }}
        })
    })

  }

  onClickOrder(event) {
      
    let value = event.target.value;

    getData('/posts', {
        params: {
            _limit: this.state.pagination.limit,
            _page: this.state.pagination.page,
            _sort: this.state.sort,
            _order: value
        }
    })
    .then(data => {
        this.setState({
            posts: data.json,
            order: value
        })
    })

  }
  
  onClickPagination(current) {

    getData('/posts', {
        params: {
            _limit: this.state.pagination.limit,
            _page: current,
            _sort: this.state.sort,
            _order: this.state.order
        }
    })
    .then(data => {
        this.setState({
            posts: data.json,
            pagination: {...this.state.pagination, ...{ page: current }}
        })
    })

    
  }

  onClickView(e, value) {
    e.preventDefault();

    this.setState({
      view: value
    })
  }
  
  render() {    
    return <div>
        <Navigation/>
        {this.state.posts.length ? 
        <Posts 
            onClickLimit={this.onClickLimit} 
            onClickOrder={this.onClickOrder} 
            onClickPagination={this.onClickPagination} 
            onClickView={this.onClickView} 
            pagination={this.state.pagination}
            total={this.state.total}
            order={this.state.order} 
            posts={this.state.posts}
            view={this.state.view}
        /> : 'Loading'}
    </div>
  }
}