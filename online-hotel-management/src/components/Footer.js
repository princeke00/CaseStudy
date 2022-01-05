import React from 'react'
import { AppBar, Box } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'; 
import "./Header.css";
const useStyles = makeStyles({
    title:{
        paddingLeft:150,
        flexGrow:1,
        paddingTop:150
    }
})

export default function Header() {
    
    const classes=useStyles()
    return (
        <AppBar posistion="static" color='secondary'>
            <Toolbar>
                <Typography variant="h4" className={classes.title}>
                    @Copyright Created By Rohan Gaonkar
                </Typography>
            </Toolbar>
        </AppBar>
    )
}