import React from 'react'

import { getPosts } from '../api'
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
        page: 1,
        total: 100
      }
    } 
    
    this.onClickPagination = this.onClickPagination.bind(this);
    this.onClickLimit = this.onClickLimit.bind(this);
    this.onClickOrder = this.onClickOrder.bind(this);
    
  }
  
  componentDidMount() {
    getPosts({
        limit: this.state.pagination.limit,
        page: this.state.pagination.page,
        sort: this.state.sort,
        order: this.state.order
    })
    .then(posts => {
        this.setState({
            posts: posts
        })
    })
  }
  
  onClickLimit(event) {
      
    let value = event.target.value;


    getPosts({
        limit: value,
        page: 1
    })
    .then(posts => {
        this.setState({
            pagination: {
                limit: value,
                page: 1,
                total: this.state.total
            },
            posts: posts
        })
    })
  }

  onClickOrder(event) {
      
    let value = event.target.value;

    console.log(value);

    getPosts({
        sort: this.state.sort,
        order: value,
        limit: this.state.pagination.limit,
        page: 1
    })
    .then(posts => {
        this.setState({
            sort: this.state.sort,
            order: value,
            pagination: {
                limit: this.state.pagination.limit,
                page: 1,
                total: this.state.total
            },
            posts: posts
        })
    })
  }
  
  onClickPagination(current) {

    getPosts({
        limit: this.state.pagination.limit,
        sort: this.state.sort,
        order: this.state.order,
        page: current
    })
    .then(posts => {
        this.setState({
            pagination: {
                limit: this.state.pagination.limit,
                page: current,
                total: this.state.total
            },
            posts: posts
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
            order={this.state.order} 
            posts={this.state.posts}
        /> : 'Loading'}
    </div>
  }
}