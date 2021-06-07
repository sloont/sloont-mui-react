import React, { useState } from 'react';
import {Grid, makeStyles, Typography, IconButton } from '@material-ui/core';
import { BiUpvote, BiDownvote } from 'react-icons/bi';

const useStyles = makeStyles({

    votingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Voting = ({ post }) => {
    const defaultColor = "#ffffff";
    const blueColor = "#75cff8";
    const orangeColor = "#ff905b";

    const [upvoteColor, setUpvoteColor] = useState(defaultColor);
    const [downvoteColor, setDownvoteColor] = useState(defaultColor);
    const classes = useStyles();


    const onUpvote = () => {
        //Need Account before we can do number change
        setUpvoteColor(blueColor);
        setDownvoteColor(defaultColor);
    };

    const onDownvote = () => {
        //Need Account before we can do number change
        setUpvoteColor(defaultColor);
        setDownvoteColor(orangeColor);
    };

    return(
        <Grid item sm={2} className={classes.votingContainer}>
            <div ><IconButton onClick={onUpvote} ><BiUpvote fill={upvoteColor} /></IconButton></div>
            <Typography variant="button">{post.ups}</Typography>
            <div ><IconButton onClick={() => onDownvote()} ><BiDownvote fill={downvoteColor} /></IconButton></div>
        </Grid>
    );
}

export default Voting;