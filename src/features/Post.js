import React from 'react';
import { Grid, Card} from '@material-ui/core';

import Gfycat from './mediaTypes/Gfycat';
import Streamable from './mediaTypes/Streamable';
import Vreddit from './mediaTypes/Vreddit';
import BasicImage from './mediaTypes/BasicImage';
import BasicLink from './mediaTypes/BasicLink';




const Post = ( { post } ) => {

    
    let mediaContent = <></>;

    //gfycat https://gfycat.com/ifr/{gfyId}
    if (post.domain && post.domain === "gfycat.com") mediaContent = <Gfycat post={post} />
    if (post.domain && post.domain === "streamable.com") mediaContent = <Streamable post={post} />
    if (post.domain && post.domain === "v.redd.it") mediaContent = <Vreddit post={post} />

    //text posts don't have a post.post_hint
    if (!post.post_hint || post.post_hint === "self") mediaContent = <BasicLink post={post} />

    //determine if basic image with post.post_hint
    if (post.post_hint === "image") mediaContent = <BasicImage post={post} />

    return (
        <Grid item sm={7}>
            <Card>
                <Grid container>
                    <Grid item sm={1}>
                        <p>{post.ups}</p>
                    </Grid>
                    {mediaContent}
                    <Grid item sm={1}></Grid>
                </Grid>

            </Card>
        </Grid>
    );
}

export default Post;