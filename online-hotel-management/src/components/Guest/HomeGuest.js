import React from 'react'
import { Box, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
    root:{
        margin:theme.spacing(1),
        width:theme.spacing(125),
        height:theme.spacing(25),
        paddingLeft:theme.spacing(30),
        paddingTop:theme.spacing(10)
    },
    boxBorder:{
        border:`3px solid ${pink[500]}`
    }
}))
export default function HomeGuest() {
    const classes=useStyles()

    return (
        <div className={classes.root}>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    {/* <Typography>Add Rooms</Typography> */}
                    <Link className='addGuestLink' to='/middle/groom/addGuest'
                        style={{textDecoration:'none'}}>Add Guests</Link>
                </Box>
            </Paper>
            <br></br><br></br>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    {/* <Typography>Get All Rooms Detail</Typography> */}
                    <Link className='getAllGuestLink' to='/middle/groom/getAllGuest'
                        style={{textDecoration:'none'}}>Get All Guests Details</Link>
                </Box>
            </Paper>
        </div>
    )
}