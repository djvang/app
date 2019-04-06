import { connect } from 'react-redux'
import { getAlbums, getUsers } from '../actions';
import AlbumPage from '../pages/Albums';


const mapStateToProps = (state /*, ownProps*/) => {
  return {
      albums: {
          isFetching: state.albums.isFetching,
          limit: state.albums.limit,
          page: state.albums.page,
          total: state.albums.total,
          q: state.albums.q,
          userId: state.albums.userId,
          data: state.albums.data
      },
      users: {
        data: state.users.data
      }
  }
}

const mapDispatchToProps = dispatch => ({
  getAlbums: (body) => dispatch(getAlbums(body)),
  getUsers: (body) => dispatch(getUsers(body)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage)