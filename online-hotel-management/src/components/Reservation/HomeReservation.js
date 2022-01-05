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
export default function HomeReservation() {
    const classes=useStyles()

    return (
        <div className={classes.root}>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    <Link className='addReservationLink' to='/middle/resroom/addReservation'
                        style={{textDecoration:'none'}}>Add Reservations</Link>
                </Box>
            </Paper>
            <br></br><br></br>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    <Link className='getAllReservationLink' to='/middle/resroom/getAllReservation'
                        style={{textDecoration:'none'}}>Get All Reservations Details</Link>
                </Box>
            </Paper>
        </div>
    )
}