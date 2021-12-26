import '../css/App.css';
import { Component, useState, useEffect, useReducer } from 'react';
import axios from 'axios'
import { Route, Redirect } from 'react-router'
import { Link, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Cookies from "js-cookies";
import '../css/App.css';
import '../css/main.css';
import {
  Button,

} from 'antd';

// import {Redirect} from 'react-router-dom';
// import LNSelect from "../LNSelect/LNSelect";
// import Navbar from './navbar';
// import Home from './home';
import { withRouter } from "react-router-dom";
import moment from "moment";

function App() {
  if (localStorage.getItem('AuthenticationState') !== "AdminAuthenticated") {
    window.open("LoginPage", "_self");
  }

  const LogOutHandler = (e) => {
    var userid = localStorage.getItem('UserID')
    axios.delete('http://localhost:8000/logout', { data: { ID: userid } })
    localStorage.clear()
    history.push({
      pathname: '/LoginPage'
    });
  };

  //Is their authentication token still valid?
  //  else if (Date.now > new Date(localStorage.getItem('AuthenticationExpires'))) {
  //        window.open("AccessDenied.html", "_self");
  //  }
  const history = useHistory();
  const [flights, Setflights] = useState([]);

  useEffect(() => {

    Cookies.setItem("AccessToken", localStorage.getItem('AccessToken')//,{expires: 1/5760}
    )
    Cookies.setItem("RefreshToken", localStorage.getItem('RefreshToken')//,{expires: 1/100060}
    )

    axios.get('http://localhost:8000/viewflights', { withCredentials: true })
      .then((result) => {
        localStorage.setItem("AccessToken", Cookies.getItem("AccessToken"))
        document.cookie = 'AccessToken' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'RefreshToken' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

        console.log(result.data);
        Setflights(result.data);
      })
      .catch(err => {
        if (err.response.status == 403) {
          history.push({
            pathname: '/LoginPage'
          });
        }
        console.log(err)
      })

  }, []);

  const editHandler = (flight) => {
    history.push({
      pathname: '/UpdateFlight',
      state: {
        data: flight
      }
    });
    console.log(flight.Flight_Duration);
    console.log(flight.Flight_Duration.substring(flight.Flight_Duration.indexOf(':') + 1));


  };

  const deleteHandler = (flight) => {
    var del = flight._id;
    del.trim();
    const confirmBox = window.confirm(
      "Do you really want to delete this Flight?"
    )
    if (confirmBox === true) {

      Cookies.setItem("AccessToken", localStorage.getItem('AccessToken'))
      Cookies.setItem("RefreshToken", localStorage.getItem('RefreshToken'))

      axios.delete('http://localhost:8000/deleteflight', { data: { var1: del } }, { withCredentials: true })
        .then(response => {
          localStorage.setItem("AccessToken", Cookies.getItem("AccessToken"))
          document.cookie = 'AccessToken' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
          document.cookie = 'RefreshToken' + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

          console.log(response);
        }).catch(error => {
          if (error.response.status == 403) {
            history.push({
              pathname: '/LoginPage'
            });
          }
          console.log(error); //Handle Flight_No exsit 
        })
      window.location.reload(false);
    }
  };


        return (
          <>
      
      <div class="box d2">
      <div class="limiter">
        <div class="container-login100" >
          <div class="wrap-login199 p-l-55 p-r-55 p-t-65 p-b-54">
            <form class="login100-form validate-form">
              <span class="login100-form-title p-b-49">
                Admin View All Flights
              </span>
      
      
      
              
      
      
      
      
      
      
      
      
      
         
      
      
      
            
               {flights.map(flight =>
                         <>
      
      
      
      
      
      <table class="fl-table">
              <thead>
              <tr>
                  <th>Flight Number</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Flight Date</th>
                  <th>Duration</th>
                  <th>Terminal</th>
                  <th>Eco Seats</th>
                  <th>Buss Seats</th>
                  <th>First Seats</th>
                  <th>Eco Baggage</th>
                  <th>Buss Baggage</th>
                  <th>First Baggage</th>
                  <th>Eco Price</th>
                  <th>Buss Price</th>
                  <th>Fisrt Price</th>
          
              </tr>
              </thead>
          
              <tr>
                  <td>{flight.Flight_No}</td>
                  <td>{flight.From}</td>
                  <td>{flight.To}</td>
                  <td>{moment(flight.Flight_Date).format("YYYY-MM-DD  HH:mm")}</td>
                  <td>{flight.Flight_Duration}</td>
                  <td>{flight.Terminal}</td>
                  <td>Eco: {flight.Economy_Seats}</td>
                  <td>Buss: {flight.Business_Seats}</td>
                  <td>First: {flight.First_Seats}</td>
                  <td>Eco: {flight.Economy_Baggage}</td>
                  <td>Buss: {flight.Business_Baggage}</td>
                  <td>First: {flight.First_Baggage}</td>
                  <td>Eco: ${flight.Economy_Price}</td>
                  <td>Buss: ${flight.Business_Price}</td>
                  <td>First: ${flight.First_Price}</td>
                  <td> <a class="button-60 center20" role="button">Back</a> <a class="button-60 center20" role="button">Back</a></td>

              </tr>
             
      
          
          </table>
       
      
      
      
      
      
      </>
      
      
      
      
      
               )}
      
      <>
      
      
      
      
      
        
      
        
      
      
      
      
      
      
      
               
        
               </>
              
      
             
      
          
             
             
      
      
      
                      
      
      
      
      
      
           
             
          
            
      
      
      
            </form>
      
            
            
              <a class="button-60 center20" role="button" onClick={() => history.goBack()}>Back</a>
              <a class="button-60 center20" role="button" onClick={(e) => LogOutHandler(e)}>Log Out </a>
          </div>
        </div>
      </div>
      
      
      
      </div>
      
      
      
      
      
            
           
      
          
      
          
          </>
        );
}

export default App;