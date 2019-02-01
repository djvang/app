import React from 'react'
import { Navigation, Pagination } from '../components'
import UIkit from 'uikit'
import { getData } from '../api'

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            pagination: {
                limit: 4,
                page: 1
            },
            total: 0
        }

        this.handleAlbums = this.handleAlbums.bind(this)

    }

    handleAlbums(current) {
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: current
            }
        })
        .then(data => {
            this.setState({
                albums: data.json,
                pagination: {...this.state.pagination, ...{ page: current }}
            })
        })
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
                // items: [
                //     {source: 'https://getuikit.com/assets/uikit/tests/images/size1.jpg', caption: 'Caption 1'},
                //     {source: 'https://getuikit.com/assets/uikit/tests/images/size2.jpg', caption: 'Caption 2'},
                // ]
    
                items: photos.map((photo, index) => {
                    return {
                        source: `${photo.url}.jpg`,
                        caption: `${index} - ${photo.title}`
                    }
                })
    
            }).show();

        })

        
    } 


    componentDidMount() {

        
        getData('/albums', {
            params: {
                _limit: this.state.pagination.limit,
                _page: this.state.pagination.page
            }
        })
        .then(data => {
            this.setState({
                albums: data.json,
                total: data.headers.total
            })
        })


        // let util = UIkit.util;

        // util.on('.js-lightbox', 'click', function (e) {
        //     e.preventDefault();

        //     UIkit.lightboxPanel({
        //         items: [
        //             {source: 'https://getuikit.com/assets/uikit/tests/images/size1.jpg', caption: 'Caption 1'},
        //             {source: 'https://getuikit.com/assets/uikit/tests/images/size2.jpg', caption: 'Caption 2'},
        //         ]
        //     }).show();
        // });
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
                        <table className="uk-table uk-table-justify uk-table-divider">
                            <tbody>
                                {this.state.albums.map(album => {
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
                        </table>
                        <Pagination
                            pagination={{ 
                                page: this.state.pagination.page, 
                                limit: this.state.pagination.limit, 
                                total: this.state.total 
                            }}
                            onClickPagination={this.handleAlbums}
                        ></Pagination>
                    </div>
                </div>
            </main>
        </div>
    }
}