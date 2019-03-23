export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_USERS = 'GET_USERS';
export const GET_PHOTOS = 'GET_PHOTOS';

export const getAlbums = (albums) => ({
  type: GET_ALBUMS,
  albums: albums
})

export const getUsers = (users) => ({
  type: GET_USERS,
  users: users
})

export const getPhotos = (photos) => ({
  type: GET_PHOTOS,
  photos: photos
})