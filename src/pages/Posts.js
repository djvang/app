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
      total: 0
    } 
    
    this.onClickPagination = this.onClickPagination.bind(this);
    this.onClickLimit = this.onClickLimit.bind(this);
    this.onClickOrder = this.onClickOrder.bind(this);
    
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
  
  render() {    
    return <div>
        <Navigation/>
        {this.state.posts.length ? 
        <Posts 
            onClickLimit={this.onClickLimit} 
            onClickOrder={this.onClickOrder} 
            onClickPagination={this.onClickPagination} 
            pagination={this.state.pagination}
            total={this.state.total}
            order={this.state.order} 
            posts={this.state.posts}
        /> : 'Loading'}
    </div>
  }
}