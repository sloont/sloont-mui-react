import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import NavItems from './NavItems';

const Navigation = () => {



    return (
        <AppBar position="fixed" style={{background: '#121212'}}>
            <Toolbar>
                <IconButton>
                    <DirectionsWalkIcon fontSize="large"/> 
                </IconButton>
                <Typography variant="h4" style={{color: '#fff'}}>
                sloont.
                </Typography>
                <div className="spacer" style={{flex: 1}} />
                
                <NavItems />
            
            </Toolbar>
        </AppBar>
        
    );
};

export default Navigation;