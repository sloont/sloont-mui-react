import React, { useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { loadSubreddits, selectSubredditsList } from '../store/subredditsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import img from '../features/mediaTypes/subredditThumbnail.png';


const useStyles = makeStyles({
    navFixedContainer: {
        position: 'relative',
    },
    subredditCardWrapper: {
        position: 'sticky',
        top: '-70%',        //This is a hack. Needs to change based on number of components and their sizes
    },
    individualSub: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        <Grid item className={classes.navFixedContainer} sm={4}>
            <div className={classes.subredditCardWrapper}>
                <Card>              
                        {subredditsList.map(
                            (subreddit, index) => {
                                let validSub = null;
                                // if (index < 15) {
                                    const imgSrc = subreddit.icon_img ? subreddit.icon_img : img;

                                    validSub = (
                                        <CardContent key={index} className={classes.individualSub}>
                                            <img 
                                                src={imgSrc} 
                                                alt={subreddit.title}
                                                height='32px'
                                                width='32px'
                                                style={{ borderRadius: '50%' }}
                                            />
                                            <Typography variant="button" color="primary">
                                                {subreddit.display_name_prefixed}
                                            </Typography>
                                        </CardContent>
                                    )
                                // }
                                //We only want to return 15 of the 25 subs
                                //This fits nicer on the page and doesn't overwhelm the user with choices
                                //They can always search
                                return validSub;
                            })
                        }

                </Card>
            </div>
        </Grid>

    );

}

export default AppNavigation;