import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';

import $ from 'jquery';

import 'antd/dist/antd.css'; 
import '../css/popup.css';

import '../css/main.css';
import '../css/guest.css';
import '../css/SelectSeat.scss';

import '../css/EditUser.css';
import '../css/EditUser1.css';
import Swal from 'sweetalert2'

import '../css/BoardingPass.scss';




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


const UserEditProfile = () => {

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
  
  const [Data, setState] = useState({
    FirstName: "",
    LastName: "",  
    Email: "",
    Date_of_Birth: "", // Data type date
    PassPort_No: "",
    Username: "",
    Password: "",
  });
  
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
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

   
      
    

//   useEffect(() => {

//     if(Result1 && Result2)
//     {
//       setLoading(false);
//     }

//     if(isdepart && isreturn){
//      document.getElementById("yourButtonID").style.visibility="visible";
//      setbothselected(false);
//     // document.getElementById("yourButtonID").style.backgroundColor="red";
    
//     }
//   },[Result1,Result2,isdepart,isreturn]);



  const changeHander = (e) => {
    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };

  
  


 
  const updateHandler = (e) => {
    e.preventDefault();    // prevent reloading the page
   var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(Data.Date_of_Birth!==null &&Data.FirstName!==''&& Data.LastName!==''&& Data.Email!==''&& Data.Username!==''&& Data.Password!==''&&  Data.PassPort_No!==''){
        if(Data.FirstName.trim().includes(" ")){ // means space name of contian space between username
          warning14();
        }
       else if(Data.LastName.trim().includes(" ")){ // means space name of contian space between username
          warning15();
        }
        else if(Data.Username.trim().includes(" ")){ // means space name of contian space between username
          warning13();
        }
 
else { // will post normally
    axios.post('http://localhost:8000/createuseraccount', Data)
    .then(response => {
      console.log(response.status);
      setState({
        FirstName: "",
        LastName: "",  
        Email: "",
        Date_of_Birth: "", // Data type date
        PassPort_No: "",
        Username: "",
        Password: "",
        })
        success(); // data succ added less go
      
      }).catch(error => {
        if(!Data.Email.match(mailformat)){
          warning11()
         } 
         else
        warning9();             ///MUST BE ALLOWED  CHANGEEEE
        //console.log(error);
    })
  }
   
  }

  


  else if(Data.FirstName=="" ){
    warning4();
  }
  else if(Data.LastName=="" ){
    warning5();
  }
  else if(Data.Date_of_Birth==''){
    warning7();
  }
  else if(Data.PassPort_No==''){
    warning12();
  }
  else if(Data.Email=='' ){
    warning6();
  }
 else if(!Data.Email.match(mailformat)){
    warning11()
   } 
  else if(Data.Username=='' ){
    warning8();
  }
  else if(Data.Password=='' ){
    warning10();
  }
  
  else {
    warning();
  }
  
  };

  
  const warning = () => {
    message.warning('Fill All Fields Please!');
  };
  const warning13 = () => {
    message.warning('Remove Spaces From "Username"!');
  };
  const warning14 = () => {
    message.warning('Remove Spaces From "Fisrt Name"!');
  };
  const warning15 = () => {
    message.warning('Remove Spaces From "Last Name"!');
  };
  const warning11 = () => {
    message.warning('Invalid Email!');
  };

  const warning4 = () => {
    message.warning(' "First Name" Must be Filled!');
  };
  const warning5 = () => {
    message.warning(' "Last Name" Must be Filled!');
  };
  const warning6 = () => {
    message.warning(' "Email" Must be Filled!');
  };
  const warning7 = () => {
    message.warning(' "Date Of Birth" Must be Filled!');
  };
  const warning8 = () => {
    message.warning('"Username" Must be Filled!');
  };
  const warning10 = () => {
    message.warning('"Password" Must be Filled!');
  };
  const warning12 = () => {
    message.warning('"Passport No" Must be Filled!');
  };
  const warning9 = () => {
    message.warning('Username/Email already Exists!');
  };

  var now = new Date();
  now.setFullYear(now.getFullYear()-18);
  var now2 =  moment().subtract(18, 'years')

  const success = () => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Profile Data Successfully Updated',
        showConfirmButton: false,
        timer: 1500
      })
  };

  
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






  

    // if (sessionStorage.getItem('AuthenticationState') !== "UserAuthenticated") {
    //   window.open("UserHomePage", "_self");
    //   warning2();
    // }
    
    return (
      <>
             <div class="s011">
      <form>
        <fieldset>
        
        </fieldset>
        <div class="inner-form">
          <header>
          <label class="center2">Edit Profile</label>
            <div class="travel-type-wrap">
           
              <button type="button" class="item "  onClick={(e) => SearchFlightHandler(e)}>
              <div class="group-icon">
              <svg width="70px" height="70px" viewBox="0 0 58.568 58.568" xmlns="http://www.w3.org/2000/svg">
  <path id="flight_plane" data-name="flight plane" d="M1023.994,672.006c2.4-3.218,3.843-6.559,3.85-8.946a3.323,3.323,0,0,0-.453-1.828,1.706,1.706,0,0,0-.578-.584,3.265,3.265,0,0,0-1.852-.466c-2.381,0-5.723,1.442-8.942,3.849a77.166,77.166,0,0,0-8.806,8.487q-.917.966-1.934,2.031l-6.976-2.091.02-.02a1.566,1.566,0,0,0-.005-2.2l-1.259-1.261a1.571,1.571,0,0,0-1.11-.461,1.541,1.541,0,0,0-1.1.458l-1.885,1.886-1-.3a1.563,1.563,0,0,0-.125-2.063l-1.266-1.265a1.568,1.568,0,0,0-1.109-.457,1.534,1.534,0,0,0-1.1.458l-1.73,1.73-7.094-2.125a1.775,1.775,0,0,0-.507-.072,1.875,1.875,0,0,0-1.311.531l-2.494,2.494a1.463,1.463,0,0,0-.439,1.029,1.433,1.433,0,0,0,.761,1.284l14.918,8.334a2.607,2.607,0,0,1,.362.275l4.253,4.252c-3.978,4.191-7.522,8.25-10.284,11.781-.258.328-.5.649-.742.965l-11.541-1.048a1.573,1.573,0,0,0-.2-.012,2.127,2.127,0,0,0-1.429.591l-1.163,1.161a1.449,1.449,0,0,0-.446,1.029,1.418,1.418,0,0,0,.839,1.3l8.119,3.857a1.843,1.843,0,0,1,.311.223l.674.668a4.938,4.938,0,0,0-.325,1.561,2.053,2.053,0,0,0,.567,1.5l.029.026.008.005a2.056,2.056,0,0,0,1.493.56,4.964,4.964,0,0,0,1.548-.322l.684.682a1.956,1.956,0,0,1,.212.3l3.848,8.1a1.435,1.435,0,0,0,1.294.851h.008a1.446,1.446,0,0,0,1.026-.432l1.192-1.2a2.132,2.132,0,0,0,.569-1.426c0-.066,0-.117-.005-.144l-1.051-11.581c.317-.238.636-.484.965-.739,3.536-2.766,7.6-6.313,11.779-10.286l4.256,4.26a2.314,2.314,0,0,1,.278.365l8.318,14.891a1.451,1.451,0,0,0,2.322.342l2.512-2.51a1.9,1.9,0,0,0,.514-1.31,1.769,1.769,0,0,0-.069-.491l-2.125-7.095,1.729-1.733a1.563,1.563,0,0,0,0-2.205l-1.268-1.267a1.559,1.559,0,0,0-2.062-.129l-.3-.995,1.887-1.886a1.577,1.577,0,0,0,.455-1.107,1.54,1.54,0,0,0-.455-1.1l-1.262-1.262a1.563,1.563,0,0,0-2.217,0l-.013.012-2.089-6.976q1.082-1.032,2.062-1.96C1019.32,677.193,1022.053,674.6,1023.994,672.006Z" transform="translate(-969.276 -660.182)"/>
</svg>
                </div>
                <span>RESERVE FLIGHT</span>
              </button>

              <button type="button"class="item" onClick={(e) => ReservedFlightsHandler(e)}>
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


              <button type="button" class="item active" >
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
						My Info
					</span>

                    <div class="wrap-input100 validate-input m-b-23" data-validate = "FirstName is reauired">
                       <div class="grid-container-EditUser">
						
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>     
                        <span >
					First Name
					</span>
                    </div >
                    
						<input class="input100"  name="FirstName" placeholder="Type your FirstName" value={Data.FirstName} onChange={(e) => changeHander(e)}></input>
                        <span class="focus-input100" ></span>
					</div>

                    <div class="wrap-input100 validate-input m-b-23" data-validate = "LastName is reauired">
                    <div class="grid-container-EditUser">
						
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
                       
            <span >
					Last Name
					</span>
                    </div >


						<input class="input100"  name="LastName" placeholder="Type your LastName"  value={Data.LastName} onChange={(e) => changeHander(e)}></input>
                        <span class="focus-input100" ></span>
					</div>

                    <div class="wrap-input100 validate-input m-b-23" data-validate = "date of Birth is reauired">
                    <div class="grid-container-EditUser">
						
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg>  
<span >
					 Date Of Birth
					</span>
                    </div >
                    
                    <DatePicker   type="date" format="DD-MM-YYYY" 
           defaultPickerValue={now2} disabledDate={d => d.isAfter(now)} value={Data.Date_of_Birth} name="Date_of_Birth" onChange={(date) => setState(prevData => {
              return {...prevData ,Date_of_Birth: date}}) 
    }/>
                        <span class="focus-input100" ></span>
					</div>

                    <div class="wrap-input100 validate-input m-b-23" data-validate = "Passport Number is reauired">
                    <div class="grid-container-EditUser">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-credit-card-2-front-fill" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"/>
</svg>
<span >
					 Passport No
					</span>
                    </div >   
						<input class="input100"  name="PassPort_No" placeholder="Type your Passport Number"  value={Data.PassPort_No} onChange={(e) => changeHander(e)}></input>
                        <span class="focus-input100" ></span>
					</div>

                    <div class="wrap-input100 validate-input m-b-23" data-validate = "Email is reauired">
                    <div class="grid-container-EditUser">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
<span >
					 Email
					</span>
                    </div>
						<input class="input100"  name="Email" placeholder="Type your Email" value={Data.Email} onChange={(e) => changeHander(e)}></input>
                        <span class="focus-input100" ></span>
					</div>




					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired"  >
                    <div class="grid-container-EditUser">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
<span >
					 Username
					</span>
                    </div>
						<input class="input100" name="Username" placeholder="Type your Username" value={Data.Username} onChange={(e) => changeHander(e)}></input>
                        <span class="focus-input100" ></span>
					</div>

					<div class="wrap-input100 validate-input m-b-23" data-validate="Password is required" >

                    <div class="grid-container-EditUser"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
  <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
<span >
					 Password
					</span>
                    </div>
						<input class="input100" type="password" name="Password" placeholder="Type your Password" value={Data.Password} onChange={(e) => changeHander(e)}></input>
						<span class="focus-input100" ></span>
					</div>
					
					

                    


					
                    <a type="button"class="button-60" role="button"  onClick={(e) => updateHandler(e)}>Update</a>

					<div class="txt1 text-center p-t-54 p-b-20">
						
					</div>

					

					<div class="flex-col-c p-t-155">
						

						
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


        </div>
      </form>
    </div>
    
  


<body>
		<div class="card qr-theme">
        <div class="card_heading">
					<div class="card_logo">
						<img src="http://logok.org/wp-content/uploads/2015/03/Qatar-Airways-logo-logotype-1024x768.png" class="qatar"></img>
					</div>
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/281813/SIN.jpg" />
					<div class="card_divider">
            <div class="divider_left divider_hole">
            </div>
            <div class="divider">
            </div>
            <div class="divider_right divider_hole">
            </div>
        </div>
					<h2>Boarding Pass</h2>
          <div class="inner"></div>
        </div>
        <div class="card_trip">
            <div class="trip_from">
                <h1>MIA</h1>
                <h2>Miami</h2>
            </div>
            <div class="trip_icon">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/553328/From.png" />
            </div>
            <div class="trip_to">
                <h1>SIN</h1>
                <h2>Singapore</h2>
            </div>
        </div>
        <div class="card_divider">
            <div class="divider_left divider_hole">
            </div>
            <div class="divider">
            </div>
            <div class="divider_right divider_hole">
            </div>
        </div>
      <div class="card_flight_details">
        <div class="card_seating">
            <div class="seating_passenger">
                <h2>Passenger</h2>
                <h3>Deven Blackburn</h3>
            </div>
            <div class="seating_passenger_dos">
                <h2>Passenger</h2>
                <h3>Leonardo Restrepo</h3>
            </div>
            <div class="seating_seat">
                <h2>Seat</h2>
                <h3>1A/1B</h3>
            </div>
        </div>
        <div class="card_details">
            <div class="details_flight">
                <h2>Depart on</h2>
                <h3>22 April, 16</h3>
            </div>
            <div class="details_date">
                <h2>Depart at</h2>
                <h3>20:30 pm</h3>
            </div>
            <div class="details_time">
                 <h2>Departs in</h2>
                 <h3 class="countdown">----</h3>
             </div>
        </div>
        <div class="card_details_continued">
              <div class="details_flight">
                  <h2>Flight</h2>
                  <h3>QR778</h3>
              </div>
              <div class="details_date">
                  <h2>Confirmation </h2>
                  <h3>b1ty45</h3>
              </div>
              <div class="details_time">
                  <h2>Gate</h2>
                  <h3>b12</h3>
              </div>
          </div>
      </div>
    </div>		
  </body>
       
       
      </>
      
    );
    
  
  


  

};

export default UserEditProfile;