import React, { useEffect } from 'react';
//import './pages.css';

import { Container, Typography, Grid } from '@material-ui/core';
import { loadPosts, selectPostsList } from '../store/postsSlice';
import { useDispatch, useSelector } from 'react-redux';
import Post from '../features/Post';

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const Snips = () => {
    const dispatch = useDispatch();
    const postsList = useSelector(selectPostsList);
    
    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);
    

    return (
        <Container type="container" padding={3}>
            <Typography variant="h3" style={{ margin: '2rem 0', textAlign: 'center' }}>reddit snips.</Typography>
            <Grid container spacing={3} justify="center">
                {postsList.map((post, index) => <Post post={post} key={index} />)}

            </Grid>
        </Container>
        
    );
}

export default Snips;