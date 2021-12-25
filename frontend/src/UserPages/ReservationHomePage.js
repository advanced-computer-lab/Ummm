import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import React from 'react';
import {Link} from 'react-scroll'
import "./styles.css";
import Swal from 'sweetalert2'
import SeatMap from './SeatMapComponent.js';
import 'antd/dist/antd.css'; 
import '../css/popup.css';

import '../css/guest.css';
import '../css/SelectSeat.scss';
import '../css/header.css';
import swal from 'sweetalert2'
import '../css/BoardingPass.scss';
import '../css/pass.scss';
 import '../css/headerfinal.css';
 import '../css/main.css';
 import Cookies from "js-cookies";


 import '../css/ButtonReservation.css';
 
 import '../css/NewBoardingPass.css';

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
import $ from "jquery"; 
import {findDOMNode} from 'react-dom'
import e from 'cors';



var header = $('body');



var backgrounds = new Array(
    'url(https://i.ibb.co/80T0KvP/riayd3.jpg)'
  , 'url(https://i.ibb.co/kGqzWMY/Aerial-view-of-Berlin-32881394137.jpg)'
  , 'url(https://i.ibb.co/XYDcdfX/a33.jpg)'
  , 'url(https://i.ibb.co/9GwzNW8/swiss.jpg)'
);

var texts = new Array(
  'Riyadh To Cairo'
 ,'Berlin To Iceland'
, 'Amsterdam To Jeddah'
, 'Switzerland To Moscow'
);

var details = new Array(
  'Daily direct flights starting from 199.99$'
 ,'3 direct weekly flights starting from 329.99$'
, 'For your perfect Amsterdam holiday, trust Fly Nawww! Reserve your Flight today starting from 329.99$'
, '20% discount for passengers with reduced mobility'
);
    
var current = 0;


function nextBackground() {
  
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
  
      $('.textNext a').text(texts[current]);
      $('.textNext2 a').text(details[current]);
}


setInterval(nextBackground, 8000);

header.css('background-image', backgrounds[0]);



var marginleft=-10  ;
function MovePlane() {
  // console.log("heeeere")
  if(marginleft<80){
  marginleft=marginleft+5;
  $(".plane2").css("margin-left", marginleft+"px"); 
  }
  else 
  marginleft=-10  ;


}

setInterval(MovePlane, 80);

  // Change background image of a div by clicking on the button
  var ToggleBetween=0 ;
  $('body').on('click', '.learn-more', function(){//delegated
   
    if(ToggleBetween%2==0){
      console.log("iff")
    $('.form-group-hidden').toggleClass('form-group-hidden form-group');
    $('.submit-btn2-hidden-under').toggleClass('submit-btn2-hidden-under submit-btn2-visable-under');
      $(".submit-btn2").css("display", "none");
      $(".booking-form2").css("margin-left", "220px");
      $(".form-header").css("margin-left", "-400px"); 
      $(".arrow").css("display", "none");

      $('.arrowDown1').toggleClass('arrowDown1 arrowDown2');
      // $(".arrowDown").css("display", "inline");
    
    }
    else {  
      console.log("elseee")
      $('.form-group').toggleClass('form-group form-group-hidden');
      $('.submit-btn2-visable-under').toggleClass('submit-btn2-visable-under submit-btn2-hidden-under');
        $(".submit-btn2").css("display", "initial");
        $(".booking-form2").css("margin-left", "40px"); 
        $(".form-header").css("margin-left", "0px"); 
        $(".arrow").css("display", "inline");
        // $(".arrowDown").css("display", "none");
        $('.arrowDown2').toggleClass('arrowDown2 arrowDown1');

    }
    ToggleBetween++ ;
  });
 
  $('body').on('click', '.submit-btn3', function(){//delegated
    $('.submit-btn3').toggleClass('submit-btn3 submit-btn3-rotate');
  });
  $('body').on('click', '.submit-btn3-rotate', function(){//delegated
    $('.submit-btn3-rotate').toggleClass('submit-btn3-rotate submit-btn3');
  });


  $('body').on('click', '.submit-btn2', function(){//delegated
    $(".box2").css("display", "grid"); 
  });

  $('body').on('click', '.submit-btn2-visable-under', function(){//delegated
    $(".box2").css("display", "grid"); 
  });

  $('body').on('click', '.flight-card', function(){//delegated
    // document.getElementById("1").style.backgroundColor= 'red';
    // $(".flight-card").css("background-color", "#74992e"); 
  });

var pre="" ;
var current="" ;

  $('body').on('click', '.flight-card', function(){//delegated
    // $(this).css('background-color', 'red');
    // console.log($(this)) ;
    if(pre==""){
    current =$(this).attr('id')
    document.getElementById(current).style.backgroundColor= 'green'
    pre =$(this).attr('id')
    }
    else {
      pre =current ;
      current=$(this).attr('id') ;
      document.getElementById(current).style.backgroundColor= 'green'
      document.getElementById(pre).style.backgroundColor= '#e8e3e3'
    }
    //  document.getElementById("1").style.backgroundColor= 'green';
    //  document.getElementById("1").style.backgroundColor= 'green';
 });


 var preright="" ;
 var currentright="" ;

 $('body').on('click', '.flight-card2', function(){//delegated
  
  if(preright==""){
    currentright =$(this).attr('id')
  document.getElementById(currentright).style.backgroundColor= 'green'
  preright =$(this).attr('id')
  }
  else {
    preright =currentright ;
    currentright=$(this).attr('id') ;
    document.getElementById(currentright).style.backgroundColor= 'green'
    document.getElementById(preright).style.backgroundColor= '#e8e3e3'
  }
  //  document.getElementById("1").style.backgroundColor= 'green';
  //  document.getElementById("1").style.backgroundColor= 'green';
});

  

  
// var $headline = $('.headline'),
//     $inner = $('.inner'),
//     $nav = $('nav'),
//     navHeight = 75;

// $(window).scroll(function() {
  

//   // var scrollTop = $(window).scrollTop(),
//   var scrollTop = ($(window).scrollTop() || $("body").scrollTop()),
//       headlineHeight = $headline.outerHeight() - navHeight,
//       navOffset = $nav.offset().top;

//   $headline.css({
//     'opacity': (1 - scrollTop / headlineHeight)
//   });
//   $inner.children().css({
//     'transform': 'translateY('+ scrollTop * 0.4 +'px)'
//   });
//   if (navOffset > headlineHeight) {
//     $nav.addClass('scrolled');
//   } else {
//     $nav.removeClass('scrolled');
//   }
// });


const ReservationHomePage = () => {
//   if (localStorage.getItem('AuthenticationState') !== "UserAuthenticated") {
//     window.open("UserLogin", "_self");
//  }

 const history = useHistory();
 const [isLoading, setLoading] = useState(true);

  const criteria = {};
  const [Result1, setResult1] = useState();
  const [Result2, setResult2] = useState();
  const [Guard, setGuard] = useState();
  // const [Guard, setGuard] = useState(true);
  criteria["Username"]= sessionStorage.getItem("Username");
  const criteria1 = {};
  const [Reservations, setallReservation] = useState();
  const [mapped, setmapped] = useState(false);
  // const [Available, setAvailable] = useState();
  const [reserv, setreserv] = useState();
  const [data1, setData] = useState();
  const [bothselected, setbothselected] = useState(true);

  const [flight1, setflight1] = useState();
  const [flight2, setflight2] = useState();

  const [isdepart, setdepart] = useState();
  const [isreturn, setreturn] = useState();

  const [Display1, setDisplay1] = useState([]);
  const [Display2, setDisplay2] = useState([]);


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
        Adults: "",
        Children:"",
        CabinDepart: "",
        CabinReturn: "",

  });

  const [Temp1, setTemp1] = useState({
    Flight_No: "",
    From: "",  
    To: "",
    Flight_Date: "", // Data type date
    Terminal: "",
    Flight_Duration:"",

    Seats: "",
    Baggage: "",
    Price: "",
  });

  const [Temp2, setTemp2] = useState({
    Flight_No: "",
    From: "",  
    To: "",
    Flight_Date: "", // Data type date
    Terminal: "",
    Flight_Duration:"",

    Seats: "",
    Baggage: "",
    Price: "",
  });

  const changeHander = (e) => {
    console.log(moment(Data.Flight_Date));

    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };

  const departHandler = (flight) => {
    setdepart( flight )
    //console.log(flight) ;
   
    };

    const returnHandler = (flight) => {
      setreturn( flight )
      //console.log(flight) ;
      };


  

  function switchText() {
    console.log("wow")
    var obj1 = document.getElementById('left').value;
    var obj2 = document.getElementById('right').value;

    var temp = obj1;
    obj1 = obj2;
    obj2 = temp;
    
    
    document.getElementById('left').value = obj1;
    document.getElementById('right').value = obj2;
  }

  
  
 

  useEffect(() => {
   
    if(Result1 && Result2 && Guard === true)
    {
    

      var seatcabin1 = Data.CabinDepart+'_Seats';
      var baggagecabin1 = Data.CabinDepart+'_Baggage';
      var pricecabin1 = Data.CabinDepart+'_Price';

      var seatcabin2 = Data.CabinReturn+'_Seats';
      var baggagecabin2 = Data.CabinReturn+'_Baggage';
      var pricecabin2 = Data.CabinReturn+'_Price';
      // console.log(Data.CabinDepart+'_Price');
      var seatsrequested = Data.Adults + Data.Children
      const FilteredResult1 =[];
      const FilteredResult2 =[];
      console.log(Result1);

     // var minFlightDate = Result1[0]['Flight_Date'];
      var minFlightDate = new Date();

    
      console.log(Result1)
      console.log(Result2)
      


      Object.keys(Result1).forEach(AllFlights => {
        // if(Result1[key].seatavaliable)
        //  console.log(moment(minFlightDate).isSameOrAfter(moment(Result1[AllFlights]['Flight_Date'])))
        if(moment(minFlightDate).isSameOrAfter(moment(Result1[AllFlights]['Flight_Date']))) {
          minFlightDate = moment(Result1[AllFlights]['Flight_Date']);
          // console.log(minFlightDate);
        }
         if(Result1[AllFlights][seatcabin1]<seatsrequested){
          return;
         }
          else{
            Object.keys(Result1[AllFlights]).forEach(DetailsPerFlight => {
              if(DetailsPerFlight in Temp1){
                // console.log(DetailsPerFlight)
                // console.log(DetailsPerFlight in Temp1)
                Temp1[DetailsPerFlight] = Result1[AllFlights][DetailsPerFlight]; 
              }
            });
            Temp1['Seats'] = Result1[AllFlights][seatcabin1]; 
            Temp1['Baggage'] = Result1[AllFlights][baggagecabin1]; 
            Temp1['Price'] = Result1[AllFlights][pricecabin1]; 
            // console.log(Result1[AllFlights]['_id'])
            Temp1['_id'] = Result1[AllFlights]['_id']; 
            var newObject = JSON.parse(JSON.stringify(Temp1));
            FilteredResult1[AllFlights] = newObject;
          }

        });
        setDisplay1(FilteredResult1);


        console.log(minFlightDate);

        Object.keys(Result2).forEach(AllFlights => {
          // if(Result1[key].seatavaliable)
          console.log(moment(Result2[AllFlights]['Flight_Date']))
          console.log(Data.Flight_Date_Depart)
          console.log(moment(Result2[AllFlights]['Flight_Date']).isSameOrAfter(Data.Flight_Date_Depart)
          || moment(Result2[AllFlights]['Flight_Date']).isSameOrAfter(minFlightDate))
           if(Result2[AllFlights][seatcabin2]<seatsrequested){
            return;
           }
            else if(moment(Result2[AllFlights]['Flight_Date']).isSameOrAfter(Data.Flight_Date_Depart)
            || moment(Result2[AllFlights]['Flight_Date']).isSameOrAfter(minFlightDate)) {
         
              Object.keys(Result2[AllFlights]).forEach(DetailsPerFlight => {
                if(DetailsPerFlight in Temp2){
                  // console.log(DetailsPerFlight)
                  // console.log(DetailsPerFlight in Temp1)
                  Temp2[DetailsPerFlight] = Result2[AllFlights][DetailsPerFlight]; 
                }
              });
              console.log("innnn");
              Temp2['Seats'] = Result2[AllFlights][seatcabin2]; 
              Temp2['Baggage'] = Result2[AllFlights][baggagecabin2]; 
              Temp2['Price'] = Result2[AllFlights][pricecabin2]; 
              Temp2['_id'] = Result2[AllFlights]['_id']; 
              var newObject = JSON.parse(JSON.stringify(Temp2));
              console.log(newObject)
              FilteredResult2[AllFlights] = newObject;
             console.log(FilteredResult2);
          }
          });
          setDisplay2(FilteredResult2);
          
    }

    if(Result1 && Result2 && Guard === true){
      setTimeout(() => {
        setGuard(false);
      }, 500);
    }

    if(Display1 && Display2){
      setLoading(false);
         console.log(Display1);
      console.log(Display2);
    }

    if(isdepart && isreturn){
     document.getElementById("yourButtonID").style.visibility="visible";
     setbothselected(false);
    // document.getElementById("yourButtonID").style.backgroundColor="red";
    
    }


  },[Result1,Result2,isdepart,isreturn,Display1,Display2,Guard]);





  const AboutUs = () => { // e will contain the reservation number 
    Swal.fire({
      title: 'Fly Nawww is a Saudi Arabian leading low-cost carrier with a fleet of 34 aircrafts, operating more than 1500 weekly flights to 35 domestic and international destinations.',
      confirmButtonText: 'Hmm.. Ok',
      confirmButtonColor: '#ff8300',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  };


  const Vision = () => { // e will contain the reservation number 
    Swal.fire({
      title: 'To act responsibly in developing the market, evolving our employees, supporting our partners and local communities.',
      confirmButtonText: 'Hmm.. Ok',
      confirmButtonColor: '#ff8300',
      showClass: {
        popup: 'animateanimated animatefadeInDown'
      },
      hideClass: {
        popup: 'animateanimated animatefadeOutUp'
      }
    })
  };
  const ContactUs = () => { // e will contain the reservation number 
    Swal.fire({
      title: 'Call:011414656668',
      confirmButtonText: 'Hmm.. Ok',
      confirmButtonColor: '#ff8300',
      showClass: {
        popup: 'animateanimated animatefadeInDown'
      },
      hideClass: {
        popup: 'animateanimated animatefadeOutUp'
      }
    })
  };

 
  const LogOutHandler = () => {
    var userid = localStorage.getItem('UserID')
   axios.delete('http://localhost:8000/logout',{data: {ID: userid}})
   localStorage.clear()
    window.open("UserLogin", "_self");
  
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
  const SearchFlightHandler = event => {
    history.push({
        pathname: '/UserSearchFlight',
        state: { detail: 'some_value' }
    });
 };

const EditProfileHendler = event => {
  history.push({
      pathname: '/UserEditProfile',
      state: { detail: 'some_value' }
  });
};


const senddata = (reserv) => {

  
  // setGuard(true);
}

  
// const ScrollToBottom = () => {
//   window.scrollTo(0,document.body.scrollHeight);
// }

const searchHandler = (e) => {
  e.preventDefault(); 
 
  /// setDisplay1([]);
  // setDisplay2([]);

  const criteria1 = {};
  const criteria2 = {};
  var dd;


  console.log(Data);

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
  console.log(criteria2);

 // prevent reloading the page
//  console.log(Data.Flight_Date_Depart);
//  if(Data.From.length==3 && Data.To.length==3 &&Data.Flight_Date_Depart!=="" &&Data.Flight_Date_Return!==""){


  // Cookies.setItem("AccessToken",localStorage.getItem('AccessToken'))
  // Cookies.setItem("RefreshToken",localStorage.getItem('RefreshToken'))

  axios.post('http://localhost:8000/usersearchflight', criteria1,)//{withCredentials: true})
  .then(response => {
    // localStorage.setItem("AccessToken",Cookies.getItem("AccessToken"))
    // document.cookie = 'AccessToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // document.cookie = 'RefreshToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

    setResult1(response.data);
    //  console.log(Result1);
     }).catch(error => {
      // if(error.response.status==403){
      //   history.push({
      //     pathname: '/UserLogin'
      //   });
      // }
    console.log(error);
  })

  // Cookies.setItem("AccessToken",localStorage.getItem('AccessToken'))
  // Cookies.setItem("RefreshToken",localStorage.getItem('RefreshToken'))

  axios.post('http://localhost:8000/usersearchflight', criteria2)//,{withCredentials: true})
  .then(response => {
    // localStorage.setItem("AccessToken",Cookies.getItem("AccessToken"))
    // document.cookie = 'AccessToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    // document.cookie = 'RefreshToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setResult2(response.data);
    //  console.log(Result2);
     }).catch(error => {
      // if(error.response.status==403){
      //   history.push({
      //     pathname: '/UserLogin'
      //   });
      // }
    console.log(error);
  })
  // console.log("woooooooooow")
  // console.log(Result1.Adults)
  // console.log(Result1.Children)

  setGuard(true);

  // console.log(Result1);
  // console.log(Result2);


  // setState({
  //   Flight_No: "",
  //     From: "",  
  //     To: "",
  //     Flight_Date_Depart: "", // Data type date
  //     Flight_Date_Return: "", // Data type date
  //     Terminal: "",
  //     Flight_Duration:"",
  //     Seats: "",
  //     Baggage: "", 
  //     Price: "",

  //     Adults: "",
  //     Children:"",
  //     CabinDepart: "",
  //     CabinReturn: "",
  //   })


  // }

    // else if(Data.From.length<3 ){
    //   warning1();
    // }
    // else if(Data.To.length<3 ){
    //   warning2();
    // }
    // else if(Data.Flight_Date_Depart=="" ){
    //   warning3();
    // }
    // else if(Data.Flight_Date_Return=="" ){
    //   warning4();
    // }

};


const parentToChild = (res,from) => {
  console.log(from);
   setmapped(false);
  var ID;
  if(from==true)
    ID = res.Flight_IDFrom
 else
   ID = res.Flight_IDTo
 
   Cookies.setItem("AccessToken",localStorage.getItem('AccessToken'))
         Cookies.setItem("RefreshToken",localStorage.getItem('RefreshToken'))
  axios.post('http://localhost:8000/flightmap',{data: {var1 : ID} }, {withCredentials: true})
  .then((result)=> {
    localStorage.setItem("AccessToken",Cookies.getItem("AccessToken"))
    document.cookie = 'AccessToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = 'RefreshToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    setreserv({reserv: res,from: from, Available:result.data[0].Available_Seats});
      // setAvailable(result.data[0].Available_Seats);
      // console.log(Available)
    })
    .catch((error)=>{
      if(error.response.status==403){
        history.push({
          pathname: '/LoginPage'
        });
      }
    })

   
  // setmapped(true);
}
 const swalWithBootstrapButtons = Swal.mixin({
    // customClass: {
    //   confirmButton: 'btn btn-success',
    //   cancelButton: 'btn btn-danger'
    // },
    // buttonsStyling: false
  })

const success = () => {




  swalWithBootstrapButtons.fire({
  
        html:
        '<div class="box d2">'+

  
  




        '<div class="limiter">'+
        '<div class="container-login100" >'+
          '<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">'+
            '<form class="login100-form validate-form">'+
              '<span class="login100-form-title p-b-49">'+
               'User Create Account'+ 
              '</span>'+
      
                        '<div class="wrap-input100 validate-input m-b-23" data-validate = "FirstName is reauired">'+
                           '<div class="grid-container-EditUser">'+
                
                            '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">'+
      '<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>'+
      '</svg>'+     
                            '<span >'+
              'First Name'+
              '</span>'+
                        '</div >'+
                        
                '<input class="input100"  name="FirstName" placeholder="Type your FirstName" ></input>'+
                            '<span class="focus-input100" ></span>'+
              '</div>'+
      
      
      
      
      
                        '<div class="wrap-input100 validate-input m-b-23" data-validate = "LastName is reauired">'+
                        '<div class="grid-container-EditUser">'+
                
                            '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">'+
      '<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>'+
      '</svg>'+
                           
                '<span >'+
              'Last Name'+
              '</span>'+
                        '</div >'+
                '<input class="input100"  name="LastName" placeholder="Type your LastName" '+'value={Data.LastName} onChange={(e) => changeHander(e)}></input>'+
                            '<span class="focus-input100" ></span>'+
              '</div>'+
      
      
      
      
                        '<div class="wrap-input100 validate-input m-b-23" data-validate = "date of Birth is reauired">'+
                        '<div class="grid-container-EditUser">'+
                
                            '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">'+
      '<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>'+
      '</svg>'+  
      '<span >'+
               'Date Of Birth'+
              '</span>'+
                        '</div >'+
                        
                        '<DatePicker   type="date" format="DD-MM-YYYY" defaultPickerValue={now2} disabledDate={d => d.isAfter(now)} value={Data.Date_of_Birth} name="Date_of_Birth" onChange={(date) => setState(prevData => {return {...prevData ,Date_of_Birth: date}})  }/>'+
                            '<span class="focus-input100" ></span>'+
              '</div>'+
      
      
      
      
                        '<div class="wrap-input100 validate-input m-b-23" data-validate = "Passport Number is required">'+
                        '<div class="grid-container-EditUser">'+
                            '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-credit-card-2-front-fill" viewBox="0 0 16 16">'+
      '<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>'+
      '</svg>'+
      '<span >'+
              'Passport No'+
              '</span>'+
                        '</div >'+   
                '<input class="input100"  name="PassPort_No" placeholder="Type your Passport Number"    value={Data.PassPort_No} onChange={(e) => changeHander(e)}></input>'+
                            '<span class="focus-input100" ></span>'+
              '</div>'+
      
      
      
      
                        '<div class="wrap-input100 validate-input m-b-23" data-validate = "Email is required">'+
                        '<div class="grid-container-EditUser">'+
                            '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">'+
      '<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>'+
      '</svg>'+
      '<span >'+
               'Email'+
              '</span>'+
                        '</div>'+
                '<input class="input100"  name="Email" placeholder="Type your Email" value={Data.Email} onChange={(e) => changeHander(e)}></input>'+
                            '<span class="focus-input100" ></span>'+
              '</div>'+
      
      
      
      
              '<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">'+
                        '<div class="grid-container-EditUser">'+
                            '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">'+
      '<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>'+
      '<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>'+
      '</svg>'+
      '<span >'+
               'Username'+
              '</span>'+
                        '</div>'+
                '<input class="input100"  name="Username" placeholder="Type your Username" value={Data.Username} onChange={(e) => changeHander(e)}></input>'+
                            '<span class="focus-input100" ></span>'+
              '</div>'+
      
              '<div class="wrap-input100 validate-input m-b-23" data-validate="Password is required">'+
      
                        '<div class="grid-container-EditUser"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">'+
      '<path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>'+
      '</svg>'+
      '<span >'+
               'Password'+
              '</span>'+
                        '</div>'+
                '<input class="input100" type="password" name="Password" placeholder="Type your Password" value={Data.Password} onChange={(e) => changeHander(e)}></input>'+
                '<span class="focus-input100" ></span>'+
              '</div>'+
              
              
      
                        
      
      
              
                        '<a class="button-60 center20" role="button" onClick={(e) => submitHandler(e)}>Create Account</a>'+
                        '<a  class="button-60 center20" role="button" onClick={() => LoginHandler()}>Log In</a>'+
                       
              '<div class="txt1 text-center p-t-54 p-b-20">'+
                
              '</div>'+
      
              
      
              '<div class="flex-col-c p-t-155">'+
                
      
                
              '</div>'+
            '</form>'+
          '</div>'+
        '</div>'+
      '</div>'+
      
      
      
      '</div>'
  
  
  
  
  
  
  ,
  
  
          imageWidth: 1200,
          imageHeight: 700,
          customClass: 'swal-wide',
          imageAlt: 'A tall image',
           cancelButtonColor:'#ff2626' ,
          showCancelButton: true,
          cancelButtonText: 'Cancel!',
          confirmButtonText: 'Confirm Choosen Reservation!',
    
    reverseButtons: false,
    confirmButtonColor: '#ff8300',
    // confirmButtonColor: '#00D100', //GREEN WALA ORANGEEE ?
  
  
      
           
  
          // confirmButtonText: 'Log In',
          // iconColor:'#ff8300' ,
  
    // title: 'Are you sure?',
    // text: "You won't be able to revert this!",
    // icon: 'warning',
    // showCancelButton: true,
    // confirmButtonText: 'Log In!',
    // cancelButtonText: 'Cancel!',
    // reverseButtons: true
  
  
  
  }).then((result) => {
    if (result.isConfirmed) {
  
      if (localStorage.getItem('AuthenticationState') === "UserAuthenticated") {
                  history.push({
                    pathname: '/UserConfirmBooking',
                  state: {
                    flight1: isdepart,
                    flight2: isreturn,
                    CabinFrom: Data.CabinDepart,
                    CabinTo: Data.CabinReturn,
                    Adults: Data.Adults,
                    Children: Data.Children,
                  }
                  });
               }
          
  else{
      swalWithBootstrapButtons.fire(
        {
        title: 'Please Log In to continue',
        // text: 'Please Log In to continue',
        icon: 'warning',
        confirmButtonText: 'Log In',
        confirmButtonColor: '#ff8300',
        // iconColor:'#ff8300' ,
      })
        .then((res) => {
             if(res.isConfirmed){
                console.log('confirm');
                window.open("UserLogin", "_self");
                 
            }    
        });
      }
    } 
    else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
     
    }
  })
  
  
    };


 


















 

    // if(bothselected){
    return(
      <>
<header >
  <nav>
    <div class="logo"></div>
    <ul>
    {/* <div class="group-icon">
              <svg width="20px" height="20px" viewBox="0 0 58.568 58.568" xmlns="http://www.w3.org/2000/svg">
  <path id="flight_plane" data-name="flight plane" d="M1023.994,672.006c2.4-3.218,3.843-6.559,3.85-8.946a3.323,3.323,0,0,0-.453-1.828,1.706,1.706,0,0,0-.578-.584,3.265,3.265,0,0,0-1.852-.466c-2.381,0-5.723,1.442-8.942,3.849a77.166,77.166,0,0,0-8.806,8.487q-.917.966-1.934,2.031l-6.976-2.091.02-.02a1.566,1.566,0,0,0-.005-2.2l-1.259-1.261a1.571,1.571,0,0,0-1.11-.461,1.541,1.541,0,0,0-1.1.458l-1.885,1.886-1-.3a1.563,1.563,0,0,0-.125-2.063l-1.266-1.265a1.568,1.568,0,0,0-1.109-.457,1.534,1.534,0,0,0-1.1.458l-1.73,1.73-7.094-2.125a1.775,1.775,0,0,0-.507-.072,1.875,1.875,0,0,0-1.311.531l-2.494,2.494a1.463,1.463,0,0,0-.439,1.029,1.433,1.433,0,0,0,.761,1.284l14.918,8.334a2.607,2.607,0,0,1,.362.275l4.253,4.252c-3.978,4.191-7.522,8.25-10.284,11.781-.258.328-.5.649-.742.965l-11.541-1.048a1.573,1.573,0,0,0-.2-.012,2.127,2.127,0,0,0-1.429.591l-1.163,1.161a1.449,1.449,0,0,0-.446,1.029,1.418,1.418,0,0,0,.839,1.3l8.119,3.857a1.843,1.843,0,0,1,.311.223l.674.668a4.938,4.938,0,0,0-.325,1.561,2.053,2.053,0,0,0,.567,1.5l.029.026.008.005a2.056,2.056,0,0,0,1.493.56,4.964,4.964,0,0,0,1.548-.322l.684.682a1.956,1.956,0,0,1,.212.3l3.848,8.1a1.435,1.435,0,0,0,1.294.851h.008a1.446,1.446,0,0,0,1.026-.432l1.192-1.2a2.132,2.132,0,0,0,.569-1.426c0-.066,0-.117-.005-.144l-1.051-11.581c.317-.238.636-.484.965-.739,3.536-2.766,7.6-6.313,11.779-10.286l4.256,4.26a2.314,2.314,0,0,1,.278.365l8.318,14.891a1.451,1.451,0,0,0,2.322.342l2.512-2.51a1.9,1.9,0,0,0,.514-1.31,1.769,1.769,0,0,0-.069-.491l-2.125-7.095,1.729-1.733a1.563,1.563,0,0,0,0-2.205l-1.268-1.267a1.559,1.559,0,0,0-2.062-.129l-.3-.995,1.887-1.886a1.577,1.577,0,0,0,.455-1.107,1.54,1.54,0,0,0-.455-1.1l-1.262-1.262a1.563,1.563,0,0,0-2.217,0l-.013.012-2.089-6.976q1.082-1.032,2.062-1.96C1019.32,677.193,1022.053,674.6,1023.994,672.006Z" transform="translate(-969.276 -660.182)"/>
</svg>   
                </div> */}
      {/* <li><a href="#">Log out</a></li> */}
      <li><a href="#" onClick={() => success()}>Sign Up</a></li>
      <li><a href="#">Login In</a></li>
      <li><a href="#">Log Out</a></li>
    </ul>
  </nav>
  <header>
    <div class="headline">
      <div class="inner">

      <div class="textNext">
          <a class="first">Riyadh To Cairo</a>
        </div>
        {/* <a class="textNext">Hello</a> */}
        
        <div class="textNext2">
          <a class="first">Daily direct flights starting from 199.99$</a>
        </div>
        
        <div>
  {/* <p class="first">My name is <span class="emphasis">(pick a name!)</span>.</p> */}
</div>






      </div>
    </div>
  </header>
  
    
      </header>


    <form>
      <fieldset>
      
      </fieldset>
      <div class="inner-form">
       

        {/* SDD    THE MAIN FORM THAT MUST BE REPLACED EACH TIME*/}
        <div class="main-form-search" id="main-form">     
      
	
	
		
			
					<div class="booking-form2"> 
						<div class="form-header">
							<h1>Make your reservation</h1>
						</div>
						
            <div class="row">
								<div class="col-md-6">
									<div class="form-group-stay">
										<input class="form-control2" type="text" name="From" maxLength="3"  placeholder="Select Depart Flight"  id="left" value={Data.From} onChange={(e) => changeHander(e)}/>
										<span class="form-label">From</span>
									</div>
								</div>

                <button type="button" class="submit-btn3" onClick={() => switchText()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"></path>
</svg>
              </button>

                <div class="col-md-6">
									<div class="form-group-stay">
										<input class="form-control2" type="text" name="To" maxLength="3"  placeholder="Select Destination Flight" id="right" value={Data.To} onChange={(e) => changeHander(e)} />
										<span class="form-label">To</span>
									</div>
								</div>

               
                
                <button  class="submit-btn2" type="button" onClick={(e) => searchHandler(e)}>Search Now</button>

             
							</div>
              <div class="row-HiddenThenVisable">
              <div class="col-md-6">
									<div class="form-group-hidden">
                 
                  <div class="form-control2" type="text" >
                    <span class="date-form">Depart Date</span>
                  <DatePicker  style={{ 
                    borderTopColor:"transparent",
                    borderBottomColor:"transparent",
                    borderLeftColor:"transparent",
                    borderRightColor:"transparent",
                    // forcedColorAdjust:"red",
                    // stopColor: "#ccc",
                    // stopColor: "rgb(255, 255, 255)",
                    minWidth:"400px", 
                    marginTop: "25px", 
                    backgroundColor:"transparent",
                    Color:"white",    
          }} format="DD-MM-YYYY" value={Data.Flight_Date_Depart} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(new Date())}
             name="Depart" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date_Depart: date}}) 
      }/>
    </div>
                
									</div>
								</div>
                <div class="col-md-6">
									<div class="form-group-hidden">
                  <div class="form-control2" type="text" >
                    <span class="date-form">Return Date</span>
                  <DatePicker  style={{  
                     borderTopColor:"transparent",
                     borderBottomColor:"transparent",
                     borderLeftColor:"transparent",
                     borderRightColor:"transparent",
                     minWidth:"400px", 
                     marginTop: "25px",
                    backgroundColor:"transparent",
                    Color:"white",
            
          }}type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Return} format="DD-MM-YYYY"
        showTime="false" disabledDate={d => d.isBefore(Data.Flight_Date_Depart)}
           name="Return" onChange={(date) => setState(prevData => {
              return {...prevData ,Flight_Date_Return: date}}) 
    }/>
    </div>
									</div>
								</div>
                </div>

                
                <div class="row-HiddenThenVisable">
              <div class="col-md-6">
              <div class="form-group-hidden">
										<select class="form-control2"   name="CabinDepart"  value={Data.CabinDepart}  onChange={(e) => changeHander(e)}>
                   
                      <option  value={"First"}>First</option>
											<option value={"Business"}>Business</option>
											<option value={"Economy"}>Economy</option>
										</select>
    
										<span class="select-arrow"></span>
										<span class="date-form">Depart Cabin</span>
									</div>
								</div>
                <div class="col-md-6">
									<div class="form-group-hidden">
									<select class="form-control2" name="CabinReturn"  value={Data.CabinReturn} onChange={(e) => changeHander(e)}>
											{/* <option value={Data.CabinReturn}  selected hidden>Select Return Cabin</option> */}

											<option  value={"First"}>First</option>
											<option value={"Business"}>Business</option>
											<option value={"Economy"}>Economy</option>
										</select>
                <span class="select-arrow"></span>
                <span class="date-form" >Return Cabin</span>
									</div>
								</div>
                </div>


                <div class="row-HiddenThenVisable">
              <div class="col-md-6">
									<div class="form-group-hidden">
									<div class="form-control2" type="text" >
              <span class="date-form">Adults</span>
              <Form.Item > 
    <InputNumber atePicker  style={{  
                 borderTopColor:"transparent",
                 borderBottomColor:"transparent",
                 borderLeftColor:"transparent",
                 borderRightColor:"transparent",
                 minWidth:"390px", 
                 marginTop: "25px",
                backgroundColor:"transparent",
                Color:"white",
                textAlign:"center",
                       
        
      }}type="Number" name="Adults" value={Data.Adults} max={500} min={0} placeholder="No Of Adults" onChange={(number) => setState(prevData => {
        return {...prevData ,Adults: number}}) 
    }/>
  </Form.Item>
</div>
									</div>
								</div>
                <div class="col-md-6">
									<div class="form-group-hidden">
                  <div class="form-control2" type="text" >
              <span class="date-form">Children</span>
              <Form.Item > 
    <InputNumber atePicker  style={{  
                 borderTopColor:"transparent",
                 borderBottomColor:"transparent",
                 borderLeftColor:"transparent",
                 borderRightColor:"transparent",
                 minWidth:"390px", 
                 marginTop: "25px",
                backgroundColor:"transparent",
                Color:"white",
                textAlign:"center",
        
      }}type="Number" name="Children" value={Data.Children} max={500} min={0} placeholder="No Of Children" onChange={(number) => setState(prevData => {
        return {...prevData ,Children: number}}) 
    }/>
  </Form.Item>
</div>
									</div>
								</div>
                </div>


                   {/* this button will be hidden until we pressed on expand  */}
                <div class="row">
                <button  class="submit-btn2-hidden-under" type="button" onClick={(e) => searchHandler(e)}>Search Now</button>
                </div>


               

                
                <button class="learn-more" type="button">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                     </span>
                </button>

                <button class="learn-more" type="button">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrowDown1"></span>
                     </span>
                </button>        
	</div>
  
 





 
		{/* <div class="promofamily">
<div class="promo" >
  <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1554620121-59e7f3f6e3a4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/></div>
  <h6 class="title" data-cta="">Nightlife</h6>
  <h class="title2">Discover the hidden<br></br> island before anyone!!</h>
</div>
<div class="promo" >
  <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1523806762236-1d3a6b7eb3fd?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/></div>
  <h6 class="title" data-cta="">Quiet Time</h6>
  <h class="title2">Discover the hidden<br></br> island before anyone!!</h>
</div>
<div class="promo" >
  <div class="image-wrapper"><img src="https://nypost.com/wp-content/uploads/sites/2/2021/09/travel-maldives-feature.jpg?quality=80&strip=all"/></div>
  <h6 class="title" data-cta="">Maldives</h6>
  <h class="title2">Need A break from boring routine?,<br></br> explore photos taken by Fly Nawww clients </h>

</div>
<div class="promo" >
  <div class="image-wrapper"><img src="https://d3ese01zxankcs.cloudfront.net/Pictures/2000xAny/3/9/4/67394_The-Aurora-Borealis-covers-the-night-sky-of-Greenlands-capital---Nuuk.png"/></div>
  <h6 class="title" >GreenLand </h6>
  <h class="title2">Enjoy the northern lights in Greenland,<br></br> explore photos taken by Fly Nawww clients </h>
</div>
	
	</div> */}



       
        </div>
      </div>
    </form>


    
  
    <div class="box2 d">
<label class="center">Depart Flight</label>
  <div class="box f">

  
  {Display1.map(flight =>{
  

return (
<button  type="button" class="flight-card" id={flight._id}>
  
<div class="flight-card-content">
  <div class="flight-row">
    <div class="flight-from">
      <span class="from-code">{flight.From}</span>
  
    </div>
    <div class="plane"></div>

    <div class="plane2">
      <img src="https://www.svgrepo.com/show/197156/airplane-flight.svg" alt=""/>
      </div>
 
    <div class="plane"></div>

    <div class="flight-to">
      <span class="to-code">{flight.To}</span>
    </div>
   
  </div>

  <div class="flight-details-row">
    <div class="flight-operator">
     
      <span class="detail">{moment(flight.Flight_Date).format("YYYY-MM-DD")}<br></br>
      {moment(flight.Flight_Date).format("HH:mm")}
      </span>
   
    </div>
    <div class="flight-number">
   
     <span class="detail2">{flight.Price}$</span>
    </div>
    <div class="flight-class">
    
      <span class="detail">{flight.CabinDepart}</span>
    </div>
  </div>

</div>
</button> )

})
}

  {/* <button  type="button" class="flight-card">
  
  <div class="flight-card-content">
    <div class="flight-row">
      <div class="flight-from">
        <span class="from-code">CAI</span>
    
      </div>
      <div class="plane"></div>

      <div class="plane2">
        <img src="https://www.svgrepo.com/show/197156/airplane-flight.svg" alt=""/>
        </div>
   
      <div class="plane"></div>

      <div class="flight-to">
        <span class="to-code">DMM</span>
      </div>
     
    </div>

    <div class="flight-details-row">
      <div class="flight-operator">
       
        <span class="detail">2020-12-12 <br></br>
              20:15
        </span>
     
      </div>
      <div class="flight-number">
     
       <span class="detail2">200.99$</span>
      </div>
      <div class="flight-class">
      
        <span class="detail">Economy</span>
      </div>
    </div>

  </div>
</button>  */}
  
  
  </div>
  
  <label class="center">Return Flight</label>
  <div class="box g">
  {Display2.map(flight =>

<button  type="button" class="flight-card2" id={flight._id} >
  
  <div class="flight-card-content">
    <div class="flight-row">
      <div class="flight-from">
        <span class="from-code">{flight.From}</span>
    
      </div>
      <div class="plane"></div>
  
      <div class="plane2">
        <img src="https://www.svgrepo.com/show/197156/airplane-flight.svg" alt=""/>
        </div>
   
      <div class="plane"></div>
  
      <div class="flight-to">
      <span class="to-code">{flight.To}</span>
    </div>
     
    </div>
  
    <div class="flight-details-row">
      <div class="flight-operator">
       
        <span class="detail">{moment(flight.Flight_Date).format("YYYY-MM-DD")}<br></br>
        {moment(flight.Flight_Date).format("HH:mm")}
        </span>
     
      </div>
      <div class="flight-number">
     
       <span class="detail2">{flight.Price}$</span>
      </div>
      <div class="flight-class">
      
        <span class="detail">{flight.CabinDepart}</span>
      </div>
    </div>
  
  </div>
  </button> 

)}

  
  </div>



  <a id="yourButtonID" class="link-1">Reserve Flight </a>

  < div class="modal-container" id="modal-opened">
   <div class="modal">


   
   
      
     </div>
  
          

     

</div>
</div>

   


    


       
       
      </>
     
     
    );
  
  // }
  //   else{
  //     return(
  //       <>
  // <header >
  //   <nav>
  //     <div class="logo"></div>
  //     <ul>
  //     {/* <div class="group-icon">
  //               <svg width="20px" height="20px" viewBox="0 0 58.568 58.568" xmlns="http://www.w3.org/2000/svg">
  //   <path id="flight_plane" data-name="flight plane" d="M1023.994,672.006c2.4-3.218,3.843-6.559,3.85-8.946a3.323,3.323,0,0,0-.453-1.828,1.706,1.706,0,0,0-.578-.584,3.265,3.265,0,0,0-1.852-.466c-2.381,0-5.723,1.442-8.942,3.849a77.166,77.166,0,0,0-8.806,8.487q-.917.966-1.934,2.031l-6.976-2.091.02-.02a1.566,1.566,0,0,0-.005-2.2l-1.259-1.261a1.571,1.571,0,0,0-1.11-.461,1.541,1.541,0,0,0-1.1.458l-1.885,1.886-1-.3a1.563,1.563,0,0,0-.125-2.063l-1.266-1.265a1.568,1.568,0,0,0-1.109-.457,1.534,1.534,0,0,0-1.1.458l-1.73,1.73-7.094-2.125a1.775,1.775,0,0,0-.507-.072,1.875,1.875,0,0,0-1.311.531l-2.494,2.494a1.463,1.463,0,0,0-.439,1.029,1.433,1.433,0,0,0,.761,1.284l14.918,8.334a2.607,2.607,0,0,1,.362.275l4.253,4.252c-3.978,4.191-7.522,8.25-10.284,11.781-.258.328-.5.649-.742.965l-11.541-1.048a1.573,1.573,0,0,0-.2-.012,2.127,2.127,0,0,0-1.429.591l-1.163,1.161a1.449,1.449,0,0,0-.446,1.029,1.418,1.418,0,0,0,.839,1.3l8.119,3.857a1.843,1.843,0,0,1,.311.223l.674.668a4.938,4.938,0,0,0-.325,1.561,2.053,2.053,0,0,0,.567,1.5l.029.026.008.005a2.056,2.056,0,0,0,1.493.56,4.964,4.964,0,0,0,1.548-.322l.684.682a1.956,1.956,0,0,1,.212.3l3.848,8.1a1.435,1.435,0,0,0,1.294.851h.008a1.446,1.446,0,0,0,1.026-.432l1.192-1.2a2.132,2.132,0,0,0,.569-1.426c0-.066,0-.117-.005-.144l-1.051-11.581c.317-.238.636-.484.965-.739,3.536-2.766,7.6-6.313,11.779-10.286l4.256,4.26a2.314,2.314,0,0,1,.278.365l8.318,14.891a1.451,1.451,0,0,0,2.322.342l2.512-2.51a1.9,1.9,0,0,0,.514-1.31,1.769,1.769,0,0,0-.069-.491l-2.125-7.095,1.729-1.733a1.563,1.563,0,0,0,0-2.205l-1.268-1.267a1.559,1.559,0,0,0-2.062-.129l-.3-.995,1.887-1.886a1.577,1.577,0,0,0,.455-1.107,1.54,1.54,0,0,0-.455-1.1l-1.262-1.262a1.563,1.563,0,0,0-2.217,0l-.013.012-2.089-6.976q1.082-1.032,2.062-1.96C1019.32,677.193,1022.053,674.6,1023.994,672.006Z" transform="translate(-969.276 -660.182)"/>
  // </svg>   
  //                 </div> */}
  //       {/* <li><a href="#">Log out</a></li> */}
  //       <li><a href="#">Item 2</a></li>
  //       <li><a href="#">Item 3</a></li>
  //       <li><a href="#">Item 4</a></li>
  //     </ul>
  //   </nav>
  //   <header>
  //     <div class="headline">
  //       <div class="inner">
  
  //       <div class="textNext">
  //           <a class="first">Riyadh To Cairo</a>
  //         </div>
  //         {/* <a class="textNext">Hello</a> */}
          
  //         <div class="textNext2">
  //           <a class="first">Daily direct flights starting from 199.99$</a>
  //         </div>
          
  //         <div>
  //   {/* <p class="first">My name is <span class="emphasis">(pick a name!)</span>.</p> */}
  // </div>
  
  
  
  
  
  
  //       </div>
  //     </div>
  //   </header>
    
      
  //       </header>
  
  
  //     <form>
  //       <fieldset>
        
  //       </fieldset>
  //       <div class="inner-form">
         
  
  //         {/* SDD    THE MAIN FORM THAT MUST BE REPLACED EACH TIME*/}
  //         <div class="main-form-search" id="main-form">     
        
    
    
      
        
  //           <div class="booking-form2"> 
  //             <div class="form-header">
  //               <h1>Make your reservation</h1>
  //             </div>
              
  //             <div class="row">
  //                 <div class="col-md-6">
  //                   <div class="form-group-stay">
  //                     <input class="form-control2" type="text" name="From" maxLength="3"  placeholder="Select Depart Flight"  id="left"/>
  //                     <span class="form-label">From</span>
  //                   </div>
  //                 </div>
  
  //                 <button type="button" class="submit-btn3" onClick={() => switchText()}>
  //                 <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16">
  //   <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"></path>
  // </svg>
  //               </button>
  
  //                 <div class="col-md-6">
  //                   <div class="form-group-stay">
  //                     <input class="form-control2" type="text" name="To" maxLength="3"  placeholder="Select Destination Flight" id="right" />
  //                     <span class="form-label">To</span>
  //                   </div>
  //                 </div>
  
                 
                  
  //                 <button  class="submit-btn2" type="button">Search Now</button>
  
               
  //               </div>
  //               <div class="row-HiddenThenVisable">
  //               <div class="col-md-6">
  //                   <div class="form-group-hidden">
                   
  //                   <div class="form-control2" type="text" >
  //                     <span class="date-form">Depart Date</span>
  //                   <DatePicker  style={{ 
  //                     borderTopColor:"transparent",
  //                     borderBottomColor:"transparent",
  //                     borderLeftColor:"transparent",
  //                     borderRightColor:"transparent",
  //                     // forcedColorAdjust:"red",
  //                     // stopColor: "#ccc",
  //                     // stopColor: "rgb(255, 255, 255)",
  //                     minWidth:"400px", 
  //                     marginTop: "25px", 
  //                     backgroundColor:"transparent",
  //                     Color:"white",    
  //           }} format="DD-MM-YYYY" value={Data.Flight_Date_Depart} format="DD-MM-YYYY"
  //           showTime="false" disabledDate={d => d.isBefore(new Date())}
  //              name="Depart" onChange={(date) => setState(prevData => {
  //                 return {...prevData ,Flight_Date_Depart: date}}) 
  //       }/>
  //     </div>
                  
  //                   </div>
  //                 </div>
  //                 <div class="col-md-6">
  //                   <div class="form-group-hidden">
  //                   <div class="form-control2" type="text" >
  //                     <span class="date-form">Return Date</span>
  //                   <DatePicker  style={{  
  //                      borderTopColor:"transparent",
  //                      borderBottomColor:"transparent",
  //                      borderLeftColor:"transparent",
  //                      borderRightColor:"transparent",
  //                      minWidth:"400px", 
  //                      marginTop: "25px",
  //                     backgroundColor:"transparent",
  //                     Color:"white",
              
  //           }}type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Return} format="DD-MM-YYYY"
  //         showTime="false" disabledDate={d => d.isBefore(Data.Flight_Date_Depart)}
  //            name="Return" onChange={(date) => setState(prevData => {
  //               return {...prevData ,Flight_Date_Return: date}}) 
  //     }/>
  //     </div>
  //                   </div>
  //                 </div>
  //                 </div>
  
                  
  //                 <div class="row-HiddenThenVisable">
  //               <div class="col-md-6">
  //               <div class="form-group-hidden">
  //                     <select class="form-control2"   name="CabinDepart"  value={Data.CabinDepart}  onChange={(e) => changeHander(e)}>
                     
  //                       <option  value={"First"}>First</option>
  //                       <option value={"Business"}>Business</option>
  //                       <option value={"Economy"}>Economy</option>
  //                     </select>
      
  //                     <span class="select-arrow"></span>
  //                     <span class="date-form">Depart Cabin</span>
  //                   </div>
  //                 </div>
  //                 <div class="col-md-6">
  //                   <div class="form-group-hidden">
  //                   <select class="form-control2" name="CabinReturn"  value={Data.CabinReturn} onChange={(e) => changeHander(e)}>
  //                       {/* <option value={Data.CabinReturn}  selected hidden>Select Return Cabin</option> */}
  
  //                       <option  value={"First"}>First</option>
  //                       <option value={"Business"}>Business</option>
  //                       <option value={"Economy"}>Economy</option>
  //                     </select>
  //                 <span class="select-arrow"></span>
  //                 <span class="date-form" >Return Cabin</span>
  //                   </div>
  //                 </div>
  //                 </div>
  
  
  //                 <div class="row-HiddenThenVisable">
  //               <div class="col-md-6">
  //                   <div class="form-group-hidden">
  //                   <div class="form-control2" type="text" >
  //               <span class="date-form">Adults</span>
  //               <Form.Item > 
  //     <InputNumber atePicker  style={{  
  //                  borderTopColor:"transparent",
  //                  borderBottomColor:"transparent",
  //                  borderLeftColor:"transparent",
  //                  borderRightColor:"transparent",
  //                  minWidth:"390px", 
  //                  marginTop: "25px",
  //                 backgroundColor:"transparent",
  //                 Color:"white",
  //                 textAlign:"center",
                         
          
  //       }}type="Number" name="Adults" value={Data.Adults} max={500} min={0} placeholder="No Of Adults" onChange={(number) => setState(prevData => {
  //         return {...prevData ,Adults: number}}) 
  //     }/>
  //   </Form.Item>
  // </div>
  //                   </div>
  //                 </div>
  //                 <div class="col-md-6">
  //                   <div class="form-group-hidden">
  //                   <div class="form-control2" type="text" >
  //               <span class="date-form">Children</span>
  //               <Form.Item > 
  //     <InputNumber atePicker  style={{  
  //                  borderTopColor:"transparent",
  //                  borderBottomColor:"transparent",
  //                  borderLeftColor:"transparent",
  //                  borderRightColor:"transparent",
  //                  minWidth:"390px", 
  //                  marginTop: "25px",
  //                 backgroundColor:"transparent",
  //                 Color:"white",
  //                 textAlign:"center",
          
  //       }}type="Number" name="Children" value={Data.Children} max={500} min={0} placeholder="No Of Children" onChange={(number) => setState(prevData => {
  //         return {...prevData ,Children: number}}) 
  //     }/>
  //   </Form.Item>
  // </div>
  //                   </div>
  //                 </div>
  //                 </div>
  
  
  //                    {/* this button will be hidden until we pressed on expand  */}
  //                 <div class="row">
  //                 <button  class="submit-btn2-hidden-under" type="button">Search Now</button>
  //                 </div>
  
  
                 
  
                  
  //                 <button class="learn-more" type="button">
  //                     <span class="circle" aria-hidden="true">
  //                     <span class="icon arrow"></span>
  //                      </span>
  //                 </button>
  
  //                 <button class="learn-more" type="button">
  //                     <span class="circle" aria-hidden="true">
  //                     <span class="icon arrowDown1"></span>
  //                      </span>
  //                 </button>        
  //   </div>
    
   
  
  
  
  
  
   
  //     {/* <div class="promofamily">
  // <div class="promo" >
  //   <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1554620121-59e7f3f6e3a4?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/></div>
  //   <h6 class="title" data-cta="">Nightlife</h6>
  //   <h class="title2">Discover the hidden<br></br> island before anyone!!</h>
  // </div>
  // <div class="promo" >
  //   <div class="image-wrapper"><img src="https://images.unsplash.com/photo-1523806762236-1d3a6b7eb3fd?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=800&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/></div>
  //   <h6 class="title" data-cta="">Quiet Time</h6>
  //   <h class="title2">Discover the hidden<br></br> island before anyone!!</h>
  // </div>
  // <div class="promo" >
  //   <div class="image-wrapper"><img src="https://nypost.com/wp-content/uploads/sites/2/2021/09/travel-maldives-feature.jpg?quality=80&strip=all"/></div>
  //   <h6 class="title" data-cta="">Maldives</h6>
  //   <h class="title2">Need A break from boring routine?,<br></br> explore photos taken by Fly Nawww clients </h>
  
  // </div>
  // <div class="promo" >
  //   <div class="image-wrapper"><img src="https://d3ese01zxankcs.cloudfront.net/Pictures/2000xAny/3/9/4/67394_The-Aurora-Borealis-covers-the-night-sky-of-Greenlands-capital---Nuuk.png"/></div>
  //   <h6 class="title" >GreenLand </h6>
  //   <h class="title2">Enjoy the northern lights in Greenland,<br></br> explore photos taken by Fly Nawww clients </h>
  // </div>
    
  //   </div> */}
  
  
  // <button  type="button" class="flight-card">
    
  //   <div class="flight-card-content">
  //     <div class="flight-row">
  //       <div class="flight-from">
  //         <span class="from-code">CAI</span>
      
  //       </div>
        
  //       <div class="plane">
  //         <img src="https://www.svgrepo.com/show/197156/airplane-flight.svg" alt=""/>
         
  //       </div>
  //       <div class="plane"></div>
  //       <div class="flight-to">
  //         <span class="to-code">DMM</span>
  //       </div>
  //       <div class="flight-to">
  //         <span class="to-code">DMM</span>
  //       </div>
  //     </div>
  
  //     <div class="flight-details-row">
  //       <div class="flight-operator">
         
  //         <span class="detail">2020-12-12 <br></br>
  //               20:15
  //         </span>
  //         {/* <span class="detail">15:55</span> */}
  //       </div>
  //       <div class="flight-number">
  //        {/* the price here */}
  //        <span class="detail">200.99$</span>
  //       </div>
  //       <div class="flight-class">
        
  //         <span class="detail">Economy</span>
  //       </div>
  //     </div>
  
  //   </div>
  // </button>
         
  //         </div>
  //       </div>
  //     </form>
  
  
      
    
       
  
     
  
  
      
  
  
         
         
  //       </>
       
       
  //     );}
 
  

  


  

};

{/* <div id="app"></div> 
  ReactDOM.render(<UserManageBooking />, document.querySelector("#app")); */}

export default ReservationHomePage;

