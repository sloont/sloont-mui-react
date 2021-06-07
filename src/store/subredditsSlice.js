import { createSlice } from '@reduxjs/toolkit';

import { apiCallBegan } from './api';
import moment from 'moment';


//slice / reducers
const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        list: [],
        loading: false,
        lastFetch: null
    },
    reducers: {
        subredditsRequested: (subreddits) => {
            subreddits.loading = true;
        },

        subredditsReceived: (subreddits, action) => {
            subreddits.list = action.payload;
            subreddits.loading = false;
            subreddits.lastFetch = Date.now();
        },

        subredditRequestFailed: (subreddits) => {
            subreddits.loading = false;
        }
    }
});

const url = "/subreddits";

//action creators

export const loadSubreddits = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.subreddits;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

    if (diffInMinutes < 60) return;

    dispatch(
        apiCallBegan({
            url: url + '.json',
            onStart: subredditsRequested.type,
            onSuccess: subredditsReceived.type,
            onError: subredditRequestFailed.type,
        })
    );
};

export const { subredditsRequested, subredditsReceived, subredditRequestFailed } = subredditsSlice.actions;
export default subredditsSlice.reducer;

export const selectSubredditsList = (state) => state.entities.subreddits.list;