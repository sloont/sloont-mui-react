import React from 'react';
import { Grid, Card} from '@material-ui/core';

import Gfycat from './mediaTypes/Gfycat';
import Streamable from './mediaTypes/Streamable';
// import Vreddit from './mediaTypes/Vreddit';          Testing for a while with Vreddit in a video container instead of Iframe (default)
import BasicImage from './mediaTypes/BasicImage';
import TextPost from './mediaTypes/TextPost';
import Voting from '../features/Voting';
import ImgurGif from './mediaTypes/ImgurGif';
import LinkWithThumbnail from './mediaTypes/LinkWithThumbnail';
import VredditAsVideo from './mediaTypes/VredditAsVideo';



const Post = ( { post } ) => {

    
    let mediaContent = <LinkWithThumbnail post={post}/>

    if (post.domain && post.domain === "gfycat.com") mediaContent = <Gfycat post={post} />
    if (post.domain && post.domain === "streamable.com") mediaContent = <Streamable post={post} />
    if (post.domain && post.domain === "v.redd.it") mediaContent = <VredditAsVideo post={post} />
    if (post.domain && post.domain === "i.imgur.com") mediaContent = <ImgurGif post={post} />

    //text posts don't have a post.post_hint
    if (post.post_hint === "self") mediaContent = <TextPost post={post} />

    //determine if basic image with post.post_hint
    if (post.post_hint === "image") mediaContent = <BasicImage post={post} />

    

    return (
        <Grid item sm={12} style={{ margin: '0 28px 0 28px'}}>
            <Card>
                <Grid container>
                    <Voting post={post}/>
                    {mediaContent}
                    <Grid item sm={2}></Grid>
                </Grid>

            </Card>
        </Grid>
    );
}

export default Post;