import axios from 'axios';
import { get } from 'lodash';

const apiMiddleware = apiUrl => store => next => action => {
    if (!action.request) {
        return next(action);
    }

    let REQUEST, SUCCESS, FAILURE;

    if (action.types) {
        [REQUEST, SUCCESS, FAILURE] = action.types;
    } else {
        REQUEST = `${action.type}_REQUEST`;
        SUCCESS = action.type;
        FAILURE = `${action.type}_FAILURE`;
    }

    next({ 
        type: REQUEST,
        payload: {
            isFetching: true
        }
    });

    return axios[action.request.method](`${apiUrl}${action.request.url}`, action.request.body)
        .then((res) => next({
            type: SUCCESS,
            payload: {
                isFetching: false,
                limit: get(action.request, 'body.params._limit', store.getState().albums.limit),
                page: get(action.request, 'body.params._page', store.getState().albums.page),
                total: get(res.headers, 'x-total-count', 0),
                q: get(action.request, 'body.params.q', store.getState().albums.q),
                userId: get(action.request, 'body.params.userId', store.getState().albums.userId),
                data: res.data
            }
        }))
        .catch(error => next({
            type: FAILURE,
            isFetching: false,
            error: error.message
        }));
};

export default apiMiddleware;
