import React from 'react';
//import './pages.css';

import { Container, Typography, Grid } from '@material-ui/core';



import AppContent from '../appContent/AppContent';
import AppNavigation from '../appContent/AppNavigation';



const Snips = () => {

    return (
        <Container type="container" padding={3}>
            <Typography variant="h3" style={{ margin: '6rem 0 2rem 0', textAlign: 'center' }}>reddit snips.</Typography>
            <Grid container justify="center">
                <AppContent />
                <AppNavigation />
            </Grid>
        </Container>
        
    );
}

export default Snips;