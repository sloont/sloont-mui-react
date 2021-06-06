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
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        marginBottom: '1rem'
    },
    
    iframeEmbed: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        
        
    }
});

const Gfycat = ( { post } ) => {

    const source = post.url.slice(0, 19) + "ifr/" + post.url.slice(19);

    const classes = useStyles();

    return (
        <Grid item sm={10}>

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

export default Gfycat;