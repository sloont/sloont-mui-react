import { combineReducers } from 'redux';
import postsReducer from './postsSlice';


const entitiesReducer = combineReducers({
    posts: postsReducer
});

export default entitiesReducer;