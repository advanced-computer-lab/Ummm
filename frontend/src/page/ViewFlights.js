import './App.css';
import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import { Route, Redirect } from 'react-router'
import { Link, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
//import {Redirect} from 'react-router-dom';
//import LNSelect from "../LNSelect/LNSelect";
// import Navbar from './navbar';
// import Home from './home';
import { withRouter } from "react-router-dom";
import moment from "moment";

function App() {
  const history = useHistory();
  const[flights,Setflights]=useState([]);
    

  useEffect(() => {

    axios.get('http://localhost:8000/viewflights').then((result)=>
    {
        Setflights(result.data);
    });

  },[]);

  const editHandler = (flight) => {
    history.push({
      pathname: '/UpdateFlight',
    state: {
      data: flight}
    });
    };

    const deleteHandler = (flight) => {
      var del =flight._id;
        del.trim();
        const confirmBox = window.confirm(
          "Do you really want to delete this Flight?"
        )
        if (confirmBox === true) {
          axios.delete('http://localhost:8000/deleteflight', {data: {var1:del}})
          .then(response => {
              console.log(response);
               }).catch(error => {
              console.log(error); //Handle Flight_No excite 
            })
           window.location.reload(false);
        }
        };
  


  return (
    <div className="">
      <div className="content">

          <h1>All Flights </h1>

          <br/>
          
            
          {flights.map(flight =>
          <div className="row">
             <p className="left-txt"> <b>Flight_No: </b> {flight.Flight_No} </p>
            <p className="left-txt"> <b>From: </b> {flight.From} </p>
            <p className="left-txt"> <b>To: </b> {flight.To} </p>
             <p className="left-txt"> <b>Flight Date: </b> {moment(flight.Flight_Date).format("YYYY-MM-DD")} </p>
            <p className="left-txt"> <b>Departure: </b> {moment(flight.Flight_Date).format("HH:mm")} </p>
            <p className="left-txt"> <b>Terminal: </b> {flight.Terminal} </p>
            <p className="left-txt"> <b>Economy Class: </b> {flight.Economy_Seats} </p>
            <p className="left-txt"> <b>Business Class: </b> {flight.Business_Seats} </p>
            <p className="left-txt"> <b>First Class: </b> {flight.First_Seats} </p>
            <div>
            <button id={flight._id} class="button button1" onClick={() => editHandler(flight)}> <b>Update </b>  </button>
            </div>
            <div>
            <button name={flight._id} class="button button2" onClick={() => deleteHandler(flight)}> <b>Delete </b>  </button>
            </div>
          </div>

            
            
            )}
          
      </div>
    </div>

  );
}

export default App;