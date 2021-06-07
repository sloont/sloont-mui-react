import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    navFixedContainer: {
        position: 'relative',
    },
    subredditCardWrapper: {
        position: 'sticky',
        top: '6rem',
        left:0,

        
    }
})
const AppNavigation = () => {

    const classes = useStyles();

    return (
        <Grid item className={classes.navFixedContainer} sm={4}>
            <div className={classes.subredditCardWrapper}>
                <Card>
                    <CardContent>
                        <Typography variant="button">Yo</Typography>
                    </CardContent>
                </Card>
            </div>
        </Grid>

    );

}

export default AppNavigation;