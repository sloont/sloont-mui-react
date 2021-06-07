import React from 'react';
//import './pages.css';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({ ///Mostly temp stuff
    tempContainer: {
        margin: '6rem 6rem'
        
    },
    navLinkButton: {
        textDecoration: 'none',
        textTransform: 'lowercase'
    }
});

const Projects = () => {

    const classes = useStyles();

    return (
        <Container className={classes.tempContainer}>
            <Typography variant="h3" style={{ marginBottom: '2rem'}}>projects.</Typography>
            <Button variant="contained" color="secondary">
                <NavLink to="/snips" className={classes.navLinkButton}>snips.</NavLink>
            </Button>
        </Container>
    )
}

export default Projects;