import React from 'react'
import { AppBar, Box } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'; 
import "./Header.css";
import imageIcon from '../images/icon.png'
const useStyles = makeStyles({
    title:{
        paddingLeft:150,
        flexGrow:1
    },
    appBarBtn:{
        float:'right'
    },
    icon:{
        height:50,
        width:100
    },
})

export default function Header() {
    
    const classes=useStyles()
    return (
        <AppBar posistion="static" color='secondary'>
            <Toolbar>
                <img src={imageIcon} className={classes.icon}></img>
                <Typography variant="h6" className={classes.title}>
                    Maurya Patna
                </Typography>
                
                <Button color="secondary" className={classes.appBarBtn}>
                    <Link to='/' style={{textDecoration:'none'}}>HOME</Link>
                </Button>
                <Button color="inherit" className={classes.appBarBtn}>
                    <Link to='/middle' style={{textDecoration:'none'}}>OPERATION</Link>
                </Button>
                <Button color="inherit" className={classes.appBarBtn}>
                    <Link to='/login' style={{textDecoration:'none'}}>LOGIN</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}
