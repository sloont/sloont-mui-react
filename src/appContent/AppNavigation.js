import React, { useEffect } from 'react';
import { Grid, Card } from '@material-ui/core';
import { loadSubreddits, selectSubredditsList } from '../store/subredditsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import SubredditNavLink from '../features/SubredditNavLink';


const useStyles = makeStyles({
    navFixedContainer: {
        position: 'relative',
        maxWidth: '16rem',
        
        
    },
    subredditCardWrapper: {
        position: 'sticky',
        top: '-70%',        //This is a hack. Needs to change based on number of components and their sizes
    
    },
    cardStyle: {
        boxShadow: "none"
    }
    
});


const AppNavigation = () => {
    const dispatch = useDispatch();
    const subredditsList = useSelector(selectSubredditsList);

    const classes = useStyles();

    useEffect(() => {
        dispatch(loadSubreddits());
    }, [dispatch]);

    

    return (
        
        <Grid container item className={classes.navFixedContainer} sm={4} >
            <Grid item className={classes.subredditCardWrapper} sm={12}>
                <Card elevation={2} style={{ boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)' }}>          
                    
                    {subredditsList.map((subreddit, index) => {

                        //is last item
                        if (!subredditsList[index + 1]) return <SubredditNavLink key={subreddit.name} subreddit={subreddit} isLast={true}/>
                        
                        //not last item
                        return ( 
                            <SubredditNavLink  key={subreddit.name} subreddit={subreddit} isLast={false}/>
                        )}
                    )}
                    
                </Card>
            </Grid>
        </Grid>

    );

}

export default AppNavigation;