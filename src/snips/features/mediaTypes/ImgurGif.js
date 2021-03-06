import React from 'react';
import { Grid, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostLinks from '../PostLinks';
import PostTitle from '../PostTitle';

const useStyles = makeStyles({
        
    iframeContainer: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        paddingTop: '56.25%',
        boxShadow: '0 3px 5px 2px rgba(0,0,0,0.3)',
        marginBottom: '1rem',
        borderRadius: 4
    },
    
    iframeEmbed: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        
        
    }
});

const ImgurGif = ( { post } ) => {

    const source = post.url.slice(0, 27) + '.mp4';

    const classes = useStyles();

    return (
        <Grid item sm={8}>

            <PostTitle post={post} />

            <div className={classes.iframeContainer}>
                <CardMedia
                
                    component="video"
                    src={source}
                    title={post.title}
                    className={classes.iframeEmbed}
                    frameBorder="0"
                    loop
                    autoPlay
                    preload='auto'
                    type='video/mp4'
                    controls
                    muted
                    style={{ background: '#000'}}
                />
            </div>
            
            <PostLinks post={post} />
            
        </Grid>
    );
}

export default ImgurGif;