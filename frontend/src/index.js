import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateFlight from './page/CreateFlight.js'
import ViewFlights from './page/ViewFlights.js'
import UpdateFlight from './page/UpdateFlight.js'
import SearchFlight from './page/SearchFlight.js'
import LoginPage from './page/LoginPage.js'
import HomePage from './page/HomePage.js'

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
import UserLogin from './UserPages/UserLogin.js'
import UserHomePage from './UserPages/UserHomePage.js'
import CreateUserAccount from './UserPages/CreateUserAccount'
import UserSearchFlight from './UserPages/UserSearchFlight'
import UserManageBooking from './UserPages/UserManageBooking'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import UserEditProfile from './UserPages/UserEditProfile'
import UserConfirmBooking from './UserPages/UserConfirmBooking'

>>>>>>> 7129a27b4a47b50d4a3d7e01a389fabc7d79edeb
=======
import UserEditProfile from './UserPages/UserEditProfile'
import ChangePassword from './UserPages/ChangePassword'
import UserEditFlight from './UserPages/UserEditFlight'
import UserConfirmBooking from './UserPages/UserConfirmBooking'
import PassengersDetails from './UserPages/PassengersDetails'
import UserUpdateBooking from './UserPages/UserUpdateBooking'
import UserBoarding from './UserPages/UserBoarding'



import ReservationHomePage from './UserPages/ReservationHomePage'
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40




<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
import FlightHome from './page/FlightHome.js'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
                <Switch>
<<<<<<< HEAD
<<<<<<< HEAD
=======
                    <Route exact path="/" component={FlightHome} />
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
                    <Route exact path="/" component={FlightHome} />
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
                    <Route exact path="/ViewFlights" component={ViewFlights} />
                    <Route exact path="/UpdateFlight" component={UpdateFlight} />
                    <Route exact path="/CreateFlight" component={CreateFlight} />
                    <Route exact path="/SearchFlight" component={SearchFlight} />
                    <Route exact path="/HomePage" component={HomePage} />
                    <Route exact path="/LoginPage" component={LoginPage} />
<<<<<<< HEAD
<<<<<<< HEAD
                    <Route exact path="/" component={FlightHome} />
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40

                    <Route exact path="/UserLogin" component={UserLogin} />
                    <Route exact path="/UserHomePage" component={UserHomePage} />
                    <Route exact path="/CreateUserAccount" component={CreateUserAccount} />
                    <Route exact path="/UserSearchFlight" component={UserSearchFlight} />
                    <Route exact path="/UserManageBooking" component={UserManageBooking} />
<<<<<<< HEAD
<<<<<<< HEAD

                    

=======
                    <Route exact path="/UserConfirmBooking" component={UserConfirmBooking} />

                    <Route exact path="/UserEditProfile" component={UserEditProfile} />
                    
>>>>>>> 7129a27b4a47b50d4a3d7e01a389fabc7d79edeb
                    
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
                    <Route exact path="/UserConfirmBooking" component={UserConfirmBooking} />
                    <Route exact path="/UserUpdateBooking" component={UserUpdateBooking} />


                    <Route exact path="/UserEditProfile" component={UserEditProfile} />
                    <Route exact path="/ChangePassword" component={ChangePassword} />

                    <Route exact path="/UserEditFlight" component={UserEditFlight} />
                    <Route exact path="/ReservationHomePage" component={ReservationHomePage} />
                    <Route exact path="/PassengersDetails" component={PassengersDetails} />
                    <Route exact path="/UserBoarding" component={UserBoarding} />


                    
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
                </Switch>
            </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40





<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
