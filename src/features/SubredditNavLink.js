import React from 'react';
import img from '../features/mediaTypes/subredditThumbnail.png';
import { CardContent, Typography } from '@material-ui/core';
import { FaReddit } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import { lightenColor } from '../manipulateColor';

const useStyles = makeStyles({
    individualSub: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

const SubredditNavLink = ({ subreddit }) => {
    const classes = useStyles();
    const subThemeColor = subreddit.primary_color ? lightenColor(subreddit.primary_color) : "#ff905b";
    let subIcon;

    if (subreddit.icon_img) {
        subIcon = (
            <img 
                src={subreddit.icon_img} 
                alt={subreddit.title}
                height='32px'
                width='32px'
                style={{ borderRadius: '50%' }}
            />
        );
    } else {
        subIcon = (
            <FaReddit 
                fill={subThemeColor} 
                fontSize='2rem' //controls the size not height/width (32px);
            />
        )
    }

    return (

        <CardContent className={classes.individualSub}>
            {subIcon}
            <Typography variant="button" color="primary">
                {subreddit.display_name_prefixed}
            </Typography>
        </CardContent>
               
    );

};

export default SubredditNavLink;