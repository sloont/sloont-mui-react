import { combineReducers } from 'redux';
import postsReducer from './postsSlice';
import subredditsReducer from './subredditsSlice';


const entitiesReducer = combineReducers({
    posts: postsReducer,
    subreddits: subredditsReducer
});

export default entitiesReducer;