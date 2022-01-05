import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ReservationService from '../../services/ReservationService'
import { Link, useHistory } from 'react-router-dom'


const useStyles=makeStyles({
    resid:{
        width:1000,
    },
    rid:{
        width:1000
    },
    gid:{
        width:1000
    },
    checkin:{
        width:1000
    },
    checkout:{
        width:1000
    },
    numguest:{
        width:1000
    },
    price:{
        width:1000
    }
})
export default function AddReservation() {
    const [reservationId, setReservationId] = useState('')
    const [roomId, setRoomId] = useState('')
    const [guestId, setGuestId] = useState('')
    const [checkInDate, setCheckInDate] = useState('')
    const [checkOutDate, setCheckOutDate] = useState('')
    const [numOfGuest, setNumOfGuest] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
    const history=useHistory()

    const saveReservation =(e)=>{
    e.preventDefault();

    const reservation={reservationId,roomId,guestId,checkInDate,checkOutDate,numOfGuest,totalPrice}
    ReservationService.addReservations(reservation).then((response)=>{
        console.log(response.data)
        history.push('/middle/resroom')
    }).catch(error=>{
        console.log(error)
    })
}
    const classes=useStyles()
    return (
        <div>
            <br></br><br></br><br></br>
            <h1>Enter Reservation Details</h1>
            <TextField variant="filled" label="Reservation ID" placeholder='Enter a Reservation Id' 
                className={classes.resid} value={reservationId} color='secondary'
                onChange={(e)=>setReservationId(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Room ID" placeholder='Enter the Room Id'
                className={classes.rid} value={roomId} onChange={(e)=>setRoomId(e.target.value)}
                color='secondary'>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Guest ID" placeholder='Enter the Guest Id'
                className={classes.gid} value={guestId} onChange={(e)=>setGuestId(e.target.value)}
                color='secondary'>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="CheckIn Date" placeholder='Enter the CheckIn Date'
                className={classes.checkin} value={checkInDate} color='secondary'
                onChange={(e)=>setCheckInDate(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="CheckOut Date" placeholder='Enter the CheckOut Date'
                className={classes.checkout} value={checkOutDate} color='secondary'
                onChange={(e)=>setCheckOutDate(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Number of Guest" placeholder='Enter the number of guest'
                className={classes.numguest} value={numOfGuest} color='secondary'
                onChange={(e)=>setNumOfGuest(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Total Price" placeholder='Enter the total price'
                className={classes.price} value={totalPrice} color='secondary'
                onChange={(e)=>setTotalPrice(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <Button variant='contained' onClick={(e)=>saveReservation(e)} color='secondary'>
                Add Reservation
            </Button>&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='secondary'>
                <Link to='/middle/resroom' style={{textDecoration:'none'}}>Back</Link>
            </Button>
        </div>
    )
}