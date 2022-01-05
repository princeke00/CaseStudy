import React,{ useState} from 'react'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import GuestService from '../../services/GuestService'
import { Link } from 'react-router-dom'


const useStyles=makeStyles({
    id:{
        width:1000,
    },
    name:{
        width:1000
    },
    contact:{
        width:1000
    },
    email:{
        width:1000
    },
    gender:{
        width:1000
    },
    address:{
        width:1000
    }
})
export default function AddRoom() {
    const [guestId, setGuestId] = useState('')
    const [guestName, setGuestName] = useState('')
    const [guestContact, setGuestContact] = useState('')
    const [guestEmail, setGuestEmail] = useState('')
    const [guestGender, setGuestGender] = useState('')
    const [guestAddress, setGuestAddress] = useState('')

    const saveGuest =(e)=>{
    e.preventDefault();

    const guest={guestId,guestName,guestContact,guestEmail,guestGender,guestAddress}
    GuestService.addGuests(guest).then((response)=>{
        console.log(response.data)
    }).catch(error=>{
        console.log(error)
    })
}
    const classes=useStyles()
    return (
        <div>
            <br></br><br></br><br></br>
            <h1>Enter Guest Details</h1>
            <TextField variant="filled" label="Guest ID" placeholder='Enter a Guest Id' className={classes.id}
                value={guestId} onChange={(e)=>setGuestId(e.target.value)} color='secondary'>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Guest Name" placeholder='Enter the guest name'
                className={classes.name} value={guestName} onChange={(e)=>setGuestName(e.target.value)}
                color='secondary'>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Guest Contact" placeholder='Enter the contact of guest'
                className={classes.contact} value={guestContact} color='secondary'
                onChange={(e)=>setGuestContact(e.target.value)}>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Guest Email" placeholder='Enter the email of guest'
                className={classes.email} value={guestEmail} onChange={(e)=>setGuestEmail(e.target.value)}
                color='secondary'>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Guest Gender" placeholder='Enter the gender of guest'
                className={classes.gender} value={guestGender} onChange={(e)=>setGuestGender(e.target.value)}
                color='secondary'>
            </TextField>
            <br></br><br></br>
            <TextField variant="filled" label="Guest Address" placeholder='Enter the address of guest'
                className={classes.address} value={guestAddress} onChange={(e)=>setGuestAddress(e.target.value)}
                color='secondary'>
            </TextField>
            <br></br><br></br>
            <Button variant='outlined' onClick={(e)=>saveGuest(e)} color='secondary'>
                Add Guest
            </Button>&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='secondary'>
                <Link to='/middle/resroom/addReservation' style={{textDecoration:'none'}}>
                    Add Reservation
                </Link>
            </Button>&nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='secondary'>
                <Link to='/middle/hroom' style={{textDecoration:'none'}}>Back</Link>
            </Button>
        </div>
    )
}
