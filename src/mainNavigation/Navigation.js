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

//we give theme background in AppBar because it must be opaque
//then we give overlay for depth

    return (
        <AppBar position="fixed" style={{background: '#121212'}}>
            <Toolbar style={{background: 'rgb(117, 207, 248, 0.08)'}}> 
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