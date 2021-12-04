import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import '../css/popup.css';
import '../css/swal.css';
import Swal from 'sweetalert2'

import '../css/main.css';
import '../css/guest.css';



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


   

const UserConfirmBooking = () => {
  // console.log(sessionStorage.getItem('AuthenticationState'));
  // console.log(sessionStorage.getItem('Username'));
 

//   if (sessionStorage.getItem('AuthenticationState') !== "UserAuthenticated") {
//     Login();
//  }

  
 const history = useHistory();
  const [componentSize, setComponentSize] = useState('default');

  const Flight1 = history.location.state?.flight1;
  const Flight2 = history.location.state?.flight2;
  const Adults = history.location.state?.Adults;
  const Children = history.location.state?.Children;


  const [Data, setState] = useState({
    Username: sessionStorage.getItem('Username'),
    Email: "",

    Flight_IDFrom: Flight1._id,
    Flight_NoFrom: Flight1.Flight_No,
    Flight_DateFrom: Flight1.Flight_Date,
    CabinFrom: history.location.state?.CabinFrom,
    SeatsChoosenFrom: "",
    SeatsChoosenFromID: "",


    Flight_IDTo: Flight2._id,
    Flight_NoTo: Flight2.Flight_No,
    Flight_DateTo: Flight2.Flight_Date,
    CabinTo: history.location.state?.CabinTo,
    SeatsChoosenTo: "",
    SeatsChoosenToID: "",

    Adults: Adults,
    Children: Children,

    TotalPrice: (Flight1.Price * Adults) + (Flight1.Price * Children * 0.8) + (Flight2.Price * Adults) + (Flight2.Price * Children * 0.8),
  });
 
  console.log(Data);
 


  useEffect(() => {
   
    console.log(Data['Username'])

    const criteria = {};
    Object.keys(Data).forEach(key => {
   if (key==="Username") {
        criteria[key] = Data[key];
      }
    });

    console.log(criteria)
    axios.post('http://localhost:8000/GetUserInfo', criteria)
    .then(response => {
      console.log(response.data[0].Email);
      setState( prevData => {
        return {...prevData ,['Email']: response.data[0].Email}});
      // console.log(Data.Email);
      //  window.location.reload(false);
      //  form.resetFields();
      //   success(); // data succ added less go
      }).catch(error => {
        console.log(error);
    })


  },[]);

  const success = () => {
    Swal.fire(
      {
      title: 'Flight Booked Successfully!',
      // text: 'continue to Log In',
      icon: 'success',
      confirmButtonText: 'Manage Reservation!',
      confirmButtonColor: '#ff8300',
      // iconColor:'#ff8300' ,
    })
      .then((res) => {
           if(res.isConfirmed){
              console.log('confirm');
              history.push({
                pathname: '/UserManageBooking',
              // state: {
              //   flight1: isdepart,
              //   flight2: isreturn,
              //   CabinFrom: Data.CabinDepart,
              //   CabinTo: Data.CabinDepart,
              //   Adults: Data.Adults,
              //   Children: Data.Children,
              // }
              });
               
          }    
      });
  };

   
  
  const BookFlightHandler = (e) => {
    e.preventDefault();    // prevent reloading the page


    console.log(Data.Email)

    axios.post('http://localhost:8000/createnewReservation', Data)
    .then(response => {
      console.log(response.status);
      success();
      //  window.location.reload(false);
      //  form.resetFields();
      //   success(); // data succ added less go
      }).catch(error => {
        console.log(error);
    })



    // setState({
    //   Flight_No: "",
    //   From: "",  
    //   To: "",
    //   Flight_Date: "", // Data type date
    //   Terminal: "",
    //   Flight_Duration: "",
    //   Economy_Seats: "",
    //   Business_Seats: "",
    //   First_Seats: "",
    //   Economy_Baggage: "",
    //   Business_Baggage: "",
    //   First_Baggage: "",
    //   Economy_Price: "",
    //   Business_Price: "",
    //   First_Price: "",
    //   Available_Seats: "",
    //   })
   
  // };

  };



return (
  <>
    {/* {isdepart ? <p>Length is 1</p>:null} */}
 {/* adasdas */}

  <script src="js/extention/choices.js"></script>   

  {/* asdasdas */}
        
  

<div class="box d">
<label class="center">Depart Flight</label>
  <div class="box f">
{/* 
  {Display1.map(flight =>
      
  <div class="listing-item">
      <figure class="image">
          <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
          <figcaption>
            <div class="caption">
              <h1>{flight.Price}</h1>
              <p>{flight.To }</p>
              </div>
          </figcaption>
      </figure>
      <div class="listing">
          <h4>From: {flight.From}</h4>
          <h4>To:{flight.To}</h4>
          <h4>Flight Date:{moment(flight.Flight_Date).format("YYYY-MM-DD")}</h4>
          <h4>Flight time:{moment(flight.Flight_Date).format("HH:mm")}</h4>
         
          {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
          {/* <button class="button-79" role="button" name={flight._id} onClick={() => departHandler(flight)}>BOOK NOW!</button> */}
      {/* </div>
  </div> */}
 
  


        {/* )} } */}

  </div>
  <label class="center">Return Flight</label>
  
  <div class="box g">


  {/* {Display2.map(flight =>
      
  <div class="listing-item">
      <figure class="image">
          <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
          <figcaption>
            <div class="caption">
              <h1>{flight.Price}</h1>
              <p>{flight.To}</p>
              </div>
          </figcaption>
      </figure>
      <div class="listing">
          <h4>From: {flight.From}</h4>
          <h4>To:{flight.To}</h4>
          <h4>Flight Date:{moment(flight.Flight_Date).format("YYYY-MM-DD")}</h4>
          <h4>Flight time:{moment(flight.Flight_Date).format("HH:mm")}</h4>
         
          {/* <a  class=" button-79"  name={flight._id} onClick={() => returnHandler(flight)} >BOOK NOW!</a> */}
          {/* <button class="button-79" role="button" name={flight._id} onClick={() => returnHandler(flight)}>BOOK NOW!</button> */}


      {/* </div>
  </div> */}

  


        {/* )}
     } */}
  </div>

 {/* <button class="button-79" role="button" name={flight._id} onClick={() => returnHandler(flight)}>Reserve Flight</button> */}

  {/* <a href="#modal-opened" class="link-1" id="modal-closed">Reserve Flight</a> */}

  {/* < div class="modal-container" id="modal-opened">
   <div class="modal">

      <div>
      <div class="modal__details">
      <h4 class="modal__title">Depart Flight Details</h4>
      <p class="modal__description">  Flight Number: {isdepart.Flight_No}     Duration:{isdepart.To}    </p>
      <p class="modal__description"> From : {isdepart.From}     To:{isdepart.To}    </p>
      <p class="modal__description">  Date:{moment(isdepart.Flight_Date).format("YYYY-MM-DD")}  Departure Time:{moment(isdepart.Flight_Date).format("HH:mm")}    </p>
      <p class="modal__description">  Price : {isdepart.Price}      Baggage:{isdepart.Baggage}    </p>
      <p class="modal__description">  Cabin: {"First"}       </p>   
      </div>

      <div class="modal__details">
     
      <h1 class="modal__title"  >Return Flight Details</h1>
      <p class="modal__description">  Flight Number: {isreturn.Flight_No}     Duration:{isreturn.To}    </p>
      <p class="modal__description"> From : {isreturn.From}     To:{isreturn.To}    </p>
      <p class="modal__description">  Date:{moment(isreturn.Flight_Date).format("YYYY-MM-DD")}  Departure Time:{moment(isdepart.Flight_Date).format("HH:mm")}    </p>
      <p class="modal__description">  Price : {isreturn.Price}      Baggage:{isreturn.Baggage}    </p>
      <p class="modal__description">  Cabin: {"First"}      </p>   
    
      <button class="modal__btn">Confirm &rarr;</button>
     <a href="#modal-closed" class="link-2"></a>
     </div>
      
      
     </div> 
   
      
     </div>
  
          

     

</div> */}

</div>


<div>
  <button onClick={(e) => BookFlightHandler(e)}  class="btn-search" type="button">CONFIRM BOOKING</button>
</div>
 
  <script src="js/extention/choices.js"> </script>
  

    
  </>
  
);





};
export default UserConfirmBooking;
