import axios from 'axios';
import * as actions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {

    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { 
        url,
        method, 
        data, 
        content, 
        index, 
        onStart, 
        onSuccess, 
        onError 
    } = action.payload;

    if (onStart && content === 'comments') {
        dispatch({ type: onStart, payload: { index }})
    } 
    
    else if (onStart) dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: 'https://reddit.com',
            url,
            method,
            data

        });
        

        
        if (content === "posts") {
            const postsData = response.data.data.children.map((item) => item.data);
            //now we need to set each post up with a comments array and a loading bool.
            const postsWithComments = postsData.map((post) => ({
                ...post,
                comments: [],
                loadingComments: false,
                lastFetchComments: null,
                showingComments: false,
            }));
    
            dispatch(actions.apiCallSuccess(postsWithComments));
            
            if (onSuccess) dispatch({ type: onSuccess, payload: postsWithComments });
            

        }

        if (content === "subreddits") {
            const subredditsData = response.data.data.children.map((item) => item.data);

            dispatch(actions.apiCallSuccess(subredditsData));
    
            if (onSuccess) dispatch({ type: onSuccess, payload: subredditsData });

        }

        if (content === "comments") {
           
            const comments = response.data[1].data.children.map((item) => item.data);
            
            dispatch(actions.apiCallSuccess({ comments, index }));

            if (onSuccess) dispatch({ type: onSuccess, payload: { comments, index }})
        }


    } catch (error) {

        dispatch(actions.apiCallFailed(error.message));

        if (onError) {
            dispatch ({ type: onError, payload: error.message });
        }
    }
};

export default api;