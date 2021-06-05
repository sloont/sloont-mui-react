import React, { useEffect } from 'react';
//import './pages.css';

import { Container, Typography, Grid, Paper, Card, CardHeader, CardContent } from '@material-ui/core';
import { loadPosts, selectPostsList } from '../store/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

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
            <Typography variant="h3" >reddit snips.</Typography>
            <Grid container spacing={3}>
                {postsList.map((post) => (
                        <Card>
                            <CardContent>{post.title}</CardContent>
                        </Card>
                ))}
                    
                
                <Paper item/>

            </Grid>
        </Container>
        
    );
}

export default Snips;