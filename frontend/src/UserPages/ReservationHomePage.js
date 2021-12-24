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

 import '../css/ButtonReservation.css';

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

// $(document).ready(function() {
//   var qrWidth, qrHeight; 
  
//   //fluid height of wrapper
//   function resizeWrapper(){    
//     var wrapper = $('.wrapper');
//     var wrapperWidth = wrapper.css('width');
//     if($.trim($('.wrapper').attr('width')) != ''){
//     var wrapperheight = parseInt(wrapperWidth.substring(0,wrapperWidth.length-2))/2.5;
//     }
//     wrapper.css('height', wrapperheight + 'px');
    
//     if(!$('.qr').hasClass('expand')){
//       qrWidth = $('.qr').css('width');
//       qrHeight = $('.qr').css('height');
//       if($.trim($('.qr').attr('width')) != ''){
//       qrWidth = parseInt(qrWidth.substring(0, qrWidth.length-2));
//       }
//       if($.trim($('.qr').attr('height')) != ''){
//       qrHeight = parseInt(qrHeight.substring(0, qrHeight.length-2));
//       }
//     }
//   }  
  
//   function resizeQr(type){
//     var qrWrapper = $('.qr-wrapper');
//     if(type === 'down'){
//      qrWrapper.css('height', (qrHeight * 0.38) + 'px');
//      qrWrapper.css('width', (qrWidth * 0.5) + 'px');
    
//     }
//     else{
//       qrWrapper.css('height', (qrHeight * 0.53) + 'px');
//      qrWrapper.css('width', (qrWidth * 0.7) + 'px');
   
//     }
//   }
  
//   $(window).resize(function() {
//     resizeWrapper();
//     resizeQr('down'); 
//   });
//   resizeWrapper();
  
//   //Expand QR
//   $('body').on('click', '.qr', function(){//delegated
  
//     $(this).toggleClass('expand');
//     if($(this).hasClass('expand')){
//       resizeQr('up'); 
//       $('.qr a').text('collapse');
//     }
//     else{
//       resizeQr('down'); 
//       $('.qr a').text('expand');
//     }
//   });
  
//   // $('.details .seat').on('click',function(){
//   //   $('.inner-wrapper').addClass('seat-details');
//   //   $('.inner-wrapper').removeClass('boarding-pass');
//   // });
  
//   // $('.seat-layout .close').on('click',function(){
//   //   $('.inner-wrapper').addClass('boarding-pass');
//   //   $('.inner-wrapper').removeClass('seat-details');
//   // });

 
 
// })

var header = $('body');

// $('.textNext a').color(texts[current]);

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

 const history = useHistory();
 const [isLoading, setLoading] = useState(true);

  const criteria = {};
  const [Guard, setGuard] = useState(true);
  criteria["Username"]= sessionStorage.getItem("Username");
  const criteria1 = {};
  const [Reservations, setallReservation] = useState();
  const [mapped, setmapped] = useState(false);
  // const [Available, setAvailable] = useState();
  const [reserv, setreserv] = useState();
  const [data1, setData] = useState();


  const [flight1, setflight1] = useState();
  const [flight2, setflight2] = useState();


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
  const changeHander = (e) => {
    console.log(moment(Data.Flight_Date));

    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };


  // const [allReservation, setReservation] = useState({
  //   FirstName:"",
  //   LastName: userinfo.LastName,  
  //   Email: userinfo.Email,
  //   Date_of_Birth: userinfo.Date_of_Birth, // Data type date
  //   PassPort_No: userinfo.PassPort_No,
  //   Username: userinfo.Username,
  //   Password: userinfo.Password,
  // });

  function switchText() {
    console.log("wow")
    var obj1 = document.getElementById('left').value;
    var obj2 = document.getElementById('right').value;

    var temp = obj1;
    obj1 = obj2;
    obj2 = temp;
    
    // Save the swapped values to the input element.
    document.getElementById('left').value = obj1;
    document.getElementById('right').value = obj2;
  }
  
 

  useEffect(() => {

    // if(Guard === true){
      axios.post('http://localhost:8000/reservationinfo',criteria).then((result)=>
      {    
        // console.log("ssss")
       setallReservation(result.data);
      //  console.log(Reservations);
        } )
      // };



      //  if( Reservations && Guard === true){
      // setTimeout(() => {
      //   setGuard(false);
      // }, 1000)};


        // if(Available && reserv && mapped === false){
         
        //   // setTimeout(() => {
        //   //   console.log("AAAAAAAA")
        //   console.log(Available);
        //   console.log(reserv);

        //     senddata(reserv);
        //   // }, 500)
          

        //   setTimeout(() => {
        //     console.log("MMMMMMM")
        //     setmapped(true);
        //   }, 250)
        //   // setTimeout(() => {
        //   //   ScrollToBottom();
        //   // }, 250)
         

        // };


      // if(GoSet){
      //   setTimeout(() => {
      //     set
      //   }, 750)};

        // !mapped = false -> NO DOWNNN
        //  !mapped = true -> DOWNNN

    // var x=document.getElementsByClassName("seat-picker__row seat-picker__row--enabled");
    // x[4].style.marginBottom = "30px"; 
    // x[11].style.marginBottom = "30px"; 
    
    


  },[]);



//   useEffect(() => {

//     if(reserv){
//     console.log(reserv)
//     console.log(reserv['Available'])
//     var date;
//     var ID;
//     var from = reserv['from'];
//     var myreserv = reserv['reserv'];
//     var Cabin;
    
//     if(reserv['from']==true){
//       date = reserv['reserv'].Flight_DateFrom
//       ID = reserv['reserv'].Flight_IDFrom
//       Cabin = reserv['reserv'].CabinFrom
//     }
//     else{
//       date = reserv['reserv'].Flight_DateTo
//       ID = reserv['reserv'].Flight_IDTo
//       Cabin = reserv['reserv'].CabinTo
//     }
//     var Adults_No = reserv['reserv'].Adults;
//     var Children_No = reserv['reserv'].Children;
//     const Available = reserv['Available'];

//     if(reserv['from']==true){
//       var array = reserv['reserv'].SeatsChoosenFromID
//       console.log(array)
//       for(var i=0 ;i<array.length;i++){
//         Available[array[i]] = true;
//         // var r = array[i].substring(0,1);
//         // r = r.charCodeAt(0) - 65 ;
//         // var n = parseInt(array[i].substring(1));
//         // rows[r][n] = true;
//       }
//     }
//     else{
//       var array = reserv['reserv'].SeatsChoosenToID
//       console.log(array)
//       for(var i=0 ;i<array.length;i++){
//         Available[array[i]] = true;
//     }
//   }

//     const rows = new Array(26);
   
//     for (var i = 0; i < rows.length; i++) {
//       if(i<6){
//         rows[i] = new Array(4);
//       }
//       else{
//         rows[i] = new Array(6);
//       }
     
//     }
     
//     for(let i=0;i<26;i++){
//       for(let j=0;j<8;j++){
//         if(j>1 && j<6 && i<5){
//           rows[i][j] = null;
//         }
//      else if(i<5){
//        if(j>5){
//          if(Cabin=='First')
//             rows[i][j] = { id: ((i*4)+j-4+1), number: j+1-4, isReserved: !Available[((i*4)+j-4+1)]} ;
//         else
//             rows[i][j] = { id: ((i*4)+j-4+1), number: j+1-4, isReserved: true} ;
//        }
//         else{
//         if(Cabin=='First')
//            rows[i][j] = { id: ((i*4)+j+1), number: j+1, isReserved:  !Available[((i*4)+j+1)]} ;
//         else
//         rows[i][j] = { id: ((i*4)+j+1), number: j+1, isReserved:  true} ;

//         }
//         // console.log(Available[((i*4)+j-4+1)]);
//     }

//     else {

//   if(Cabin=='Business' && i<12){
//       if(j>2 && j<5){
//         rows[i][j] = null;
//       }
//      else if(j>4)
//         rows[i][j] = { id: ((20+((i-5)*6)+j-2)+1), number: j+1-2, isReserved:  !Available[((20+((i-5)*6)+j-2)+1)]} ;
//          else
//          rows[i][j] = { id: ((20+((i-5)*6)+j)+1), number: j+1, isReserved:  !Available[((20+((i-5)*6)+j)+1)]} ;
//   }
//   else if(i<12){
//     if(j>2 && j<5){
//       rows[i][j] = null;
//     }
//     else if(j>4 )
//       rows[i][j] = { id: ((20+((i-5)*6)+j-2)+1), number: j+1-2, isReserved: true} ;
//        else
//        rows[i][j] = { id: ((20+((i-5)*6)+j)+1), number: j+1, isReserved: true} ;
// }

// if(Cabin=='Economy' && i>11){
//   if(j>2 && j<5){
//     rows[i][j] = null;
//   }
//  else if(j>4)
//     rows[i][j] = { id: ((20+((i-5)*6)+j-2)+1), number: j+1-2, isReserved:  !Available[((20+((i-5)*6)+j-2)+1)]} ;
//      else
//      rows[i][j] = { id: ((20+((i-5)*6)+j)+1), number: j+1, isReserved:  !Available[((20+((i-5)*6)+j)+1)]} ;
// }
// else if(i>11){
// if(j>2 && j<5){
//   rows[i][j] = null;
// }
// else if(j>4)
//   rows[i][j] = { id: ((20+((i-5)*6)+j-2)+1), number: j+1-2, isReserved: true} ;
//    else
//    rows[i][j] = { id: ((20+((i-5)*6)+j)+1), number: j+1, isReserved: true} ;
// }

//   // choosenseatsID.length;i++){
//   //   const newTooltip = `Seat number `+row+number+' is selected!';
//   //   console.log(this.state.choosenseats[i])
//   //   var r = this.state.choosenseats[i].substring(0,1);
//   //   var n = parseInt(this.state.choosenseats[i].substring(1));
//   //   console.log(r)
//   //   console.log(n)
//   //   addCb(r, n, this.state.choosenseatsID[i], newTooltip);
  


//     }
//       }
//   }


 
    
    
// console.log(rows)


// // for(let i=0;i<26;i++){
// //   for(let j=0;j<8;j++){
// //     if(Cabin == "First"){

// //     }
// //     rows[i][j]
// //   }
// // }

// // console.log(Available)




//   setData({myreserv,Adults_No,Children_No,ID,from,date,rows,Available});

//     }

//   },[reserv]);

//   useEffect(() => {

//     if(data1){
//       console.log(data1)
//     setmapped(true);
   
//     }
//   },[data1]);


//   useEffect(() => {
//     if(mapped===true){
//       var x=document.getElementsByClassName("seat-picker__row seat-picker__row--enabled");
//       x[4].style.marginBottom = "30px"; 
//       x[11].style.marginBottom = "30px"; 
//     }
//   },[mapped]);



//    const flightmapHandler = (id) => {
//      console.log("your id")
//      console.log(id)

//     axios.post('http://localhost:8000/flightmap',{data: {var1 : id} }).then((result)=>
//     {    
//       // setData2(result.data[0].Available_Seats);
//   })};


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
    sessionStorage.clear()
    window.open("UserLogin", "_self");
  
  
  };


  const ConfirmDelete = (Reservationid,RefundedAmount,Useremail) => { // e will contain the reservation number 
    Swal.fire(
      {
      title: 'Delete Reservation',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#ff8300',
      confirmButtonText: 'Yes, delete it!'
      // iconColor:'#ff8300' ,
    })
      .then((res) => {
        if (res.isConfirmed) {
          var del =Reservationid;
          del.trim();
          axios.delete('http://localhost:8000/deletereservation', {data: {var1:del}})
          .then(response => {
                      }).catch(error => {
              console.log(error); //Handle Flight_No excite 
            })





          Swal.fire(
             {
            title:'Reservation Successfully Deleted!',
            text:'You will be Refunded with: $'.concat(RefundedAmount),
            icon:'success',
            showConfirmButton: false,
             }

          )
          setTimeout(() => {
            window.location.reload()
          }, 4000);

          var Refund = RefundedAmount;
          var mail = "ahmed.eltawel35@gmail.com";
          axios.post("http://localhost:8000/sendmail", {data: {var1:Refund,var2:mail}}).then(response => {
          }).catch(error => {
})


        }
      });
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


const parentToChild = (res,from) => {
  console.log(from);
   setmapped(false);
  var ID;
  if(from==true)
    ID = res.Flight_IDFrom
 else
   ID = res.Flight_IDTo
 

  axios.post('http://localhost:8000/flightmap',{data: {var1 : ID} })
  .then((result)=> {
    setreserv({reserv: res,from: from, Available:result.data[0].Available_Seats});
      // setAvailable(result.data[0].Available_Seats);
      // console.log(Available)
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



 

//   const Showboarding = (DateFrom,DateTo,From,To,CabinFrom,CabinTo,Booking_no,Flight_NoFrom,Flight_NoTo,SeatsChoosenFrom,SeatsChoosenTo,Username,Useremail) => {
//     $('body').on('click', '.button-100', function(){
//       var DepartFlight ="Depart+Flight+Details%0A"+"Reservation+Account:"+Username+"%0A"+"Reservation+Email:"+Useremail+"%0A"+"Booking+number:"+Booking_no+"%0A"+"Flight+Number:"+Flight_NoFrom+"%0A"+"From:"+From+"%0A"+"To:"+To+"%0A"+"Cabin:"+CabinFrom+"%0A"+"Seats:"+SeatsChoosenFrom+"%0A"+"Flight+Date:"+moment(DateFrom).format("YYYY-MM-DD")+"%0A"+"Flight+Time:"+moment(DateFrom).format("HH:mm")  ;
//       var ReturnFlight ="Return+Flight+Details%0A"+"Reservation+Account:"+Username+"%0A"+"Reservation+Email:"+Useremail+"%0A"+"Booking+number:"+Booking_no+"%0A"+"Flight+Number:"+Flight_NoTo+"%0A"+"From:"+To+"%0A"+"To:"+From+"%0A"+"Cabin:"+CabinTo+"%0A"+"Seats:"+SeatsChoosenTo+"%0A"+"Flight+Date:"+moment(DateTo).format("YYYY-MM-DD")+"%0A"+"Flight+Time:"+moment(DateTo).format("HH:mm") ;
//       var DepartFlightimagSrc= "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl="+DepartFlight;
//       var ReturnFlightimagSrc= "https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl="+ReturnFlight;
//       $('.qr-image').css({// for depart flight details
//         'background-image':"url("+DepartFlightimagSrc+")" 
//     });

//     $('.qr-image2').css({ // for return flight details
//       'background-image':"url("+ReturnFlightimagSrc+")" 
//   });

//   });
//   swalWithBootstrapButtons.fire({
  
//         html:
      
//         '<div class="wrapper">'+
//         '<div class="qr">'+
//           '<div class="title">boarding pass</div>'+
//           '<div class="qr-wrapper">'+
//             '<div class="qr-image"></div>'+
//           '</div>'+
//           '<a>expand</a>'+
//         '</div>'+
//         '<div class="inner-wrapper">'+
//           '<div class="details">'+
//             '<div class="date"> '+ moment(DateFrom).format("YYYY-MM-DD") +'</div>'+
//             '<div class="city">'+
//               '<div class="from loc">'+
//                 '<div class="name">'+ From +'</div>'+
//                 '<div class="weather">'+
//                   '<div class="icon">'+
//                     '<div class="drop1 drop"></div>'+
//                     '<div class="drop2 drop"></div>'+
//                     '<div class="drop3 drop"></div>'+
//                   '</div>'+
//                 '</div>'+
//               '</div>'+
//               '<div class="to loc">'+
//                 '<div class="name">'+ To +'</div>'+
//                 '<div class="weather">'+
//                   '<div class="icon">'+
//                     '<div class="sunrays ray1"></div>'+
//                     '<div class="sunrays ray2"></div>'+
//                     '<div class="sunrays ray3"></div>'+
//                   '</div>'+
//                 '</div>'+
//               '</div>'+
//             '</div>'+
//             '<div class="plane"></div>'+
//             '<div class="content">'+
//               '<div class="gate">'+CabinFrom+' <span>Cabin</span></div>'+
//               '<div class="gate"></div>'+
//               '<div class="gate">'+ moment(DateFrom).format("HH:mm") +' <span>departure</span></div>'+
//             '</div>'+
//           '</div>'+
//           '<div class="seat-layout">'+
//             '<div class="content">'+
//               '<div class="close"><i class="fa fa-remove fa-2x"></i></div>'+
//               '<div class="gate">2B <span>gate</span></div>'+
//               '<div class="seat">16B <span>seat</span></div>'+
//               '<div class="boarding">12:20PM <span>boarding</span></div>'+
//               '<div class="departure">12:50PM <span>departure</span></div>'+
//               '<div class="flight">GO181 <span>flight</span></div>'+
//             '</div>'+
           
           
//           '</div>'+
//         '</div>'+
//         '</div>'
//   +
//         '<div class="wrapper">'+
//         '<div class="qr">'+
//           '<div class="title">boarding pass</div>'+
//           '<div class="qr-wrapper">'+
//             '<div class="qr-image2"></div>'+
//           '</div>'+
//           '<a>expand</a>'+
//         '</div>'+
//         '<div class="inner-wrapper">'+
//           '<div class="details">'+
//           '<div class="date"> '+ moment(DateTo).format("YYYY-MM-DD") +'</div>'+
//             '<div class="city">'+
//               '<div class="from loc">'+
//                 '<div class="name">'+ To +' <span>pune</span></div>'+
//                 '<div class="weather">'+
//                   '<div class="icon">'+
//                     '<div class="drop1 drop"></div>'+
//                     '<div class="drop2 drop"></div>'+
//                     '<div class="drop3 drop"></div>'+
//                   '</div>'+
//                 '</div>'+
//               '</div>'+
//               '<div class="to loc">'+
//                 '<div class="name">'+ From +' <span>delhi</span></div>'+
//                 '<div class="weather">'+
//                   '<div class="icon">'+
//                     '<div class="sunrays ray1"></div>'+
//                     '<div class="sunrays ray2"></div>'+
//                     '<div class="sunrays ray3"></div>'+
//                   '</div>'+
//                 '</div>'+
//               '</div>'+
//             '</div>'+
//             '<div class="plane"></div>'+
//             '<div class="content">'+
//               '<div class="gate">'+CabinTo+' <span>Cabin</span></div>'+
//               '<div class="gate"></div>'+
//               '<div class="gate">'+ moment(DateTo).format("HH:mm") +' <span>departure</span></div>'+
//             '</div>'+
//           '</div>'+
//           '<div class="seat-layout">'+
//             '<div class="content">'+
//               '<div class="close"><i class="fa fa-remove fa-2x"></i></div>'+
//               '<div class="gate">2B <span>gate</span></div>'+
//               '<div class="seat">16B <span>seat</span></div>'+
//               '<div class="boarding">12:20PM <span>boarding</span></div>'+
//               '<div class="departure">12:50PM <span>departure</span></div>'+
//               '<div class="flight">GO181 <span>flight</span></div>'+
//             '</div>'+
           
           
//           '</div>'+
//         '</div>'+
//         '</div>'
        
  
//   ,
  
  
//           imageWidth: 1200,
//           imageHeight: 700,
//           customClass: 'swal-wide',
//           imageAlt: 'A tall image',
//            cancelButtonColor:'#ff2626' ,
//           showCancelButton: true,
//           cancelButtonText: 'Cancel!',
//           confirmButtonText: 'Confirm Choosen Reservation!',
//     reverseButtons: false,
//     confirmButtonColor: '#ff8300',
//   }).then((result) => {
//     // if (result.isConfirmed) {
  
//     //   if (sessionStorage.getItem('AuthenticationState') === "UserAuthenticated") {
//     //               history.push({
//     //                 pathname: '/UserConfirmBooking',
//     //               state: {
//     //                 flight1: isdepart,
//     //                 flight2: isreturn,
//     //                 CabinFrom: Data.CabinDepart,
//     //                 CabinTo: Data.CabinDepart,
//     //                 Adults: Data.Adults,
//     //                 Children: Data.Children,
//     //               }
//     //               });
//     //            }
          
//   // else{
//   //     swalWithBootstrapButtons.fire(
//   //       {
//   //       title: 'Please Log In to continue',
//   //       // text: 'Please Log In to continue',
//   //       icon: 'warning',
//   //       confirmButtonText: 'Log In',
//   //       confirmButtonColor: '#ff8300',
//   //       // iconColor:'#ff8300' ,
//   //     })
//   //       .then((res) => {
//   //            if(res.isConfirmed){
//   //               console.log('confirm');
//   //               window.open("UserLogin", "_self");
                 
//   //           }    
//   //       });
//   //     }
//   //   } 
//     // else if (
//     //   /* Read more about handling dismissals below */
//     //   result.dismiss === Swal.DismissReason.cancel
//     // ) {
     
//     // }
//   })
  
  
//     };

















  if (Reservations) {

    if(!mapped){
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
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
      <li><a href="#">Item 4</a></li>
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
										<input class="form-control2" type="text" name="From" maxLength="3"  placeholder="Select Depart Flight"  id="left"/>
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
										<input class="form-control2" type="text" name="To" maxLength="3"  placeholder="Select Destination Flight" id="right" />
										<span class="form-label">To</span>
									</div>
								</div>

               
                
                <button  class="submit-btn2" type="button">Search Now</button>

             
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
                <button  class="submit-btn2-hidden-under" type="button">Search Now</button>
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
  <div class="form-btn">
 
                
							</div>
		<div class="promofamily">
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
	
	</div>

       
        </div>
      </div>
    </form>


    
  
     

   


    


       
       
      </>
     
     
    );}
    else{
      return(
        <>
  {/* <div class="site-mobile-menu">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3">
        <span class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div> */}
  
  <header >
  
  <nav>
    <div class="logo"></div>
    <ul>
      <li><a href="#">Log out</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
      <li><a href="#">Item 4</a></li>
    </ul>
  </nav>
  <header>
    <div class="headline">
      <div class="inner">

      <div class="textNext">
          <a>Riyadh To Cairo</a>
        </div>
        {/* <a class="textNext">Hello</a> */}
        
        <div class="textNext2">
          <a>Daily direct flights starting from 199.99$</a>
        </div>
      </div>
    </div>
  </header>
  
    
      </header>
  
      
  
      
      {/* <script src="js/extention/choices.js"></script>    */}
  
      {/* < div class="modal-container" id="modal-opened">
     <div class="modal"> */}
        
         <script src="js/extention/choices.js"></script>   
  
     
  
         <div class="plane">
    <div class="cockpit">
      <h1>Select Seats</h1>
    </div>
    
  
  <div> <ol class="cabin fuselage">
    <SeatMap parentToChild={data1}/>
    </ol>
   </div>
    
      <br></br>
    </div>
  
  
      
  
       {/* </div>
  </div> */}
    
     
  
         
         
        </>
       
       
      );}
 
  }
return (<h1></h1>)
  


  

};

{/* <div id="app"></div> 
  ReactDOM.render(<UserManageBooking />, document.querySelector("#app")); */}

export default ReservationHomePage;

