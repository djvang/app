import React from 'react'
import { getData } from '../api'
import { Navigation } from '../components'

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: [],
            preFetch: [],
            pagination: {
                limit: 6,
                page: 1
            },
            load: 3,
            total: 0
        }

        this.handleLoadMore = this.handleLoadMore.bind(this)
    }

    componentDidMount() {
        getData('/photos', {
            params: {
                _limit: this.state.pagination.limit + this.state.load,
                _page: this.state.pagination.page
            }
        }).then(data => {
            this.setState({
                photos: data.json.slice(0, this.state.pagination.limit),
                preFetch: data.json.slice(this.state.pagination.limit),
                total: data.headers.total
            })
        })   
    }

    handleLoadMore(e) {
        e.preventDefault();

        let page = this.state.pagination.page + 1;
        let start = (page * this.state.load) + this.state.load;

        getData('/photos', {
            params: {
                _start: start,
                _end: start + this.state.load
            }
        }).then(data => {
            this.setState({
                photos: [...this.state.photos, ...this.state.preFetch],
                preFetch: data.json,
                pagination: {...this.state.pagination, page: page}
            })
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
                    </div>
                    <div
                        className="uk-grid uk-child-width-1-2@s uk-child-width-1-2@m"
                        data-uk-grid="masonry: true">

                        {this.state.photos.map(photo => (<div key={photo.id}>
                            <div className="uk-inline uk-width-1-1">
                                <img src={photo.url} className="uk-width-1-1" alt=""/>
                                <div className="uk-overlay uk-overlay-primary uk-position-bottom"><p>{photo.id}: {photo.title}</p></div>
                            </div>
                        </div>))}
                        
                    </div>
                    <ul className="uk-more uk-text-center uk-margin-medium-top">
                        <button className="uk-button uk-button-primary" onClick={this.handleLoadMore}>
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