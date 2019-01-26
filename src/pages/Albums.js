import React from 'react'
import { Navigation, Pagination } from '../components'

export default class extends React.Component {
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
                        <tr>
                            <td>
                            <span uk-icon="icon: album; ratio: 2" />
                            </td>
                            <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </td>
                            <td>
                            <a
                                href="/"
                                className="uk-button uk-button-primary js-lightbox"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Open album
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <span uk-icon="icon: album; ratio: 2" />
                            </td>
                            <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </td>
                            <td>
                            <a
                                href="/"
                                className="uk-button uk-button-primary js-lightbox"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Open album
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <span uk-icon="icon: album; ratio: 2" />
                            </td>
                            <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </td>
                            <td>
                            <a
                                href="/"
                                className="uk-button uk-button-primary js-lightbox"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Open album
                            </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <span uk-icon="icon: album; ratio: 2" />
                            </td>
                            <td>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                            </td>
                            <td>
                            <a
                                href="/"
                                className="uk-button uk-button-primary js-lightbox"
                                style={{ whiteSpace: "nowrap" }}
                            >
                                Open album
                            </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
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