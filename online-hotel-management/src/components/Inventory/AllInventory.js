import { Button } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import InventoryService from '../../services/InventoryService'
import '../Room/AllRooms.css'
import { Link } from 'react-router-dom'

export default function AllInventory() {

    const [inventory, setInventory] = useState([])
    // for Rest API call 
    useEffect(() => {
        getAllInventorys()
    }, [])
    const getAllInventorys=()=>{
        InventoryService.getAllInventory().then((response)=>{
            setInventory(response.data)
            console.log(response.data)
        }).catch(error => {
            console.log(error);
        })
    };
    const deleteInventory=(inventoryId)=>{
        InventoryService.deleteInventory(inventoryId).then((response)=>{
            console.log(inventoryId);
            getAllInventorys();
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <div>
            <br></br><br></br><br></br>
            <h1>Inventory List</h1>
            &nbsp;&nbsp;&nbsp;
            <Button variant='outlined' color='secondary'>
                <Link to='/middle/iroom' style={{textDecoration:'none'}}>Back</Link>
            </Button>
            <table>
                <thead>
                    <tr>
                        <th>Inventory ID</th>
                        <th>Inventory Type</th>
                        <th>Inventory Name</th>
                        <th>Inventory Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        inventory.map(
                            inventoryDetails=>
                                <tr key={inventoryDetails.inventoryId}>
                                    <td>{inventoryDetails.inventoryId}</td>
                                    <td>{inventoryDetails.inventoryType}</td>
                                    <td>{inventoryDetails.inventoryName}</td>
                                    <td>{inventoryDetails.inventoryStock}</td>
                                    <td>
                                        <Button variant='outlined' color='secondary' onClick={()=>deleteInventory(inventoryDetails.inventoryId)}>Delete</Button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
