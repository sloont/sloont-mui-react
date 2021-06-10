import * as actions from '../api';

const api = ({ dispatch }) => (next) => async (action) => {

    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { 
        url,
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

        const response = await fetch(`https://vast-reaches-35684.herokuapp.com/https://reddit.com${url}`, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        });
        const json = await response.json();
        
        if (content === "posts") {
            const postsData = json.data.children.map((item) => item.data);
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
            const subredditsData = json.data.children.map((item) => item.data);

            dispatch(actions.apiCallSuccess(subredditsData));
    
            if (onSuccess) dispatch({ type: onSuccess, payload: subredditsData });

        }

        if (content === "comments") {
           console.log(json)
            const comments = json[1].data.children.map((item) => item.data);
            
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