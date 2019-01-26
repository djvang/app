import React from 'react'
import { Navigation, Pagination } from '../components'

export default class extends React.Component {
    render() {
        return <div>
            <Navigation></Navigation>
            <main className="uk-main">
                <div className="uk-section">
                <div className="uk-container">
                    <div
                    className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"
                    data-uk-grid
                    >
                    <div>
                        <div className="uk-card uk-card-default">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img
                                className="uk-border-circle"
                                width={40}
                                height={40}
                                src="https://picsum.photos/400/400"
                                alt=""
                                />
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">
                                Leanne Graham
                                </h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                <time dateTime="2016-04-01T19:00">
                                    April 01, 2016
                                </time>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <ul className="uk-list uk-list-divider">
                            <li>
                                <b>Email</b>: Sincere@april.biz
                            </li>
                            <li>
                                <b>Phone</b>: 1-770-736-8031 x56442
                            </li>
                            <li>
                                <b>Company</b>: Romaguera-Crona
                            </li>
                            </ul>
                        </div>
                        <div className="uk-card-footer">
                            <a href="/" className="uk-button uk-button-text">
                            Read more
                            </a>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img
                                className="uk-border-circle"
                                width={40}
                                height={40}
                                src="https://picsum.photos/400/400"
                                alt=""
                                />
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">
                                Leanne Graham
                                </h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                <time dateTime="2016-04-01T19:00">
                                    April 01, 2016
                                </time>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <ul className="uk-list uk-list-divider">
                            <li>
                                <b>Email</b>: Sincere@april.biz
                            </li>
                            <li>
                                <b>Phone</b>: 1-770-736-8031 x56442
                            </li>
                            <li>
                                <b>Company</b>: Romaguera-Crona
                            </li>
                            </ul>
                        </div>
                        <div className="uk-card-footer">
                            <a href="/" className="uk-button uk-button-text">
                            Read more
                            </a>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img
                                className="uk-border-circle"
                                width={40}
                                height={40}
                                src="https://picsum.photos/400/400"
                                alt=""
                                />
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">
                                Leanne Graham
                                </h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                <time dateTime="2016-04-01T19:00">
                                    April 01, 2016
                                </time>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <ul className="uk-list uk-list-divider">
                            <li>
                                <b>Email</b>: Sincere@april.biz
                            </li>
                            <li>
                                <b>Phone</b>: 1-770-736-8031 x56442
                            </li>
                            <li>
                                <b>Company</b>: Romaguera-Crona
                            </li>
                            </ul>
                        </div>
                        <div className="uk-card-footer">
                            <a href="/" className="uk-button uk-button-text">
                            Read more
                            </a>
                        </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                            <div className="uk-width-auto">
                                <img
                                className="uk-border-circle"
                                width={40}
                                height={40}
                                src="https://picsum.photos/400/400"
                                alt=""
                                />
                            </div>
                            <div className="uk-width-expand">
                                <h3 className="uk-card-title uk-margin-remove-bottom">
                                Leanne Graham
                                </h3>
                                <p className="uk-text-meta uk-margin-remove-top">
                                <time dateTime="2016-04-01T19:00">
                                    April 01, 2016
                                </time>
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className="uk-card-body">
                            <ul className="uk-list uk-list-divider">
                            <li>
                                <b>Email</b>: Sincere@april.biz
                            </li>
                            <li>
                                <b>Phone</b>: 1-770-736-8031 x56442
                            </li>
                            <li>
                                <b>Company</b>: Romaguera-Crona
                            </li>
                            </ul>
                        </div>
                        <div className="uk-card-footer">
                            <a href="/" className="uk-button uk-button-text">
                            Read more
                            </a>
                        </div>
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