import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    linkBar: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
}); 

const PostLinks = ({ post }) => {

    const classes = useStyles();

    return (
        <CardContent className={classes.linkBar}>
            <Typography variant="overline" display="block">{"U/" + post.author}</Typography>
            
            <Typography variant="overline" color="textPrimary" display="block">{post.subreddit_name_prefixed}</Typography>
        </CardContent>
    );
}

export default PostLinks;

//#232a2e