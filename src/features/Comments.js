import React, { useState, useEffect } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Card } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loadComments } from '../store/postsSlice';


// import parsingFunction from '../helpers/parser';
// import parse from 'html-react-parser';

const Comments = ({ post, index }) => {
    const dispatch = useDispatch();
    const permalink = post.permalink;
    const [ showComments, setShowComments ] = useState(false);

    useEffect(() => {
        if(showComments) dispatch(loadComments(index, permalink));
        
    }, [dispatch, index, permalink, showComments]);
    

    const commentsTextArray = post.comments.map((comment) => ({ text: comment.body }));
    

    return (
        
        <Accordion >
            <AccordionSummary 
                onClick={() => setShowComments(!showComments)}
                style={{ display: 'flex', flexDirection: 'column', alignContent: 'center' }}
            >
                <div >
                    <Typography variant="button" color="primary" align="center" >Comments</Typography>
                </div>
                
            </AccordionSummary>
            <AccordionDetails >
                <Card style={{ marging: '2rem', padding: '2rem', display: 'flex', flexDirection: 'column', alignContent: 'center', background: 'rgba(255, 255, 255, 0.04)'}}>
                {commentsTextArray.map((comment, index) => (
                    
                    <Typography key={index} variant="caption" gutterBottom>{comment.text}</Typography>
                        
                ))}
                </Card>
            </AccordionDetails>
        </Accordion>
    );

}

export default Comments;

// 