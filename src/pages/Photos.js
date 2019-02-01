import React from 'react'
import { getData } from '../api'
import { Navigation } from '../components'

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            pagination: {
                limit: 6,
                page: 1
            }
        }
    }

    componentDidMount() {
        getData('/photos', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.pagination.page
            }
        }).then(data => {
            console.log(data);
        })
    }

    render() {
        return <div>
            <Navigation></Navigation>
            <main className="uk-main">
                <div className="uk-section">
                    <div className="uk-container">
                    <div className="uk-margin-medium-bottom uk-flex">
                        <form className="uk-width-medium uk-margin-auto-right">
                        <input
                            className="uk-input"
                            type="search"
                            placeholder="Search..."
                        />
                        </form>
                        <select className="uk-select uk-width-small uk-margin-left">
                        <option value="all">All</option>
                        <option value={1}>Album 1</option>
                        <option value={2}>Album 2</option>
                        <option value={3}>Album 3</option>
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
                        className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"
                        data-uk-grid="masonry: true"
                    >
                        <div>
                        <div className="uk-inline uk-width-1-1">
                            <img
                            src="https://picsum.photos/600/400"
                            className="uk-width-1-1"
                            alt=""
                            />
                            <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                            <p>
                                Default Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="uk-inline uk-width-1-1">
                            <img
                            src="https://picsum.photos/600/300"
                            className="uk-width-1-1"
                            alt=""
                            />
                            <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                            <p>
                                Default Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="uk-inline uk-width-1-1">
                            <img
                            src="https://picsum.photos/400/400"
                            className="uk-width-1-1"
                            alt=""
                            />
                            <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                            <p>
                                Default Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="uk-inline uk-width-1-1">
                            <img
                            src="https://picsum.photos/300/200"
                            className="uk-width-1-1"
                            alt=""
                            />
                            <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                            <p>
                                Default Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="uk-inline uk-width-1-1">
                            <img
                            src="https://picsum.photos/300/500"
                            className="uk-width-1-1"
                            alt=""
                            />
                            <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                            <p>
                                Default Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                        <div>
                        <div className="uk-inline uk-width-1-1">
                            <img
                            src="https://picsum.photos/500/600"
                            className="uk-width-1-1"
                            alt=""
                            />
                            <div className="uk-overlay uk-overlay-primary uk-position-bottom">
                            <p>
                                Default Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <ul className="uk-more uk-text-center uk-margin-medium-top">
                        <button className="uk-button uk-button-primary">
                        Load more
                        {/* <div uk-spinner></div> */}
                        </button>
                    </ul>
                    </div>
                </div>
                </main>
        </div>
    }
}