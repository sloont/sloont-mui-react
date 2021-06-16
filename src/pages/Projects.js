import React from 'react';
//import './pages.css';
import { NavLink } from 'react-router-dom';
import { Container, Typography, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({ ///Mostly temp stuff
    tempContainer: {
        margin: '6rem 6rem'
        
    },
    navLinkButton: {
        textDecoration: 'none',
        textTransform: 'lowercase',
        
        margin: '2rem'
    }
});

const Projects = () => {

    const classes = useStyles();

    return (
        <Container className={classes.tempContainer}>
            <Typography variant='h3' style={{ marginBottom: '2rem'}}>projects.</Typography>
            <NavLink to='/snips' className={classes.navLinkButton}>
                <Button variant='contained' color='secondary'>snips.</Button>
            </NavLink>
            <Link href='https://sloont.github.io/snakelist' underline='none' className={classes.navLinkButton}>
                <Button variant='contained' color='primary'>snake lists.</Button>
            </Link>
        </Container>
    )
}

export default Projects;