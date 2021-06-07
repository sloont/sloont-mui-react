import React, { useEffect } from 'react';
//import './pages.css';

import { Grid } from '@material-ui/core';
import { loadPosts, selectPostsList } from '../store/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../features/Post';

const AppContent = () => {
    const dispatch = useDispatch();
    const postsList = useSelector(selectPostsList);
    
    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);
    
    //////////////////////////////////////////////////////////////////////////////////
    //THIS IS WHERE WE QUERY THE POSTS////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////

    return (
        
            <Grid container item sm={8} justify="center" spacing={3}>
                {postsList.map((post, index) => <Post post={post} key={index} />)}
            </Grid>
    );
}

export default AppContent;