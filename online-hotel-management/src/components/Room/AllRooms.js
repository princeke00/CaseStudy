import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import RoomService from "../../services/RoomService";
import "../Room/AllRooms.css";

export default function AllRooms() {
  const [room, setRoom] = useState([]);
  useEffect(() => {
    getAllRooms();
  }, []);
  const getAllRooms = () => {
    RoomService.getAllRooms()
      .then((response) => {
        setRoom(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteRoom = (roomId) => {
    RoomService.deleteRoom(roomId)
      .then((response) => {
        console.log(roomId);
        getAllRooms();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>Rooms List</h1>
      &nbsp;&nbsp;&nbsp;
          <Button variant="outlined" color="secondary">
            <Link to="/middle/hroom" style={{ textDecoration: "none" }}>
              Back
            </Link>
          </Button>
      <table>
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Room Type</th>
            <th>Room Rent</th>
            <th>Room Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {room.map((roomDetails) => (
            <tr key={roomDetails.roomId}>
              <td>{roomDetails.roomId}</td>
              <td>{roomDetails.roomType}</td>
              <td>{roomDetails.roomRent}</td>
              {/* <td>{roomDetails.roomAvailable}</td> */}
              <td>{String(roomDetails.roomAvailable)}</td>
              <td>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => deleteRoom(roomDetails.roomId)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  );
}
