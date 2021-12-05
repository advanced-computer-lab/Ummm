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
import '../css/main.css';
import '../css/guest.css';
import '../css/SelectSeat.scss';
import '../css/header.css';
import swal from 'sweetalert2'
import '../css/BoardingPass.scss';
import '../css/pass.scss';
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

const UserManageBooking = () => {

 const history = useHistory();
 const [isLoading, setLoading] = useState(true);

  const criteria = {};
  const [Guard, setGuard] = useState(true);
  criteria["Username"]= sessionStorage.getItem("Username");
  const criteria1 = {};
  const [Reservations, setallReservation] = useState();
  const [mapped, setmapped] = useState(false);
  const [Available, setAvailable] = useState();
  const [reserv, setreserv] = useState();

  const [flight1, setflight1] = useState();
  const [flight2, setflight2] = useState();


  // const [allReservation, setReservation] = useState({
  //   FirstName:"",
  //   LastName: userinfo.LastName,  
  //   Email: userinfo.Email,
  //   Date_of_Birth: userinfo.Date_of_Birth, // Data type date
  //   PassPort_No: userinfo.PassPort_No,
  //   Username: userinfo.Username,
  //   Password: userinfo.Password,
  // });

  useEffect(() => {

    if(Guard === true){
      axios.post('http://localhost:8000/reservationinfo',criteria).then((result)=>
      {    
        console.log("ssss")
       setallReservation(result.data);
       console.log(Reservations);
        } )
      };
      if(Reservations){ 

        console.log(Reservations);


      }



       if( Reservations && Guard === true){
      setTimeout(() => {
        setGuard(false);
      }, 1000)};


        if(Available && reserv && mapped === false){
         
          // setTimeout(() => {
          //   console.log("AAAAAAAA")
            senddata(reserv.Adults,reserv.Children,reserv.Flight_IDFrom,true,reserv.Flight_DateFrom)
          // }, 500)
          

          setTimeout(() => {
            console.log("MMMMMMM")
            setmapped(true);
          }, 250)
          // setTimeout(() => {
          //   ScrollToBottom();
          // }, 250)
         

        };


      // if(GoSet){
      //   setTimeout(() => {
      //     set
      //   }, 750)};

        // !mapped = false -> NO DOWNNN
        //  !mapped = true -> DOWNNN

    // var x=document.getElementsByClassName("seat-picker__row seat-picker__row--enabled");
    // x[4].style.marginBottom = "30px"; 
    // x[11].style.marginBottom = "30px"; 
    
    


  },[Reservations,Guard,mapped,Available,reserv]);



  const [data1, setData] = useState([]);

   const flightmapHandler = (id) => {
     console.log("your id")
     console.log(id)

    axios.post('http://localhost:8000/flightmap',{data: {var1 : id} }).then((result)=>
    {    
      // setData2(result.data[0].Available_Seats);
  })};


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


const senddata = (e,f,g,from,date) => {
  console.log(Available)

    const rows = new Array(26);
   
    for (var i = 0; i < rows.length; i++) {
      if(i<6){
        rows[i] = new Array(4);
      }
      else{
        rows[i] = new Array(6);
      }
     
    }
     
    for(let i=0;i<26;i++){
      for(let j=0;j<8;j++){
        if(j>1 && j<6 && i<5){
          rows[i][j] = null;
        }
     else if(i<5){
       if(j>5)
        rows[i][j] = { id: ((i*4)+j-4+1), number: j+1-4, isReserved: Available[((i*4)+j-4+1)]} ;
        else
        rows[i][j] = { id: ((i*4)+j+1), number: j+1, isReserved:  Available[((i*4)+j+1)]} ;
    }
    else {
      if(j>2 && j<5){
        rows[i][j] = null;
      }
   else if(j>4)
   rows[i][j] = { id: ((20+((i-5)*6)+j-2)+1), number: j+1-2, isReserved:  Available[((20+((i-5)*6)+j-2)+1)]} ;
         else
         rows[i][j] = { id: ((20+((i-5)*6)+j)+1), number: j+1, isReserved:  Available[((20+((i-5)*6)+j)+1)]} ;
    }
      }
  }
    
console.log(rows)

  setData({e,f,g,from,date,rows});

  // setGuard(true);
}

  
// const ScrollToBottom = () => {
//   window.scrollTo(0,document.body.scrollHeight);
// }


const parentToChild = (reserv,e,f,g,from,date) => {
  setmapped(false);

  axios.post('http://localhost:8000/flightmap',{data: {var1 : g} })
  .then((result)=> {
      setAvailable(result.data[0].Available_Seats);
      console.log(Available)
    })
    setreserv(reserv);

   

  // setmapped(true);
}

const swalWithBootstrapButtons = Swal.mixin({
  // customClass: {
  //   confirmButton: 'btn btn-success',
  //   cancelButton: 'btn btn-danger'
  // },
  // buttonsStyling: false
})





  const Showboarding = (DateFrom,DateTo,From,To,CabinFrom,CabinTo) => {
  swalWithBootstrapButtons.fire({
  
        html:
      
        '<div class="wrapper">'+
        '<div class="qr">'+
          '<div class="title">boarding pass</div>'+
          '<div class="qr-wrapper">'+
            '<div class="qr-image"></div>'+
          '</div>'+
          '<a>expand</a>'+
        '</div>'+
        '<div class="inner-wrapper">'+
          '<div class="details">'+
            '<div class="date"> '+ moment(DateFrom).format("YYYY-MM-DD") +'</div>'+
            '<div class="city">'+
              '<div class="from loc">'+
                '<div class="name">'+ From +'</div>'+
                '<div class="weather">'+
                  '<div class="icon">'+
                    '<div class="drop1 drop"></div>'+
                    '<div class="drop2 drop"></div>'+
                    '<div class="drop3 drop"></div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="to loc">'+
                '<div class="name">'+ To +'</div>'+
                '<div class="weather">'+
                  '<div class="icon">'+
                    '<div class="sunrays ray1"></div>'+
                    '<div class="sunrays ray2"></div>'+
                    '<div class="sunrays ray3"></div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="plane"></div>'+
            '<div class="content">'+
              '<div class="gate">'+CabinFrom+' <span>Cabin</span></div>'+
              '<div class="gate"></div>'+
              '<div class="gate">'+ moment(DateFrom).format("HH:mm") +' <span>departure</span></div>'+
            '</div>'+
          '</div>'+
          '<div class="seat-layout">'+
            '<div class="content">'+
              '<div class="close"><i class="fa fa-remove fa-2x"></i></div>'+
              '<div class="gate">2B <span>gate</span></div>'+
              '<div class="seat">16B <span>seat</span></div>'+
              '<div class="boarding">12:20PM <span>boarding</span></div>'+
              '<div class="departure">12:50PM <span>departure</span></div>'+
              '<div class="flight">GO181 <span>flight</span></div>'+
            '</div>'+
           
           
          '</div>'+
        '</div>'+
        '</div>'
  +
        '<div class="wrapper">'+
        '<div class="qr">'+
          '<div class="title">boarding pass</div>'+
          '<div class="qr-wrapper">'+
            '<div class="qr-image"></div>'+
          '</div>'+
          '<a>expand</a>'+
        '</div>'+
        '<div class="inner-wrapper">'+
          '<div class="details">'+
          '<div class="date"> '+ moment(DateTo).format("YYYY-MM-DD") +'</div>'+
            '<div class="city">'+
              '<div class="from loc">'+
                '<div class="name">'+ To +' <span>pune</span></div>'+
                '<div class="weather">'+
                  '<div class="icon">'+
                    '<div class="drop1 drop"></div>'+
                    '<div class="drop2 drop"></div>'+
                    '<div class="drop3 drop"></div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class="to loc">'+
                '<div class="name">'+ From +' <span>delhi</span></div>'+
                '<div class="weather">'+
                  '<div class="icon">'+
                    '<div class="sunrays ray1"></div>'+
                    '<div class="sunrays ray2"></div>'+
                    '<div class="sunrays ray3"></div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="plane"></div>'+
            '<div class="content">'+
              '<div class="gate">'+CabinTo+' <span>Cabin</span></div>'+
              '<div class="gate"></div>'+
              '<div class="gate">'+ moment(DateTo).format("HH:mm") +' <span>departure</span></div>'+
            '</div>'+
          '</div>'+
          '<div class="seat-layout">'+
            '<div class="content">'+
              '<div class="close"><i class="fa fa-remove fa-2x"></i></div>'+
              '<div class="gate">2B <span>gate</span></div>'+
              '<div class="seat">16B <span>seat</span></div>'+
              '<div class="boarding">12:20PM <span>boarding</span></div>'+
              '<div class="departure">12:50PM <span>departure</span></div>'+
              '<div class="flight">GO181 <span>flight</span></div>'+
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
  }).then((result) => {
    // if (result.isConfirmed) {
  
    //   if (sessionStorage.getItem('AuthenticationState') === "UserAuthenticated") {
    //               history.push({
    //                 pathname: '/UserConfirmBooking',
    //               state: {
    //                 flight1: isdepart,
    //                 flight2: isreturn,
    //                 CabinFrom: Data.CabinDepart,
    //                 CabinTo: Data.CabinDepart,
    //                 Adults: Data.Adults,
    //                 Children: Data.Children,
    //               }
    //               });
    //            }
          
  // else{
  //     swalWithBootstrapButtons.fire(
  //       {
  //       title: 'Please Log In to continue',
  //       // text: 'Please Log In to continue',
  //       icon: 'warning',
  //       confirmButtonText: 'Log In',
  //       confirmButtonColor: '#ff8300',
  //       // iconColor:'#ff8300' ,
  //     })
  //       .then((res) => {
  //            if(res.isConfirmed){
  //               console.log('confirm');
  //               window.open("UserLogin", "_self");
                 
  //           }    
  //       });
  //     }
  //   } 
    // else if (
    //   /* Read more about handling dismissals below */
    //   result.dismiss === Swal.DismissReason.cancel
    // ) {
     
    // }
  })
  
  
    };

















  if (Reservations) {

    if(!mapped){
    return(
      <>
<div class="site-mobile-menu">
  <div class="site-mobile-menu-header">
    <div class="site-mobile-menu-close mt-3">
      <span class="icon-close2 js-menu-toggle"></span>
    </div>
  </div>
  <div class="site-mobile-menu-body"></div>
</div>

<header class="site-navbar" role="banner">

  <div class="container">
    <div class=" align-items-center row">
      
      <div class="col-11 col-xl-2">
      <img src='https://i.ibb.co/0q5z6Jv/e0f7973e78414b2bb23ad01e5f3a88bb-removebg-preview.png' alt='Visit Computer Hope'></img>
        {/* <h1 class="mb-0 site-logo"><a href="index.html" class="text-white mb-0">Brand</a></h1> */}
      </div>
      <div class="col-12 col-md-10 d-none d-xl-block">
        <nav class="site-navigation position-relative text-right" role="navigation">

          <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
            <li ><a onClick={(e) => SearchFlightHandler(e)}><span>Home Page</span></a></li>
            
       
            <li><a onClick={(e) => AboutUs()}><span>About Us</span></a></li>
            <li><a onClick={(e) => Vision()}><span>Our Vision</span></a></li>
            <li><a onClick={(e) => ContactUs()}><span>Contact Us</span></a></li>
            <li><a onClick={() => LogOutHandler()} ><span>Log Out</span></a></li>

          </ul>
        </nav>
      </div>


      <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" ><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>

      </div>

    </div>

  </header>

             <div class="s011">
      <form>
        <fieldset>
        
        </fieldset>
        <div class="inner-form">
          <header>
          <label class="center2">Manage Flights</label>
            <div class="travel-type-wrap">
           
              <button  type="button" class="item "  onClick={(e) => SearchFlightHandler(e)}>
              <div class="group-icon">
              <svg width="70px" height="70px" viewBox="0 0 58.568 58.568" xmlns="http://www.w3.org/2000/svg">
  <path id="flight_plane" data-name="flight plane" d="M1023.994,672.006c2.4-3.218,3.843-6.559,3.85-8.946a3.323,3.323,0,0,0-.453-1.828,1.706,1.706,0,0,0-.578-.584,3.265,3.265,0,0,0-1.852-.466c-2.381,0-5.723,1.442-8.942,3.849a77.166,77.166,0,0,0-8.806,8.487q-.917.966-1.934,2.031l-6.976-2.091.02-.02a1.566,1.566,0,0,0-.005-2.2l-1.259-1.261a1.571,1.571,0,0,0-1.11-.461,1.541,1.541,0,0,0-1.1.458l-1.885,1.886-1-.3a1.563,1.563,0,0,0-.125-2.063l-1.266-1.265a1.568,1.568,0,0,0-1.109-.457,1.534,1.534,0,0,0-1.1.458l-1.73,1.73-7.094-2.125a1.775,1.775,0,0,0-.507-.072,1.875,1.875,0,0,0-1.311.531l-2.494,2.494a1.463,1.463,0,0,0-.439,1.029,1.433,1.433,0,0,0,.761,1.284l14.918,8.334a2.607,2.607,0,0,1,.362.275l4.253,4.252c-3.978,4.191-7.522,8.25-10.284,11.781-.258.328-.5.649-.742.965l-11.541-1.048a1.573,1.573,0,0,0-.2-.012,2.127,2.127,0,0,0-1.429.591l-1.163,1.161a1.449,1.449,0,0,0-.446,1.029,1.418,1.418,0,0,0,.839,1.3l8.119,3.857a1.843,1.843,0,0,1,.311.223l.674.668a4.938,4.938,0,0,0-.325,1.561,2.053,2.053,0,0,0,.567,1.5l.029.026.008.005a2.056,2.056,0,0,0,1.493.56,4.964,4.964,0,0,0,1.548-.322l.684.682a1.956,1.956,0,0,1,.212.3l3.848,8.1a1.435,1.435,0,0,0,1.294.851h.008a1.446,1.446,0,0,0,1.026-.432l1.192-1.2a2.132,2.132,0,0,0,.569-1.426c0-.066,0-.117-.005-.144l-1.051-11.581c.317-.238.636-.484.965-.739,3.536-2.766,7.6-6.313,11.779-10.286l4.256,4.26a2.314,2.314,0,0,1,.278.365l8.318,14.891a1.451,1.451,0,0,0,2.322.342l2.512-2.51a1.9,1.9,0,0,0,.514-1.31,1.769,1.769,0,0,0-.069-.491l-2.125-7.095,1.729-1.733a1.563,1.563,0,0,0,0-2.205l-1.268-1.267a1.559,1.559,0,0,0-2.062-.129l-.3-.995,1.887-1.886a1.577,1.577,0,0,0,.455-1.107,1.54,1.54,0,0,0-.455-1.1l-1.262-1.262a1.563,1.563,0,0,0-2.217,0l-.013.012-2.089-6.976q1.082-1.032,2.062-1.96C1019.32,677.193,1022.053,674.6,1023.994,672.006Z" transform="translate(-969.276 -660.182)"/>
</svg>   
                </div>
                <span>Reserve Flight</span>
              </button>

              <button class="item active"  type="button" >
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

                <span>Manage Flights</span>
                </div>
                
              </button>


              <button  type="button" class="item" onClick={(e) => EditProfileHendler(e)}>
                <div class="group-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>
                </div>
                <span>Edit Profile</span>
              </button>


             


            </div>
          </header>

          {/* SDD    LINE 1666 IN MAIN.CSS*/}



          

<div class="box d2">
<label class="center">All Reserved Flights</label>

  <div class="box f2">
    {Reservations.map(reserv =>
        <div>
    {/* //loop will be created here inside the box f2 :D*/}


  <div class="listing-item100">
      <figure class="image">
          <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
          <figcaption>
            <div class="caption">
            <h1>Depart Flight</h1>
              <p>Flight Number:{reserv.Flight_NoFrom}</p>
              </div>
          </figcaption>
      </figure>
      <div class="listing">
          <h4>From:{reserv.Flight_From} </h4>
          <h4>To:{reserv.Flight_To}</h4>
          <h4>Flight Date:{reserv.Flight_DateFrom}</h4>
          <h4>Flight Time:{reserv.Flight_DateFrom}</h4>
          <h4>Cabin:{reserv.CabinFrom}</h4>
          <h4>Seat:{reserv.SeatsChoosenFrom}</h4>
          <h4>Booking Number:{reserv._id}</h4>
          {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
          {/* <a  class="button-79" role="button" onClick={scrollToBottom} >SELECT SEAT</a> */}
          <Link class="button-79" role="button" to="SeatMap"  onClick={() => parentToChild(reserv,reserv.Adults,reserv.Children,reserv.Flight_IDFrom,true,reserv.Flight_DateFrom)} smooth={true}>Select Seat</Link>

      </div>
  </div>
 
  <div class="listing-item100">
      <figure class="image">
          <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
          <figcaption>
            <div class="caption">
              <h1>Return Flight</h1>
              <p>Flight Number:{reserv.Flight_NoTo}</p>
              </div>
          </figcaption>
      </figure>
      <div class="listing">
         <h4>From:{reserv.Flight_To} </h4>
          <h4>To:{reserv.Flight_From}</h4>
          <h4>Flight Date:{reserv.Flight_DateTo}</h4>
          <h4>Flight Time:{reserv.Flight_DateTo}</h4>
          <h4>Cabin:{reserv.CabinTo}</h4>
          <h4>Seat:{reserv.SeatsChoosenTo}</h4>
          <h4>Booking Number:{reserv._id}</h4>
          {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
          {/* <a href="#modal-opened" class="link-1" id="modal-closed">Reserve Flight</a> */}
          {/* <a  class="button-79" role="button"  >SELECT SEAT</a> */}
          {/* <button  class="button-79" role="button" onClick={scrollToBottom}>SELECT SEAT</button> */}
          {/* spy={true} */}
          <Link class="button-79" role="button" to="SeatMap" onClick={() => parentToChild(reserv,reserv.Adults,reserv.Children,reserv.Flight_IDTo,false,reserv.Flight_DateTo)}  smooth={true}>Select Seat</Link>
  
      </div>
  </div>
  
  {/* on click will send reservation number + total price refunded */}
  <div class="listing-item99">
  <button  type="button" onClick={() => ConfirmDelete(reserv._id,reserv.TotalPrice,reserv.Email)} class="button-70" > 
  <div class="center">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
</div>
  Cancel Reservation
     </button>
     
     

     </div>
     <div class="listing-item99">
  <button  type="button" onClick={() => Showboarding(reserv.Flight_DateFrom,reserv.Flight_DateTo,reserv.Flight_From,reserv.Flight_To,reserv.CabinFrom,reserv.CabinTo)} class="button-100" > 
  <div class="center">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-ticket-detailed-fill" viewBox="0 0 16 16">
  <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Zm0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Z"/>
</svg>
</div>
    Show Boardingpass
     </button>
     
     

     </div>
     
     </div>
 
 )}
 
  </div>



   

  
</div>


        </div>
      </form>
    </div>

    
    {/* <script src="js/extention/choices.js"></script>    */}

    {/* < div class="modal-container" id="modal-opened">
   <div class="modal"> */}
      
       <script src="js/extention/choices.js"></script>   

   


    

     {/* </div>
</div> */}
  
   

       
       
      </>
     
     
    );}
    else{
      return(
        <>
  <div class="site-mobile-menu">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3">
        <span class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>
  
  <header class="site-navbar" role="banner">
  
    <div class="container">
      <div class=" align-items-center row">
        
        <div class="col-11 col-xl-2">
        <img src='https://i.ibb.co/0q5z6Jv/e0f7973e78414b2bb23ad01e5f3a88bb-removebg-preview.png' alt='Visit Computer Hope'></img>
          {/* <h1 class="mb-0 site-logo"><a href="index.html" class="text-white mb-0">Brand</a></h1> */}
        </div>
        <div class="col-12 col-md-10 d-none d-xl-block">
          <nav class="site-navigation position-relative text-right" role="navigation">
  
            <ul class="site-menu js-clone-nav mr-auto d-none d-lg-block">
              <li ><a onClick={(e) => SearchFlightHandler(e)}><span>Home Page</span></a></li>
              
         
              <li><a onClick={(e) => AboutUs()}><span>About Us</span></a></li>
              <li><a onClick={(e) => Vision()}><span>Our Vision</span></a></li>
              <li><a onClick={(e) => ContactUs()}><span>Contact Us</span></a></li>
              <li><a onClick={() => LogOutHandler()} ><span>Log Out</span></a></li>
  
            </ul>
          </nav>
        </div>
  
  
        <div class="d-inline-block d-xl-none ml-md-0 mr-auto py-3" ><a href="#" class="site-menu-toggle js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>
  
        </div>
  
      </div>
  
    </header>
  
               <div class="s011">
        <form>
          <fieldset>
          
          </fieldset>
          <div class="inner-form">
            <header>
            <label class="center2">Manage Flights</label>
              <div class="travel-type-wrap">
             
                <button  type="button" class="item "  onClick={(e) => SearchFlightHandler(e)}>
                <div class="group-icon">
                <svg width="70px" height="70px" viewBox="0 0 58.568 58.568" xmlns="http://www.w3.org/2000/svg">
    <path id="flight_plane" data-name="flight plane" d="M1023.994,672.006c2.4-3.218,3.843-6.559,3.85-8.946a3.323,3.323,0,0,0-.453-1.828,1.706,1.706,0,0,0-.578-.584,3.265,3.265,0,0,0-1.852-.466c-2.381,0-5.723,1.442-8.942,3.849a77.166,77.166,0,0,0-8.806,8.487q-.917.966-1.934,2.031l-6.976-2.091.02-.02a1.566,1.566,0,0,0-.005-2.2l-1.259-1.261a1.571,1.571,0,0,0-1.11-.461,1.541,1.541,0,0,0-1.1.458l-1.885,1.886-1-.3a1.563,1.563,0,0,0-.125-2.063l-1.266-1.265a1.568,1.568,0,0,0-1.109-.457,1.534,1.534,0,0,0-1.1.458l-1.73,1.73-7.094-2.125a1.775,1.775,0,0,0-.507-.072,1.875,1.875,0,0,0-1.311.531l-2.494,2.494a1.463,1.463,0,0,0-.439,1.029,1.433,1.433,0,0,0,.761,1.284l14.918,8.334a2.607,2.607,0,0,1,.362.275l4.253,4.252c-3.978,4.191-7.522,8.25-10.284,11.781-.258.328-.5.649-.742.965l-11.541-1.048a1.573,1.573,0,0,0-.2-.012,2.127,2.127,0,0,0-1.429.591l-1.163,1.161a1.449,1.449,0,0,0-.446,1.029,1.418,1.418,0,0,0,.839,1.3l8.119,3.857a1.843,1.843,0,0,1,.311.223l.674.668a4.938,4.938,0,0,0-.325,1.561,2.053,2.053,0,0,0,.567,1.5l.029.026.008.005a2.056,2.056,0,0,0,1.493.56,4.964,4.964,0,0,0,1.548-.322l.684.682a1.956,1.956,0,0,1,.212.3l3.848,8.1a1.435,1.435,0,0,0,1.294.851h.008a1.446,1.446,0,0,0,1.026-.432l1.192-1.2a2.132,2.132,0,0,0,.569-1.426c0-.066,0-.117-.005-.144l-1.051-11.581c.317-.238.636-.484.965-.739,3.536-2.766,7.6-6.313,11.779-10.286l4.256,4.26a2.314,2.314,0,0,1,.278.365l8.318,14.891a1.451,1.451,0,0,0,2.322.342l2.512-2.51a1.9,1.9,0,0,0,.514-1.31,1.769,1.769,0,0,0-.069-.491l-2.125-7.095,1.729-1.733a1.563,1.563,0,0,0,0-2.205l-1.268-1.267a1.559,1.559,0,0,0-2.062-.129l-.3-.995,1.887-1.886a1.577,1.577,0,0,0,.455-1.107,1.54,1.54,0,0,0-.455-1.1l-1.262-1.262a1.563,1.563,0,0,0-2.217,0l-.013.012-2.089-6.976q1.082-1.032,2.062-1.96C1019.32,677.193,1022.053,674.6,1023.994,672.006Z" transform="translate(-969.276 -660.182)"/>
  </svg>   
                  </div>
                  <span>Reserve Flight</span>
                </button>
  
                <button class="item active"  type="button" >
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
  
                  <span>Manage Flights</span>
                  </div>
                  
                </button>
  
  
                <button  type="button" class="item" onClick={(e) => EditProfileHendler(e)}>
                  <div class="group-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
  </svg>
                  </div>
                  <span>Edit Profile</span>
                </button>
  
  
               
  
  
              </div>
            </header>
  
            {/* SDD    LINE 1666 IN MAIN.CSS*/}
  
  
  
            
  
  <div class="box d2">
  <label class="center">All Reserved Flights</label>
  
    <div class="box f2">
      {Reservations.map(reserv =>
          <div>
      {/* //loop will be created here inside the box f2 :D*/}
  
  
    <div class="listing-item100">
        <figure class="image">
            <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
            <figcaption>
              <div class="caption">
              <h1>Depart Flight</h1>
                <p>Flight Number:{reserv.Flight_NoFrom}</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>From:{reserv.Flight_From} </h4>
            <h4>To:{reserv.Flight_To}</h4>
            <h4>Flight Date:{reserv.Flight_DateFrom}</h4>
            <h4>Flight Time:{reserv.Flight_DateFrom}</h4>
            <h4>Cabin:{reserv.CabinFrom}</h4>
            <h4>Seat:{reserv.SeatsChoosenFrom}</h4>
            <h4>Booking Number:{reserv._id}</h4>
            {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
            {/* <a  class="button-79" role="button" onClick={scrollToBottom} >SELECT SEAT</a> */}
            <Link class="button-79" role="button" to="SeatMap"  onClick={() => parentToChild(reserv,reserv.Adults,reserv.Children,reserv.Flight_IDFrom,true,reserv.Flight_DateFrom)} smooth={true}>Select Seat</Link>
  
        </div>
    </div>
   
    <div class="listing-item100">
        <figure class="image">
            <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
            <figcaption>
              <div class="caption">
                <h1>Return Flight</h1>
                <p>Flight Number:{reserv.Flight_NoTo}</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
           <h4>From:{reserv.Flight_To} </h4>
            <h4>To:{reserv.Flight_From}</h4>
            <h4>Flight Date:{reserv.Flight_DateTo}</h4>
            <h4>Flight Time:{reserv.Flight_DateTo}</h4>
            <h4>Cabin:{reserv.CabinTo}</h4>
            <h4>Seat:{reserv.SeatsChoosenTo}</h4>
            <h4>Booking Number:{reserv._id}</h4>
            {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
            {/* <a href="#modal-opened" class="link-1" id="modal-closed">Reserve Flight</a> */}
            {/* <a  class="button-79" role="button"  >SELECT SEAT</a> */}
            {/* <button  class="button-79" role="button" onClick={scrollToBottom}>SELECT SEAT</button> */}
            {/* spy={true} */}
            <Link class="button-79" role="button" to="SeatMap" onClick={() => parentToChild(reserv,reserv.Adults,reserv.Children,reserv.Flight_IDTo,false,reserv.Flight_DateTo)}  smooth={true}>Select Seat</Link>
    
        </div>
    </div>
    
    {/* on click will send reservation number + total price refunded */}
    <div class="listing-item99">
    <button  type="button" onClick={() => ConfirmDelete(reserv._id,reserv.TotalPrice,reserv.Email)} class="button-70" > 
    <div class="center">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>
  </div>
    Cancel Reservation
       </button>
       
       
  
       </div>
       <div class="listing-item99">
    <button  type="button" onClick={() => Showboarding(reserv.Flight_DateFrom,reserv.Flight_DateTo,reserv.Flight_From,reserv.Flight_To,reserv.CabinFrom,reserv.CabinTo)} class="button-100" > 
    <div class="center">
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-ticket-detailed-fill" viewBox="0 0 16 16">
    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5Zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5Zm0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5ZM4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1Z"/>
  </svg>
  </div>
      Show Boardingpass
       </button>
       
       
  
       </div>
       
       </div>
   
   )}
   
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

export default UserManageBooking;