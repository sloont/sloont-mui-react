import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './api';
import moment from 'moment';



//slice / reducers
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null,
        
    },
    reducers: {
        postsRequested: (posts) => {
            posts.loading = true;
        },

        postsReceived: (posts, action) => {
            posts.list = action.payload;
            posts.loading = false;
            posts.lastFetch = Date.now();
        },

        postsRequestFailed: (posts) => {
            posts.loading = false;
        },

        commentsRequested: (posts, action) => {
            posts.list[action.payload.index].loadingComments = true;
        },

        commentsReceived: (posts, action) => {
            posts.list[action.payload.index].comments = action.payload.comments;
            posts.list[action.payload.index].loadingComments = false;
            posts.list[action.payload.index].lastFetchComments = Date.now();
        },

        commentsRequestFailed: (posts, action) => {
            posts.list[action.payload.index].loadingComments = false;
            
        }
    }
});

//thunk action creators

export const loadPosts = (url = '/r/all') => (dispatch, getState) => {
    const { lastFetch } = getState().entities.posts; 

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

    if (diffInMinutes < 10) {
        console.log("Using cached data");
        return;
    };

    dispatch(
        apiCallBegan({
            url: url + '.json',
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type,
            content: 'posts',
        })
    );
};

export const loadComments = (index, permalink) => (dispatch, getState) => {
    const post = getState().entities.posts.list[index];

    const { lastFetchComments } = post;

    const diffInMinutes = moment().diff(moment(lastFetchComments), 'minutes;');

    if (diffInMinutes < 2 ) {
        console.log("Using cached data");
        return;
    };

    dispatch(
        apiCallBegan({
            url: permalink + '.json',
            onStart: commentsRequested.type,
            onSuccess: commentsReceived.type,
            onError: commentsRequestFailed.type,
            content: 'comments',
            index

        })
    );
};

export const { 
    postsRequested, 
    postsReceived, 
    postsRequestFailed,
    commentsRequested,
    commentsReceived,
    commentsRequestFailed 
} = postsSlice.actions;

export default postsSlice.reducer;


//posts selector
//should return state.entities.posts.list

export const selectPostsList = (state) => state.entities.posts.list;

