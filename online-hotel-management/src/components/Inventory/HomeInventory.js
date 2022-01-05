import React from 'react'
import { Box, Paper,Button} from '@material-ui/core';
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
export default function HomeInventory() {
    const classes=useStyles()

    return (
        <div className={classes.root}>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    <Link className='addInventoryLink' to='/middle/iroom/addInventory'
                        style={{textDecoration:'none'}}>Add Inventory</Link>
                </Box>
            </Paper>
            <br></br><br></br>
            <Paper variant='outlined'>
                <Box p={1} className={classes.boxBorder}>
                    <Link className='getAllInventoryLink' to='/middle/iroom/getAllInventory'
                        style={{textDecoration:'none'}}>Get All Inventories Detail</Link>
                </Box>
            </Paper>
            &nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='secondary'>
                <Link to='/middle' style={{textDecoration:'none'}}>Back</Link>
            </Button>
        </div>
    )
}