import React from 'react';
import { Grid, CardMedia, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostLinks from '../PostLinks';
import PostTitle from '../PostTitle';
import img from './placeholderThumbnail.jpg'

const useStyles = makeStyles({
        
    innerContent: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    
    thumbnail: {
        
        margin: '1rem 0',
        height: 64,
        width: 64,
        
    }
});

const Gfycat = ( { post } ) => {
    const placeholder = img;
    const classes = useStyles();

    return (
        <Grid item sm={8}>

            <PostTitle post={post} />
            
            <div className={classes.innerContent}>
                <CardMedia
                    className={classes.thumbnail}
                    component={'img'}
                    title={post.title}
                    src={post.thumbnail !== "default" || !post.thumbnail ? post.thumbnail : placeholder}
                />

                <Link><Typography variant="body1">{post.domain}</Typography></Link>
            </div>

            <PostLinks post={post} />

        </Grid>
    );
}

export default Gfycat;