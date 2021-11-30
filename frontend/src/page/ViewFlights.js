import '../css/App.css';
import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import { Route, Redirect } from 'react-router'
import { Link, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import {
  Button,

} from 'antd';
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
          <table id="customers">
    <thead>
        <tr>
            <th id="cutomers">Flight_no</th>
            <th id="cutomers">From</th>
            <th id="customers">To</th>
            <th id="customers">Flight_Date</th>
            <th id="customers">Departure</th>
            <th id="customers">Terminal</th>
            <th id="customers">Economy</th>
            <th id="customers">Business</th>
            <th id="customers">First</th>
            <th id="customers">Actions</th>
        </tr>
    </thead>
  

    {flights.map(flight =>
         
       
         
   
        
        <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.Flight_No}</span>
              
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.From}</span>
                
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.To}</span>
                
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{moment(flight.Flight_Date).format("YYYY-MM-DD")}</span>
               
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{moment(flight.Flight_Date).format("HH:mm")}</span>
               
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.Terminal}</span>
           
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.Economy_Seats}</span>
              
            </td>
            
            
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.Business_Seats}</span>
                
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.First_Seats}</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold"></span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase"></span>
                <button class="w3-button w3-border w3-hover-cyan" name={flight._id}  onClick={() => editHandler(flight)}> <b>Update </b>  </button>
                <button class="w3-button w3-border w3-hover-red" name={flight._id}  onClick={() => deleteHandler(flight)}> <b>Delete </b>  </button>
            </td>
        </tr>
         )}
 
</table>
<br/>
&nbsp;&nbsp;&nbsp;
<Button onClick={() => history.goBack()}>Back</Button>
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>




















          
            
          





          
      </div>
    </div>
    

  );
}

export default App;