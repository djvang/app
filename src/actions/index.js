export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_USERS = 'GET_USERS';
export const GET_PHOTOS = 'GET_PHOTOS';


export const getAlbums = (body) => ({
  type: GET_ALBUMS,
  request: {
      method: 'get',
      url: '/albums',
      body: body
  }
})

export const getUsers = (body) => ({
  type: GET_USERS,
  request: {
      method: 'get',
      url: '/users',
      body: body
  }
})

export const getPhotos = (photos) => ({
  type: GET_PHOTOS,
  photos: photos
})