import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    useMediaQuery,
    Drawer
} from '@material-ui/core';
import ListIcon from '@material-ui/icons/List';
import NavItems from './NavItems';
import DrawerItems from './DrawerItems';

const Navigation = () => {
    const [drawerState, setDrawerState ] = useState(false);

    const toggleDrawer = () => {
        if (drawerState) return setDrawerState(false);
        if (!drawerState) return setDrawerState(true);

        
    }

    const matches = useMediaQuery('(max-width:480px)');

    const display = !matches ? (
        <>
            <div className="spacer" style={{flex: 0.05}}></div>
            <Typography variant="h4" style={{color: '#fff'}}>
            sloont.
            </Typography>
            <div className="spacer" style={{flex: 1}} />
            
            <NavItems />
        </>
    ) : (
        <>

                <IconButton onClick={() => toggleDrawer()}>
                    <ListIcon fontSize="large"/> 
                </IconButton>
                <div className="spacer" style={{flex: 1}} />
                <Typography variant="h4" style={{color: '#fff', paddingRight: '1rem'}}>
                sloont.
                </Typography>
                
                <Drawer
                    anchor='left'
                    open={drawerState}
                    onClose={() => toggleDrawer()}

                ><DrawerItems /></Drawer>

        </>
    )

    return (
        <AppBar position="fixed" style={{background: '#121212', zIndex: 1000000}}>
            <Toolbar style={{background: 'rgb(117, 207, 248, 0.08)'}}> 
                {display}
            </Toolbar>
        </AppBar>
        
    );
};

export default Navigation;

