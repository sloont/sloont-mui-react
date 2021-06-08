import React from 'react';
import { Grid } from '@material-ui/core';

import parse from 'html-react-parser';
import { parsingFunction } from '../../helpers/parser';

import PostLinks from '../PostLinks';
import PostTitle from '../PostTitle';

//THIS IS ACTUALLY FOR TEXT POSTS //SHOULD RENAME

const BasicLink = ( { post } ) => {
    
    
    const htmlElements = parsingFunction(post.selftext);
    const textPost = parse(htmlElements);

    return (
        <Grid item sm={8} style={{ overflow: 'hidden', textAlign: 'justify' }}>
            <PostTitle post={post} />
            
            
            
            {textPost}
            
           
            
            <PostLinks post={post} />
            
        </Grid>
    );
}

export default BasicLink;