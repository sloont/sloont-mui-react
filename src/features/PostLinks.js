import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    linkBar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}); 

const PostLinks = ({ post }) => {

    const classes = useStyles();

    return (
        <CardContent className={classes.linkBar}>
            <Typography variant="overline">{post.author}</Typography>
            <Typography variant="button" align="right" color="primary">{post.subreddit_name_prefixed}</Typography>
        </CardContent>
    );
}

export default PostLinks;