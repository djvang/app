import React from 'react'
import { Navigation, Pagination, Spinner } from '../components'
import UIkit from 'uikit'
import { getData } from '../api'


// console.log(store.getState());

class Albums extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // albums: [],
            // pagination: {
            //     limit: 6,
            //     page: 1
            // },
            // total: 100,
            // userId: '',
            // users: [],
            // q: ''
        }

        this.handlerSearch = this.handlerSearch.bind(this)
        this.handleAlbums = this.handleAlbums.bind(this)
        this.handleUser = this.handleUser.bind(this)

    }

    handleAlbums(current) {

        this.props.getAlbums({
            params: {
                _limit: this.props.albums.limit,
                _page: current,
                userId: this.props.albums.userId,
                q: this.props.albums.q
            }
        })

        // getData('/albums', {
        //     params: {
        //         _limit: this.state.pagination.limit,
        //         _page: current,
        //         userId: this.state.userId
        //     }
        // })
        // .then(data => {
        //     this.setState({
        //         albums: data.json,
        //         total: data.headers.total,
        //         pagination: {...this.state.pagination, ...{ page: current }}
        //     })
    
        // })
    }

    handlePhotos(e, albumId) {
        e.preventDefault();

        getData('/photos', {
            params: {
                albumId: albumId
            }
        })
        .then(data => {
            const photos = data.json

            UIkit.lightboxPanel({

                items: photos.map((photo, index) => {
                    return {
                        source: `${photo.url}.jpg`,
                        caption: `${index} - ${photo.title}`
                    }
                })
    
            }).show();

        })

        
    } 

    handleUser(e) {
        let userId = e.target.value;


        this.props.getAlbums({
            params: {
                _limit: this.props.albums.limit,
                _page: 1,
                q: this.props.albums.q,
                userId
            }
        })

        // getData('/albums', {
        //     params: {
        //         _limit: this.state.pagination.limit,
        //         _page: 1,
        //         userId: userId,
        //         q: this.state.q
        //     }
        // })
        // .then(data => {
        //     this.setState({
        //         albums: data.json,
        //         total: data.headers.total,
        //         pagination: {...this.state.pagination, ...{ page: 1 }},
        //         userId: userId
        //     })
        // })

    }

    handlerSearch(e) {
        let q = e.target.value;

        this.props.getAlbums({
            params: {
                _limit: this.props.albums.limit,
                _page: 1,
                q,
                userId: this.props.albums.userId
            }
        })

        // getData('/albums', {
        //     params: {
        //         _limit: this.state.pagination.limit,
        //         _page: 1,
        //         userId: this.state.userId,
        //         q: q
        //     }
        // })
        // .then(data => {
        //     this.setState({
        //         albums: data.json,
        //         total: data.headers.total,
        //         pagination: {...this.state.pagination, ...{ page: 1 }},
        //         q: q
        //     })
        // })
    }

    componentDidMount() {

        this.props.getAlbums({
            params: {
                _limit: this.props.albums.limit,
                _page: 1
            }
        })

        this.props.getUsers()


        // this.props.dispatch(getAlbums({
        //     params: {
        //         _limit: this.state.pagination.limit,
        //         _page: this.state.pagination.page,
        //         // userId: this.state.userId,
        //         // q: this.state.q
        //     }
        // }))

        
        // getData('/albums', {
        //     params: {
        //         _limit: this.state.pagination.limit,
        //         _page: this.state.pagination.page,
        //         userId: this.state.userId,
        //         q: this.state.q
        //     }
        // })
        // .then(data => {
        //     // this.setState({
        //     //     albums: data.json,
        //     //     total: data.headers.total
        //     // })

        //     this.props.dispatch(getAlbums(data.json));
        //     // console.log(store.getState());
        // })

        // getData('/users')
        // .then(data => {
        //     // this.setState({
        //     //     users: data.json
        //     // })
        // })


        // this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }


    // componentWillUnmount() {
    //     if(this.unsubscribe) this.unsubscribe()
    // }

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
                                value={this.props.albums.q}
                                onChange={this.handlerSearch}
                                placeholder="Search..."
                            />
                            </form>
                            <select className="uk-select uk-width-small uk-margin-left" value={this.props.albums.userId} onChange={this.handleUser} disabled={this.props.users.data.length > 0 ? false : true}>
                            <option value="">All</option>
                            {this.props.users.data.map(user => {
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
                        {this.props.albums.isFetching ? <Spinner /> : this.props.albums.data.length > 0 ? <React.Fragment>
                            <table className="uk-table uk-table-justify uk-table-divider">
                            <tbody>
                                {this.props.albums.data.map(album => {
                                    return (
                                        <tr key={album.id}>
                                            <td>
                                            <span uk-icon="icon: album; ratio: 2" />
                                            </td>
                                            <td width="100%">{album.title}</td>
                                            <td>
                                            <a
                                                href="/"
                                                className="uk-button uk-button-primary js-lightbox"
                                                style={{ whiteSpace: "nowrap" }}
                                                onClick={(e) => this.handlePhotos(e, album.id)}
                                            >
                                                Open album
                                            </a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            {/* TODO как быть здесь при загрузке? */}
                        </table> 
                        <Pagination
                            pagination={{ 
                                page: this.props.albums.page, 
                                limit: this.props.albums.limit, 
                                total: this.props.albums.total 
                            }}
                            onClickPagination={this.handleAlbums}
                        ></Pagination>
                        </React.Fragment> : <div className="uk-h2">Not Fount: {this.state.q}</div>}
                        
                    </div>
                </div>
            </main>
        </div>
    }
}

export default Albums