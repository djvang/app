import React from 'react'
import { Navigation, Pagination } from '../components'

export default class extends React.Component {
    render() {
        return <div>
            <Navigation></Navigation>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                    <div className="uk-margin-medium-bottom uk-flex uk-flex-middle">
                        <ul
                        className="uk-pagination uk-flex-center uk-margin-auto-right"
                        data-uk-margin
                        >
                        <li>
                            <a href="/">
                            <span data-uk-pagination-previous />
                            </a>
                        </li>
                        <li className="uk-disabled">
                            <span>1</span>
                        </li>
                        <li>
                            <a href="/">
                            <span data-uk-pagination-next />
                            </a>
                        </li>
                        </ul>
                        <select className="uk-select uk-width-small uk-margin-left">
                        <option value="all">All</option>
                        <option value={1}>User 1</option>
                        <option value={2}>User 2</option>
                        <option value={3}>User 3</option>
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
                    <div
                        className="uk-grid uk-child-width-1-2@s uk-child-width-1-4@m uk-grid-match"
                        data-uk-grid
                    >
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label">Completed</div>
                            <h3 className="uk-card-title uk-margin-small">
                            delectus aut autem
                            </h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label">Completed</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label">Completed</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                        <div>
                        <div className="uk-card uk-card-default uk-card-body">
                            <div className="uk-label uk-label-danger">Actived</div>
                            <h3 className="uk-card-title uk-margin-small">Title</h3>
                        </div>
                        </div>
                    </div>
                    <Pagination
                        pages={10}
                        pagination={{ page: 1, limit: 10, total: 100 }}
                    ></Pagination>
                    </div>
                </div>
                </main>

        </div>
    }
}