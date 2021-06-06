import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './api';
import moment from 'moment';


//slice / reducers
const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
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
        }
    }
});

const url = "/r/all";
//action creators

export const loadPosts = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.posts; 

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

    if (diffInMinutes < 10) return;

    dispatch(
        apiCallBegan({
            url: url + '.json',
            onStart: postsRequested.type,
            onSuccess: postsReceived.type,
            onError: postsRequestFailed.type
        })
    );
};

export const { postsRequested, postsReceived, postsRequestFailed } = postsSlice.actions;
export default postsSlice.reducer;


//posts selector
//should return state.entities.posts.list

export const selectPostsList = (state) => state.entities.posts.list;


