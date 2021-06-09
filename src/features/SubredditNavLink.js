import React from 'react';
import img from '../features/mediaTypes/images/subredditThumbnail.png';
import { CardContent, Typography, Divider, } from '@material-ui/core';
import { FaReddit } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import { lightenColor } from '../helpers/manipulateColor';

const useStyles = makeStyles({
    individualSub: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

const SubredditNavLink = ({ subreddit, isLast }) => {
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

    const conditionalDivider = !isLast ? <Divider variant="middle"/> : <></>

    return (
        <div>
        <CardContent className={classes.individualSub}>
            {subIcon}
            <Typography variant="overline" color="textPrimary">
                {subreddit.display_name_prefixed}
            </Typography>
        </CardContent>
        {conditionalDivider}
        </div>
               
    );

};

export default SubredditNavLink;