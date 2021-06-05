import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {

    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) {
        dispatch({ type: onStart})
    }

    next(action);

    try {
        const response = await axios.request({
            baseURL: 'https://reddit.com',
            url,
            method,
            data

        });
        const postData = response.data.data.children.map((post) => {return post.data})
        console.log(postData);

        dispatch(actions.apiCallSuccess(postData));

        if (onSuccess) {
            dispatch({ type: onSuccess, payload: postData });
        }

    } catch (error) {

        dispatch(actions.apiCallFailed(error.message));

        if (onError) {
            dispatch ({ type: onError, payload: error.message });
        }
    }
};

export default api;