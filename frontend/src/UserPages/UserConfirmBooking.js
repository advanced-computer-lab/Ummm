import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import '../css/popup.css';
import '../css/swal.css';
import Swal from 'sweetalert2'
import Cookies from "js-cookies";


import '../css/main.css';
import '../css/guest.css';
import '../css/creditCard.css';
import $ from "jquery"; 
import {findDOMNode} from 'react-dom'



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

//$('body').on('click', '.qr', function(){//delegated 


$(document).ready(function() { // must reload at least once 

  $('.input-cart-number').on('keyup change', function(){ //jqeury worked finally yaaaaaay
  var $t = $(this);
  
  
  
  var card_number = '';
  $('.input-cart-number').each(function(){
    card_number += $(this).val() + ' ';
    if ($(this).val().length == 4) {
      $(this).next().focus();
    }
  })
  
  $('.credit-card-box .number').html(card_number);
});

$('#card-holder').on('keyup change', function(){
  var $t = $(this);
  $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-holder').on('keyup change', function(){
  var $t = $(this);
  $('.credit-card-box .card-holder div').html($t.val());
});

$('#card-expiration-month, #card-expiration-year').change(function(){
  var m = $('#card-expiration-month option').index($('#card-expiration-month option:selected'));
  var m = (m < 10) ? '0' + m : m;
  var y = $('#card-expiration-year').val().substr(2,2);
  $('.card-expiration-date div').html(m + '/' + y);
})

$('#card-ccv').on('focus', function(){
  $('.credit-card-box').addClass('hover');
}).on('blur', function(){
  $('.credit-card-box').removeClass('hover');
}).on('keyup change', function(){
  $('.ccv div').html($(this).val());
});


/*--------------------
CodePen Tile Preview
--------------------*/

});
   

const UserConfirmBooking = () => {
  // console.log(sessionStorage.getItem('AuthenticationState'));
  // console.log(sessionStorage.getItem('Username'));
 

  if (localStorage.getItem('AuthenticationState') !== "UserAuthenticated") {
    window.open("UserLogin", "_self");
 }
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
    Flight_From: Flight1.From,
    CabinFrom: history.location.state?.CabinFrom,
    SeatsChoosenFrom: "",
    SeatsChoosenFromID: "",


    Flight_IDTo: Flight2._id,
    Flight_NoTo: Flight2.Flight_No,
    Flight_DateTo: Flight2.Flight_Date,
    Flight_To: Flight1.To,
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
    Cookies.setItem("AccessToken",localStorage.getItem('AccessToken'))
    Cookies.setItem("RefreshToken",localStorage.getItem('RefreshToken'))
    axios.post('http://localhost:8000/GetUserInfo', criteria, {withCredentials: true})
    .then(response => {
      localStorage.setItem("AccessToken",Cookies.getItem("AccessToken"))
      document.cookie = 'AccessToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'RefreshToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      console.log(response.data[0].Email);
      setState( prevData => {
        return {...prevData ,['Email']: response.data[0].Email}});
      // console.log(Data.Email);
      //  window.location.reload(false);
      //  form.resetFields();
      //   success(); // data succ added less go
      }).catch(error => {
        if(error.response.status==403){
          history.push({
            pathname: '/LoginPage'
          });
        }
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

    Cookies.setItem("AccessToken",localStorage.getItem('AccessToken'))
    Cookies.setItem("RefreshToken",localStorage.getItem('RefreshToken'))
    axios.post('http://localhost:8000/createnewReservation', Data, {withCredentials: true})
    .then(response => {
      localStorage.setItem("AccessToken",Cookies.getItem("AccessToken"))
      document.cookie = 'AccessToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'RefreshToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      console.log(Data);
      success();
      //  window.location.reload(false);
      //  form.resetFields();
      //   success(); // data succ added less go
      }).catch(error => {
        if(error.response.status==403){
          history.push({
            pathname: '/LoginPage'
          });
        }
        console.log("asdfasfsafdsafsadf")
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
        
  

{/* <div class="box d">
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

  {/* </div> */}
  

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

{/* </div> */} 
<div class="box d2">

  
  
<link rel="icon" type="image/png" href="images/icons/favicon.ico"/>
<link rel="stylesheet" type="text/css" href="vendor/bootstrap/css/bootstrap.min.css"/>
<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css"/>
<link rel="stylesheet" type="text/css" href="fonts/iconic/css/material-design-iconic-font.min.css"/>
<link rel="stylesheet" type="text/css" href="vendor/animate/animate.css"/>
<link rel="stylesheet" type="text/css" href="vendor/css-hamburgers/hamburgers.min.css"/>
<link rel="stylesheet" type="text/css" href="vendor/animsition/css/animsition.min.css"/>
<link rel="stylesheet" type="text/css" href="vendor/select2/select2.min.css"/>
<link rel="stylesheet" type="text/css" href="vendor/daterangepicker/daterangepicker.css"/>
<link rel="stylesheet" type="text/css" href="css/util.css"/>
<link rel="stylesheet" type="text/css" href="css/main.css"/>

  <div class="limiter">
  <div class="container-login100" >
    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
      <form class="login100-form validate-form">
        <span class="login100-form-title p-b-49">
        Payment
        </span>

                 





                  




                 



        {/* <div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
        
        </div>

        <div class="wrap-input100 validate-input m-b-23" data-validate="Password is required">

              
        </div> */}
<div class="checkout">
  <div class="credit-card-box">
    <div class="flip">
      <div class="front">
        <div class="chip"></div>
        <div class="logo">
          <svg version="1.1" id="visa" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="47.834px" height="47.834px" viewBox="0 0 47.834 47.834" >
            <g>
              <g>
                <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                         c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                         c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                         M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                         c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                         c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                         l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                         C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                         C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                         c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                         h-3.888L19.153,16.8z"/>
              </g>
            </g>
          </svg>
        </div>
        <div class="number"></div>
        <div class="card-holder">
          <label>Card holder</label>
          <div></div>
        </div>
        <div class="card-expiration-date">
          <label>Expires</label>
          <div></div>
        </div>
      </div>
      <div class="back">
        <div class="strip"></div>
        <div class="logo">
          <svg version="1.1" id="visa" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="47.834px" height="47.834px" viewBox="0 0 47.834 47.834" >
            <g>
              <g>
                <path d="M44.688,16.814h-3.004c-0.933,0-1.627,0.254-2.037,1.184l-5.773,13.074h4.083c0,0,0.666-1.758,0.817-2.143
                         c0.447,0,4.414,0.006,4.979,0.006c0.116,0.498,0.474,2.137,0.474,2.137h3.607L44.688,16.814z M39.893,26.01
                         c0.32-0.819,1.549-3.987,1.549-3.987c-0.021,0.039,0.317-0.825,0.518-1.362l0.262,1.23c0,0,0.745,3.406,0.901,4.119H39.893z
                         M34.146,26.404c-0.028,2.963-2.684,4.875-6.771,4.875c-1.743-0.018-3.422-0.361-4.332-0.76l0.547-3.193l0.501,0.228
                         c1.277,0.532,2.104,0.747,3.661,0.747c1.117,0,2.313-0.438,2.325-1.393c0.007-0.625-0.501-1.07-2.016-1.77
                         c-1.476-0.683-3.43-1.827-3.405-3.876c0.021-2.773,2.729-4.708,6.571-4.708c1.506,0,2.713,0.31,3.483,0.599l-0.526,3.092
                         l-0.351-0.165c-0.716-0.288-1.638-0.566-2.91-0.546c-1.522,0-2.228,0.634-2.228,1.227c-0.008,0.668,0.824,1.108,2.184,1.77
                         C33.126,23.546,34.163,24.783,34.146,26.404z M0,16.962l0.05-0.286h6.028c0.813,0.031,1.468,0.29,1.694,1.159l1.311,6.304
                         C7.795,20.842,4.691,18.099,0,16.962z M17.581,16.812l-6.123,14.239l-4.114,0.007L3.862,19.161
                         c2.503,1.602,4.635,4.144,5.386,5.914l0.406,1.469l3.808-9.729L17.581,16.812L17.581,16.812z M19.153,16.8h3.89L20.61,31.066
                         h-3.888L19.153,16.8z"/>
              </g>
            </g>
          </svg>

        </div>
        <div class="ccv">
          <label>CCV</label>
          <div></div>
        </div>
      </div>
    </div>
  </div>
  <form class="form" autocomplete="off" novalidate>
    <fieldset>
      <label for="card-number">Card Number</label>
      <input type="num" id="card-number" class="input-cart-number" maxlength="4" />
      <input type="num" id="card-number-1" class="input-cart-number" maxlength="4" />
      <input type="num" id="card-number-2" class="input-cart-number" maxlength="4" />
      <input type="num" id="card-number-3" class="input-cart-number" maxlength="4" />
    </fieldset>
    <fieldset>
      <label for="card-holder">Card holder</label>
      <input type="text" id="card-holder" />
    </fieldset>
    <fieldset class="fieldset-expiration">
      <label for="card-expiration-month">Expiration date</label>
      <div class="select">
        <select id="card-expiration-month">
          <option></option>
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <div class="select">
        <select id="card-expiration-year">
          <option></option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
          <option>2026</option>
          <option>2027</option>
          <option>2028</option>
          <option>2029</option>
          <option>2030</option>
          <option>2031</option>
        </select>
      </div>
    </fieldset>
    <fieldset class="fieldset-ccv">
      <label for="card-ccv">CCV</label>
      <input type="text" id="card-ccv" maxlength="3" />
    </fieldset>

      {/* <button onClick={(e) => BookFlightHandler(e)}  class="btn-search" type="button">CONFIRM BOOKING</button> */}

    <button  onClick={(e) => BookFlightHandler(e)} class="btn"><i class="fa fa-lock"></i> Pay Now</button>
  </form>
</div>





        
        
               
      

        

      </form>
    </div>
  </div>
</div>


<div id="dropDownSelect1"></div>
<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
<script src="vendor/animsition/js/animsition.min.js"></script>
<script src="vendor/bootstrap/js/popper.js"></script>
<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
<script src="vendor/select2/select2.min.js"></script>
<script src="vendor/daterangepicker/moment.min.js"></script>
<script src="vendor/daterangepicker/daterangepicker.js"></script>
<script src="vendor/countdowntime/countdowntime.js"></script>
<script src="js/main.js"></script>
</div>






<div>
</div>
 
  <script src="js/extention/choices.js"> </script>
  

    
  </>
  
);





};
export default UserConfirmBooking;
