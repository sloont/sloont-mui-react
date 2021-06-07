import React from 'react';
import { Grid, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostLinks from '../PostLinks';
import PostTitle from '../PostTitle';


const useStyles = makeStyles({
        
    imageContainer: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        marginBottom: '1rem',
        
    },
    
    imageEmbed: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        
    },

});

const BasicImage = ( { post } ) => {
    
    const classes = useStyles();

    return (
        <Grid item sm={8}>

            <PostTitle post={post} />
            
            <div className={classes.imageContainer}>
                <CardMedia
                    
                    component="img"
                    src={post.url}
                    title={post.title}
                    
                />
            </div>
            
            <PostLinks post={post} />
            
        </Grid>
    );
}

export default BasicImage;