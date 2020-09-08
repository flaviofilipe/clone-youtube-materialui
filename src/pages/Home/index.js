import React from 'react';
import {
    makeStyles,
    Box,
    Hidden,
} from '@material-ui/core';

import Header from '../Header';
import CustomDrawer from '../CustomDrawer';
import Dashboard from '../Dashboard';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark,
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <Box display='flex'>
                <Hidden mdDown>
                    <CustomDrawer />
                </Hidden>
                <Dashboard />
            </Box>
        </div>
    );
}

export default Home;
