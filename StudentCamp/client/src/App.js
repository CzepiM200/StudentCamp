import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Rooms from './components/Rooms/Rooms';
import Users from './components/Users/Users';
import Payments from './components/Payments/Payments';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              
            </Route>
            <Route path="/rooms">
              <Rooms />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/routes">
              
            </Route>
            <Route path="/payments">
              <Payments />
            </Route>
          </Switch>
        </BrowserRouter> 
    </div> 
  );
}

export default App;
