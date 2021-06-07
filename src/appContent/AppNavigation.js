import React, { useEffect } from 'react';
import { Grid, Card } from '@material-ui/core';
import { loadSubreddits, selectSubredditsList } from '../store/subredditsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import SubredditNavLink from '../features/SubredditNavLink';


const useStyles = makeStyles({
    navFixedContainer: {
        position: 'relative',
        maxWidth: '16rem'
    },
    subredditCardWrapper: {
        position: 'sticky',
        top: '-70%',        //This is a hack. Needs to change based on number of components and their sizes
    },
    
});


const AppNavigation = () => {
    const dispatch = useDispatch();
    const subredditsList = useSelector(selectSubredditsList);

    const classes = useStyles();

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [dispatch]);

    

    return (
        
        <Grid item className={classes.navFixedContainer} sm={4}>
            <div className={classes.subredditCardWrapper}>
                <Card>          
                    {subredditsList.map((subreddit) => ( 
                        <SubredditNavLink key={subreddit.name} subreddit={subreddit} />
                    ))}
                </Card>
            </div>
        </Grid>

    );

}

export default AppNavigation;