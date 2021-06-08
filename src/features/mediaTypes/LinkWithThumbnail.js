import React from 'react';
import { Grid, CardMedia, Typography, Link, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PostLinks from '../PostLinks';
import PostTitle from '../PostTitle';
import img from './images/placeholderThumbnail.jpg'
import { saturateColor } from '../../helpers/manipulateColor';

//We're going to use this as the third tier background color #56575e

const useStyles = makeStyles({
        
    innerContent: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        background: '#2c3236',
        boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
        marginBottom: '1rem',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    
    thumbnail: {
        
        margin: '1rem 0',
        height: 64,
        width: 64,
        borderRadius: 4
        
    }
});

const LinkWithThumbnail = ( { post } ) => {
    const placeholder = img;
    const classes = useStyles();

    const saturatedLink = saturateColor('#75cff8'); //leaving it at saturate(0.2) for now. any more and it looks green

    return (
        <Grid item sm={8}>

            <PostTitle post={post} />
            
            <Card className={classes.innerContent}>
                <CardMedia
                    className={classes.thumbnail}
                    component={'img'}
                    title={post.title}
                    src={post.thumbnail !== "default" || !post.thumbnail ? post.thumbnail : placeholder}
                />
                {/* Probably need some kind of "navigation from page check" */}
                <Link href={post.url}><Typography variant="body1" style={{ color: saturatedLink }}>{post.domain}</Typography></Link>
            </Card>

            <PostLinks post={post} />

        </Grid>
    );
}

export default LinkWithThumbnail;