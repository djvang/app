import React from 'react'
import { Navigation, Pagination } from '../components'
import { getData } from '../api'

import { Link } from 'react-router-dom'

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            pagination: {
                limit: 4,
                page: 1
            },
            total: 2

        }

        this.handleUsers = this.handleUsers.bind(this);
        
    }

    handleUsers(current) {
        getData('/users', {
            params: {
                _limit: this.state.pagination.limit,
                _page: current
            }
        })
        .then(data => {
            this.setState({
                users: data.json,
                total: data.headers.total,
                pagination: {...this.state.pagination, ...{ page: current }}
            })
        })
    }

    componentDidMount() {
        
        getData('/users', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.pagination.page
            }
        })
        .then(data => {
            this.setState({
                users: data.json,
                total: data.headers.total
            })
        })
    }

    render() {
        return <div>
            <Navigation></Navigation>
            <main className="uk-main">
                <div className="uk-section">
                <div className="uk-container">
                    <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m" data-uk-grid>
                        {this.state.users.map(user => (
                            <div key={user.id}>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-header">
                                        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                                            <div className="uk-width-auto">
                                                <img className="uk-border-circle" width="40" height="40" src="https://picsum.photos/400/400" alt="" />
                                            </div>
                                            <div className="uk-width-expand">
                                                <h3 className="uk-card-title uk-margin-remove-bottom">{user.name}</h3>
                                                {/* <p class="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="uk-card-body">
                                        <ul className="uk-list uk-list-divider">
                                            <li><b>Email</b>: {user.email}</li>
                                            <li><b>Phone</b>: {user.phone}</li>
                                            <li><b>Company</b>: {user.company.name}</li>
                                        </ul>
                                    </div>
                                    <div className="uk-card-footer">
                                        <Link to={`/users/${user.id}`} className="uk-button uk-button-text">Read more</Link>
                                    </div>
                                </div>
                            </div>
                        ) )}
                    </div>
                    <Pagination
                        pagination={{ 
                            page: this.state.pagination.page, 
                            limit: this.state.pagination.limit, 
                            total: this.state.total 
                        }}
                        onClickPagination={this.handleUsers}
                    ></Pagination>
                </div>
                </div>
            </main>
        </div>
    }
}