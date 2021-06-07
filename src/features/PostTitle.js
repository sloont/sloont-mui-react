import React from 'react';
import { CardContent, Typography } from '@material-ui/core';

//Found an issue where a post was titled D&amp;D
const PostTitle = ({ post }) => {

    const decodedTitle = post.title.replace(/&amp;/g, '&');
    
    return (
        <CardContent>
            <Typography variant="h6" align="center" gutterBottom={true}>
                {decodedTitle}
            </Typography>
        </CardContent>
    );

}

export default PostTitle;