import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import parse from 'html-react-parser';
import { parsingFunction } from '../../../helpers/parser';

import PostLinks from '../PostLinks';
import PostTitle from '../PostTitle';


const useStyles = makeStyles({

    textContainer: {
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.20), ' +  
                    '0px 2px 2px 0px rgba(0, 0, 0, 0.14), ' + 
                    '0px 1px 5px 0px rgba(0, 0, 0, 0.12)', 
        border: 'none', 
        padding: '2rem', 
        background: 'rgba(255,255,255,0.04)', 
        borderRadius: 4,
        overflow: 'hidden',
        textAlign: 'justify',
        whiteSpace: 'pre-wrap',
        wordWrap: 'break-word',
        '& p': {
            '& a': {
                textDecoration: 'none',
                color: '#75cff8'
            }
        },
        '& h1': {
            '& strong': {
                '& a': {
                    // textDecoration: 'none',
                    color: '#75cff8'
                }
            }
        }
    },
}); 

const BasicLink = ( { post } ) => {
    
    const classes = useStyles();
    
    const htmlElements = parsingFunction(post.selftext);
    
    const decodedPost = htmlElements.replace(/_+/g, '_');
    const textPost = parse(decodedPost);

    return (
        <Grid item sm={8} >
            <PostTitle post={post} />
            
            
            <div className={classes.textContainer}>
            {textPost}
            </div>
           
            
            <PostLinks post={post} />
            
        </Grid>
    );
}

export default BasicLink;