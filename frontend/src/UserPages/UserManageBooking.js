import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import React from 'react';
import {Link} from 'react-scroll'
import Seatmap from 'react-seatmap';
import SeatPicker from "react-seat-picker";
import "./styles.css";



import $ from 'jquery';

import SeatMap from './SeatMapComponent.js';

import 'antd/dist/antd.css'; 
import '../css/popup.css';

import '../css/main.css';
import '../css/guest.css';
import '../css/SelectSeat.scss';




import moment from "moment";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  message,
  Switch,
} from 'antd';







 

//TESTTTTTTTTT


const UserManageBooking = () => {

//   if (sessionStorage.getItem('AuthenticationState') !== "UserAuthenticated") {
//     window.open("UserLogin", "_self");
//  }
//  const LogOutHandler = (e) => {
//   sessionStorage.clear()
//   history.push({
//     pathname: '/UserLogin'
//   });
// };


 const history = useHistory();
  const [componentSize, setComponentSize] = useState('default');
  const [Result1, setResult1] = useState();
  const [Result2, setResult2] = useState();
  const [isLoading, setLoading] = useState(true);
  const [bothselected, setbothselected] = useState(true);

 
  const [state, setMap] = useState({
    loading: false
  });

  const [Data, setState] = useState({
    Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Flight_Duration:"",
        Seats: "",
        Baggage: "",
        Price: "",
    

  });
  
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const scrollToBottom = ({ size }) => {
    window.scrollTo({bottom:0, behavior: "smooth"})
   };

  const [value, setValue] = useState(1);
  const selectRadio = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  const cars = [];
  const [isdepart, setdepart] = useState();

  const departHandler = (flight) => {
    setdepart( flight )
    //console.log(flight) ;
   
    };


    const [isSeat, setSeat] = useState();

    const seatHandler = (flight) => {
      setSeat( flight )
      };
    

    const [isreturn, setreturn] = useState();

    const returnHandler = (flight) => {
      setreturn( flight )
      //console.log(flight) ;
      
      };
      
    

  useEffect(() => {

    if(Result1 && Result2)
    {
      setLoading(false);
    }

    if(isdepart && isreturn){
     document.getElementById("yourButtonID").style.visibility="visible";
     setbothselected(false);
    // document.getElementById("yourButtonID").style.backgroundColor="red";
    
    }
    


  },[Result1,Result2,isdepart,isreturn,state]);



  const changeHander = (e) => {
    console.log(moment(Data.Flight_Date));

    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };

  
  const BookHendler = () => {
   
console.log(isdepart);
console.log(isreturn);
    
  };



  //TTTTTT
  const searchHandler = (e) => {
    e.preventDefault(); 
  
    const criteria1 = {};
    const criteria2 = {};
    var dd;

    Object.keys(Data).forEach(key => {
   if (Data[key]!=="") {
    if(key=="Flight_Date_Depart"){
      criteria1["Flight_Date"] = Data[key];
      // criteria2["Flight_Date_Depart"] = Data[key];
    }
      else
        criteria1[key] = Data[key];
        if(key=="From"){
          criteria2[key] = Data["To"];
        }
       else if(key=="To"){
          criteria2[key] = Data["From"];
        }
        else if(key=="Flight_Date_Return"){
          criteria2["Flight_Date"] = Data[key];
        }
        else
        criteria2[key] = Data[key];
      }
    });
    //console.log(criteria);

   // prevent reloading the page
   console.log(Data.Flight_Date_Depart);
  //  if(Data.From.length==3 && Data.To.length==3 &&Data.Flight_Date_Depart!=="" &&Data.Flight_Date_Return!==""){
    axios.post('http://localhost:8000/SearchFlight', criteria1)
    .then(response => {
      setResult1(response.data);
       console.log(Result1);
      setState({
        Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Flight_Duration:"",
        Seats: "",
        Baggage: "",
        Price: "",
        })
       }).catch(error => {
      console.log(error);
    })

    axios.post('http://localhost:8000/SearchFlight', criteria2)
    .then(response => {
      setResult2(response.data);
       console.log(Result2);
      setState({
        Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Flight_Duration:"",
        Seats: "",
        Baggage: "",
        Price: "",
        })
       }).catch(error => {
      console.log(error);
    })
    console.log(Result1);
    console.log(Result2);


    setState({
      Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Flight_Duration:"",
        Seats: "",
        Baggage: "",
        Price: "",
      })
  };
  

  const warning1 = () => {
    message.warning('Please enter departure city');
  };
  const warning2 = () => {
    message.warning('Please enter a destination.');
  };
  const warning3 = () => {
    message.warning('Please enter departure date.');
  };
  const warning4 = () => {
    message.warning('Please enter return date.');
  };

  // const testme = () => {
  //   if(isdepart )
  //   document.getElementById("yourButtonID").style.visibility="visable";
  // }; 
  const SearchFlightHandler = event => {
    history.push({
        pathname: '/UserSearchFlight',
        state: { detail: 'some_value' }
    });
 };



 const ReservedFlightsHandler = event => {
  history.push({
      pathname: '/UserManageBooking',   //this one for resrved flightsss
      state: { detail: 'some_value' }
  });
};

const EditFlightHandler = event => {
  history.push({
      pathname: '/UserHomePage',
      state: { detail: 'some_value' }
  });
};
const EditProfileHendler = event => {
  history.push({
      pathname: '/UserEditProfile',
      state: { detail: 'some_value' }
  });
};

const { loading } = state;



  if (isLoading) {

    // if (sessionStorage.getItem('AuthenticationState') !== "UserAuthenticated") {
    //   window.open("UserHomePage", "_self");
    //   warning2();
    // }
    

    return(
      <>
             <div class="s011">
      <form>
        <fieldset>
        
        </fieldset>
        <div class="inner-form">
          <header>
          <label class="center2">Manage Flights</label>
            <div class="travel-type-wrap">
           
              <button class="item "  onClick={(e) => SearchFlightHandler(e)}>
              <div class="group-icon">
              <svg width="70px" height="70px" viewBox="0 0 58.568 58.568" xmlns="http://www.w3.org/2000/svg">
  <path id="flight_plane" data-name="flight plane" d="M1023.994,672.006c2.4-3.218,3.843-6.559,3.85-8.946a3.323,3.323,0,0,0-.453-1.828,1.706,1.706,0,0,0-.578-.584,3.265,3.265,0,0,0-1.852-.466c-2.381,0-5.723,1.442-8.942,3.849a77.166,77.166,0,0,0-8.806,8.487q-.917.966-1.934,2.031l-6.976-2.091.02-.02a1.566,1.566,0,0,0-.005-2.2l-1.259-1.261a1.571,1.571,0,0,0-1.11-.461,1.541,1.541,0,0,0-1.1.458l-1.885,1.886-1-.3a1.563,1.563,0,0,0-.125-2.063l-1.266-1.265a1.568,1.568,0,0,0-1.109-.457,1.534,1.534,0,0,0-1.1.458l-1.73,1.73-7.094-2.125a1.775,1.775,0,0,0-.507-.072,1.875,1.875,0,0,0-1.311.531l-2.494,2.494a1.463,1.463,0,0,0-.439,1.029,1.433,1.433,0,0,0,.761,1.284l14.918,8.334a2.607,2.607,0,0,1,.362.275l4.253,4.252c-3.978,4.191-7.522,8.25-10.284,11.781-.258.328-.5.649-.742.965l-11.541-1.048a1.573,1.573,0,0,0-.2-.012,2.127,2.127,0,0,0-1.429.591l-1.163,1.161a1.449,1.449,0,0,0-.446,1.029,1.418,1.418,0,0,0,.839,1.3l8.119,3.857a1.843,1.843,0,0,1,.311.223l.674.668a4.938,4.938,0,0,0-.325,1.561,2.053,2.053,0,0,0,.567,1.5l.029.026.008.005a2.056,2.056,0,0,0,1.493.56,4.964,4.964,0,0,0,1.548-.322l.684.682a1.956,1.956,0,0,1,.212.3l3.848,8.1a1.435,1.435,0,0,0,1.294.851h.008a1.446,1.446,0,0,0,1.026-.432l1.192-1.2a2.132,2.132,0,0,0,.569-1.426c0-.066,0-.117-.005-.144l-1.051-11.581c.317-.238.636-.484.965-.739,3.536-2.766,7.6-6.313,11.779-10.286l4.256,4.26a2.314,2.314,0,0,1,.278.365l8.318,14.891a1.451,1.451,0,0,0,2.322.342l2.512-2.51a1.9,1.9,0,0,0,.514-1.31,1.769,1.769,0,0,0-.069-.491l-2.125-7.095,1.729-1.733a1.563,1.563,0,0,0,0-2.205l-1.268-1.267a1.559,1.559,0,0,0-2.062-.129l-.3-.995,1.887-1.886a1.577,1.577,0,0,0,.455-1.107,1.54,1.54,0,0,0-.455-1.1l-1.262-1.262a1.563,1.563,0,0,0-2.217,0l-.013.012-2.089-6.976q1.082-1.032,2.062-1.96C1019.32,677.193,1022.053,674.6,1023.994,672.006Z" transform="translate(-969.276 -660.182)"/>
</svg>


                  
                </div>
                <span>RESERVE FLIGHT</span>
              </button>

              <button class="item active" >
              <svg  width="50" height="35"viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    
  </defs>
  <path class="cls-1" d="M26,6a2,2,0,0,0-2-2H8A2,2,0,0,0,6,6V26a2,2,0,0,0,2,2h8V26H8V6H24v6h2Z" transform="translate(0 0)"/>
  <rect x="10" y="18" width="6" height="2"/>
  <rect x="10" y="14" width="12" height="2"/>
  <path class="cls-1" d="M22,10v2H10V10Z" transform="translate(0 0)"/>
  <path width="40" height="40" class="cls-1" d="M25,23l5,2V23l-5-2.5V18a1,1,0,0,0-2,0v2.5L18,23v2l5-2v3.5L21,28v1l3-1,3,1V28l-2-1.5Z" transform="translate(0 0)"/>
  <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" class="cls-2" width="32" height="32"/>
</svg>
                <div class="group-icon">

                <span>MANAGE FLIGHTS</span>
                </div>
                
              </button>


              <button class="item" onClick={(e) => EditProfileHendler(e)}>
                <div class="group-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>
                </div>
                <span>EDIT PROFILE</span>
              </button>


             


            </div>
          </header>

          {/* SDD    LINE 1666 IN MAIN.CSS*/}



          

<div class="box d2">
<label class="center">All Reserved Flights</label>
  <div class="box f2">
    
    {/* //loop will be created here inside the box f2 :D*/}

    <div class="center"> RESERVATION 1</div>
  <div class="listing-item">
      <figure class="image">
          <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
          <figcaption>
            <div class="caption">
            <h1>Depart Flight</h1>
              <p>Flight Number:</p>
              </div>
          </figcaption>
      </figure>
      <div class="listing">
          <h4>From: </h4>
          <h4>To:</h4>
          <h4>Flight Date:</h4>
          <h4>Flight Time:</h4>
          <h4>Cabin:</h4>
          <h4>Seat:</h4>
          <h4>Total Price:</h4>
          <h4>Booking Number:</h4>
          {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
          {/* <a  class="button-79" role="button" onClick={scrollToBottom} >SELECT SEAT</a> */}
          <Link class="button-79" role="button" to="SeatMap"  smooth={true}>SELECT SEAT</Link>

      </div>
  </div>
  <div class="listing-item">
      <figure class="image">
          <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
          <figcaption>
            <div class="caption">
              <h1>Return Flight</h1>
              <p>Flight Number:</p>
              </div>
          </figcaption>
      </figure>
      <div class="listing">
          <h4>From: </h4>
          <h4>To:</h4>
          <h4>Flight Date:</h4>
          <h4>Flight Time:</h4>
          <h4>Cabin:</h4>
          <h4>Seat:</h4>
          <h4>Total Price:</h4>
          <h4>Booking Number:</h4>
          {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
          {/* <a href="#modal-opened" class="link-1" id="modal-closed">Reserve Flight</a> */}
          {/* <a  class="button-79" role="button"  >SELECT SEAT</a> */}
          {/* <button  class="button-79" role="button" onClick={scrollToBottom}>SELECT SEAT</button> */}
          {/* spy={true} */}
          <Link class="button-79" role="button" to="SeatMap"  smooth={true}>SELECT SEAT</Link>
  
      </div>
  </div>
  <button href="#modal-opened" class="button-70" role="button" >
  <div class="center">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
</div>
  Cancel Reservation
     </button>

     
 {/* //loop will be created here inside the box f2 :D*/}
 
  </div>
  

  
</div>


        </div>
      </form>
    </div>

    
    {/* <script src="js/extention/choices.js"></script>    */}

    {/* < div class="modal-container" id="modal-opened">
   <div class="modal"> */}
      
       <script src="js/extention/choices.js"></script>   

   

   <div class="plane">
  <div class="cockpit">
    <h1>Select Seats</h1>
  </div>
  

  <ol id = 'SeatMap' class="cabin fuselage">
  <SeatMap>
   </SeatMap>
 
</ol>
  
    <br></br>
  </div>


    

     {/* </div>
</div> */}
  
   

       
       
      </>
     
    
    );
    

    

  }
  


  

};
{/* <div id="app"></div> 
  ReactDOM.render(<UserManageBooking />, document.querySelector("#app")); */}

export default UserManageBooking;