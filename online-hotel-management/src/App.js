import './App.css';
import Home from './components/Home';
import MiddleLayout from './components/MiddleLayout';
import HomeRoom from './components/Room/HomeRoom';
import AddRoom from './components/Room/AddRoom';
import AllRooms from './components/Room/AllRooms';
import SearchAvlRoom from './components/Room/SearchAvlRoom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeGuest from './components/Guest/HomeGuest';
import AddGuest from './components/Guest/AddGuest';
import AllGuest from './components/Guest/AllGuests'
import HomeReservation from './components/Reservation/HomeReservation';
import AddReservation from './components/Reservation/AddReservation';
import AllReservations from './components/Reservation/AllReservation';
import HomeInventory from './components/Inventory/HomeInventory';
import AddInventory from './components/Inventory/AddInventory'
import AllInventory from './components/Inventory/AllInventory'
import Login from './components/Login';
function App() {
  return (
    <Router>
      <div className="App">
        <Home className="App"></Home>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/middle' exact component={MiddleLayout}/>
          <Route path='/middle/hroom' exact component={HomeRoom}/>
          <Route path='/middle/hroom/addRoom' exact component={AddRoom}/>
          <Route path='/middle/hroom/getAllRoom' exact component={AllRooms}/>
          <Route path='/middle/hroom/getAvail' exact component={SearchAvlRoom}/>
          <Route path='/middle/groom' exact component={HomeGuest}/>
          <Route path='/middle/groom/addGuest' exact component={AddGuest}/>
          <Route path='/middle/groom/getAllGuest' exact component={AllGuest}/>
          <Route path='/middle/resroom' exact component={HomeReservation}/>
          <Route path='/middle/resroom/addReservation' exact component={AddReservation}/>
          <Route path='/middle/resroom/getAllReservation' exact component={AllReservations}/>
          <Route path='/middle/iroom' exact component={HomeInventory}/>
          <Route path='/middle/iroom/addInventory' exact component={AddInventory}/>
          <Route path='/middle/iroom/getAllInventory' exact component={AllInventory}/>
          <Route path='/login' exact component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
