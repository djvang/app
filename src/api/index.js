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
    let url = `${API + path}`;
    let params = "";

    if(options && options.hasOwnProperty('params')){
        for (let key in options.params) {
            if(options.params[key]) {
                if (params !== "") {
                    params += "&";
                }
                params += key + "=" + options.params[key];
            }

        }
        url += `${params ? '?' + params : ''}`;
    }

    return fetch(url)
        .then(response => {
            return response.json().then(json =>{
                return {
                    json: json,
                    headers: {
                        total: response.headers.get('x-total-count') ? +response.headers.get('x-total-count') : json.length
                    }
                }
            })
        } )
        .then(json => json);
}