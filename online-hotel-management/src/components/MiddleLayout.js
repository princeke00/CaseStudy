import React from 'react'
import { Box, Paper, Button} from '@material-ui/core';
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
export default function MiddleLayout() {
    const classes=useStyles()

    return (
        <div className={classes.root}>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    <Link className='roomLink' to='/middle/hroom' style={{textDecoration:'none'}}>Room</Link>
                </Box>
            </Paper>
            <br></br><br></br>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    <Link className='guestLink' to='/middle/groom' style={{textDecoration:'none'}}>Guest</Link>
                </Box>
            </Paper>
            <br></br><br></br>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    <Link className='reservationLink' to='/middle/resroom' style={{textDecoration:'none'}}>Reseravtion</Link>
                </Box>
            </Paper>
            {/* <br></br><br></br>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    <Typography>Staff</Typography>
                </Box>
            </Paper> */}
            <br></br><br></br>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    {/* <Typography>Inventory</Typography> */}
                    <Link className='inventoryLink' to='/middle/iroom' style={{textDecoration:'none'}}>Inventory</Link>
                </Box>
            </Paper>
            &nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='secondary'>
                <Link to='/' style={{textDecoration:'none'}}>Back</Link>
            </Button>
        </div>
    )
}
