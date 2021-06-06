import React from 'react';
import { CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

    linkBar: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },
    // newLine: {
    //     whiteSpace: 'pre-line'
    // }
}); 

const PostLinks = ({ post }) => {

    const classes = useStyles();

    return (
        <CardContent className={classes.linkBar}>
            <Typography variant="button" display="block">{"U/" + post.author}</Typography>
            {/* <div className={classes.newLine}/> */}
            <Typography variant="button" color="primary" display="block">{post.subreddit_name_prefixed}</Typography>
        </CardContent>
    );
}

export default PostLinks;