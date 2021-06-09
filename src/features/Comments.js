import React from 'react';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadComments, selectPostsList } from '../store/postsSlice';

const Comments = ({ post, index }) => {
    const dispatch = useDispatch();
    const permalink = post.permalink;
    

    const showComments = () => {
        dispatch(loadComments(index, permalink))
    }



    return (
        <Button variant="contained" color="secondary" onClick={() => showComments()}>comments.</Button>
    );

}

export default Comments;