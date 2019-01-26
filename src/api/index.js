export function getPosts(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}&_sort=${params.sort}&_order=${params.order}`)
    .then(response => response.json())
    .then(json => json)
}

export function getPost(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(response => response.json())
    .then(json => json)
}

export function getComments(params) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`)
    .then(response => response.json())
    .then(json => json)
}

export function getUser(params) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(response => response.json())
    .then(json => json)
}

const API = 'https://jsonplaceholder.typicode.com'

export function getData(path, options) {
    
    // path, params, embed, expand
    
    let url = `${API}${path}`;
    let params = "";
    
    if(options && options.hasOwnProperty('params'))
    for (let key in options.params) {
        if (params !== "") {
            params += "&";
        }
        params += key + "=" + options.params[key];
    }
    
    url += `${params ? '?' + params : ''}`;
    
    
    return fetch(url)
    .then(response => response.json())
    .then(json => {
        return {
            data: json
        }
    })
    .then(response => {
        if(options && path && options.hasOwnProperty('_embed')) {
            return fetch(API + '/' + options._embed)
            .then(response => response.json())
            .then(json => {
                response.data[options._embed] = json
                return response
            })
        } else {
            return response
        }
    })
    .then(response => {
        if(options && path && options.hasOwnProperty('_expand')) {
            return fetch(API + '/' + options._expand)
            .then(response => response.json())
            .then(json => {
                response.data[options._expand] = json
                return response
            })
        } else {
            return response
        }
    })
    
    
    
    // getPost({ id: this.state.id })
    // .then(post => {
    //     this.setState({
    //         post: post
    //     })
        
    //     return post
    // })
    // .then(post => {
    //     getComments({ postId: post.id })
    //     .then(comments => {
    //         this.setState({
    //             comments: comments
    //         })
    //     })
        
    //     return post
    // })
    // .then(post => {
    //     getUser({ id: post.userId })
    //     .then(user => {
    //         this.setState({
    //             user: user
    //         })
    //     })
    // })
}