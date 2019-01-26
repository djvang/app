import React from 'react'

import { getPost, getComments, getUser } from '../api'
import { Navigation, Breadcrumb } from '../components'
import { Content, Comments, AddComment } from '../modules/post'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            post: null,
            comments: [],
            user: null
        }
    }
    
    componentDidMount() {
        
        // getData('/posts/1', {
        //     params: {
        //         _limit: 10,
        //         _page: 2
        //     },
        //     _expand: 'users'
        // }).then(response => {
        //     console.log('dsd',response)
        // }) 

        let id = this.props.match.params.id;
        
        getPost({ id })
        .then(post => {
            this.setState({
                post: post
            })
            
            return post
        })
        .then(post => {
            getComments({ postId: post.id })
            .then(comments => {
                this.setState({
                    comments: comments
                })
            })
            
            return post
        })
        .then(post => {
            getUser({ id: post.userId })
            .then(user => {
                this.setState({
                    user: user
                })
            })
            
           
        })
    }
    
    render() {
        console.log(this.props);
        
        return <div>
        <Navigation/>
        <main className="uk-main">
            <div className="uk-section">
                <div className="uk-container">
                    <Breadcrumb/>
                    {this.state.post && <Content post={this.state.post} />}
                    {this.state.comments.length > 0 && <Comments comments={this.state.comments}/>}
                    <AddComment/>
                </div>
            </div>
            </main>

    </div>
    }
}