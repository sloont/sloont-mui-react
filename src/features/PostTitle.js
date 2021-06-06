import React from 'react';
import { CardContent, Typography } from '@material-ui/core';

const PostTitle = ({ post }) => {

    return (
        <CardContent>
            <Typography variant="h6" align="center">
                {post.title}
            </Typography>
        </CardContent>
    );

}

export default PostTitle;