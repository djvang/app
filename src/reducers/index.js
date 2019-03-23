import { combineReducers } from 'redux';
import { GET_ALBUMS, GET_USERS, GET_PHOTOS } from '../actions'


const albums = (state = [], action) => {
  switch(action.type) {
    case GET_ALBUMS: 
      return action.albums

    default:
     return state
  }
}


const users = (state = [], action) => {
  switch(action.type) {
    case GET_USERS: 
      return action.users

    default:
     return state
  }
}


const photos = (state = [], action) => {
  switch(action.type) {
    case GET_PHOTOS: 
      return action.photos

    default:
     return state
  }
}


const reducer = combineReducers({ albums, users, photos });



// const reducer = (state = {
//   albums: [],
//   users: [],
//   photos: []
// }, action) => {
//   switch(action.type) {
//     case GET_ALBUMS: 
//       return {
//         ...state,
//         albums: action.albums
//       }
//     case GET_USERS: 
//     return {
//       ...state,
//       users: action.users
//     }
//     case GET_PHOTOS: 
//     return {
//       ...state,
//       photos: action.photos
//     }

//     default:
//      return state
//   }
// }

export default reducer