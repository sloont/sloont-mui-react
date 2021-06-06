import React from 'react';
import { Grid } from '@material-ui/core';

import parse from 'html-react-parser';
import { parsingFunction } from '../../parser';

import PostLinks from '../PostLinks';
import PostTitle from '../PostTitle';


const BasicLink = ( { post } ) => {
    
    
    const htmlElements = parsingFunction(post.selftext);
    const textPost = parse(htmlElements);

    return (
        <Grid item sm={10}>
            <PostTitle post={post} />
            
            
                
            {textPost}
                
           
            
            <PostLinks post={post} />
            
        </Grid>
    );
}

export default BasicLink;