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
        // paddingTop: '56.25%',
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

const Vreddit = ( { post } ) => {

    //"https://v.redd.it/69cbkmyuru371/DASH_720.mp4?source=fallback" <--Format of secure_media.fallback_url
    //"https://v.redd.it/69cbkmyuru371"                              <--Format of url for v_reddit

    //This ternary catches the weird bug where the json media and secure_media are both null

    const source = post.secure_media !== null ? post.secure_media.reddit_video.fallback_url : post.url + '/DASH_720.mp4?source=fallback';
    

    const classes = useStyles();

    return (
        <Grid item sm={8} style={{ maxHeight: 512 }}>

            <PostTitle post={post} />

            <div className={classes.iframeContainer}>
                <CardMedia
                
                    component="iframe"
                    src={source}
                    title={post.title}
                    className={classes.iframeEmbed}
                    frameBorder="0"
                    
                />
            </div>
            
            <PostLinks post={post} />
            
        </Grid>
    );
}

export default Vreddit;