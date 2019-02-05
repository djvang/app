import React from 'react'
import { Navigation, Pagination } from '../components'
import { getData } from '../api'

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            pagination: {
                limit: 12,
                page: 1
            },
            total: 0,
            userId: '',
            users: []
        }


        this.handleTodos = this.handleTodos.bind(this)
        this.handleUser = this.handleUser.bind(this)

    }

    handleTodos(current) {
        getData('/todos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: current,
                userId: this.state.userId
            }
        })
        .then(data => {
            this.setState({
                todos: data.json,
                total: data.headers.total,
                pagination: {...this.state.pagination, ...{ page: current }}
            })
        })
    }

    handleUser(e) {
        let userId = e.target.value;

        getData('/todos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: 1,
                userId: userId
            }
        })
        .then(data => {
            this.setState({
                todos: data.json,
                total: data.headers.total,
                pagination: {...this.state.pagination, ...{ page: 1 }},
                userId: userId
            })
        })

    }

    componentDidMount() {
        
        getData('/todos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.pagination.page,
                userId: this.state.userId
            }
        })
        .then(data => {
            this.setState({
                todos: data.json,
                total: data.headers.total
            })
        })

        getData('/users')
        .then(data => {
            this.setState({
                users: data.json
            })
        })
    }

    render() {
        return <div>
            <Navigation></Navigation>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                    <div className="uk-margin-medium-bottom uk-flex uk-flex-middle">
                    
                        <div className="uk-margin-auto-right">
                            <Pagination
                                pagination={{ 
                                    page: this.state.pagination.page, 
                                    limit: this.state.pagination.limit, 
                                    total: this.state.total 
                                }}
                                isCurrent={true}
                                onClickPagination={this.handleTodos}
                            ></Pagination>
                        </div>

                        <select className="uk-select uk-width-small uk-margin-left" value={this.state.userId} onChange={this.handleUser} disabled={this.state.users.length > 0 ? false : true}>
                            <option value="">All</option>
                            {this.state.users.map(user => {
                                return <option key={user.id} value={user.id}>{user.name}</option>
                            })}
                        </select>
                        {/* <div class="uk-button-group uk-margin-left">
                                    <button class="uk-button uk-button-default uk-active">
                                        <span uk-icon="icon:  thumbnails"></span>
                                    </button>
                                    <button class="uk-button uk-button-default">
                                        <span uk-icon="icon:  image"></span>
                                    </button>
                                </div> */}
                    </div>
                    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match" data-uk-grid>
                        {this.state.todos.map(todo => (
                            <div key={todo.id}>
                                <div className="uk-card uk-card-default uk-card-body">
                                    {todo.completed ? <div className="uk-label">Completed</div> : <div className="uk-label uk-label-danger">Actived</div>}
                                    <h3 className="uk-card-title uk-margin-small">{todo.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        pagination={{ 
                            page: this.state.pagination.page, 
                            limit: this.state.pagination.limit, 
                            total: this.state.total 
                        }}
                        onClickPagination={this.handleTodos}
                    ></Pagination>
                    </div>
                </div>
                </main>

        </div>
    }
}