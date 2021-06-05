import React from 'react';
//import './pages.css';

import { Container, Typography, Grid, Paper, Card, CardHeader, CardContent } from '@material-ui/core';



const Snips = () => {

    
    return (
        <Container type="container" padding={3}>
            <Typography variant="h3" >reddit snips.</Typography>
            <Grid container spacing={3}>
                <Grid item xs={6} justify="center" alignItems="center">
                    <Card spacing={3}>
                        <CardHeader>Hullo</CardHeader>
                        <CardContent>Hullo</CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card spacing={3}>
                        <CardHeader>Hullo</CardHeader>
                        <CardContent>Hullo</CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card spacing={3}>
                        <CardHeader>Hullo</CardHeader>
                        <CardContent>Hullo</CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card spacing={3}>
                        <CardHeader>Hullo</CardHeader>
                        <CardContent>Hullo</CardContent>
                        
                    </Card>
                </Grid>
                <Paper item/>

            </Grid>
        </Container>
        
    );
}

export default Snips;