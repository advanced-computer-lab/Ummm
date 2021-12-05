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
  const [componentSize, setComponentSize] = useState('default');

  const history = useHistory();
  const[userinfo,Setuserinfo]=useState([]);
  const criteria = {};
  const [Guard, setGuard] = useState(true);
  criteria["Username"]= sessionStorage.getItem("Username");
 // const getusername = sessionStorage.getItem("username");
  
   const [Data, setState] = useState({
    FirstName:"",
    LastName: userinfo.LastName,  
    Email: userinfo.Email,
    Date_of_Birth: userinfo.Date_of_Birth, // Data type date
    PassPort_No: userinfo.PassPort_No,
    Username: userinfo.Username,
    Password: userinfo.Password,
  });
  const [Result1, setResult] = useState();
  useEffect(() => {
    if(Guard === true){
    axios.post('http://localhost:8000/userinfo',criteria).then((result)=>
    {    
       console.log("ssss")
     console.log(result.data[0])
     setResult(result.data[0]);
      } )};
   
     if(Result1){ 
       setState(
        {
        ["FirstName"] : Result1.FirstName, 
        ["LastName"]: Result1.LastName,
        ["Email"]: Result1.Email,
        ["Date_of_Birth"]:moment(Result1.Date_of_Birth), // Data type date
        ["PassPort_No"]: Result1.PassPort_No,
        ["Username"]: Result1.Username,
        ["Password"]: Result1.Password,  })}

    if( Result1 && Guard === true){
      setTimeout(() => {
        setGuard(false);
      }, 1000);
    }

  },[Result1,Guard]);




  console.log(Result1);
  console.log(Data);





  const changeHander = (e) => {
    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };
  const updateHandler = (e,user) => {
    e.preventDefault();    // prevent reloading the page
    var update =user.Username;
    var update1=user.Email;

    axios.put('http://localhost:8000/updateuser', {data: {var1:update, var2:Data,var3:update1}})
    .then(response => {
        history.push('/Usersearchflight')
      success(); // data succ added less go
       }).catch(error => {
      console.log(error);
    })

  }
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
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    };

    const ContactUs = () => { // e will contain the reservation number 
      Swal.fire({
        title: 'Call:011414656668',
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
    
    
    
    
    return (
      <>

{/* <div class="wrapper">
  <div class="qr">
    <div class="title">boarding pass</div>
    <div class="qr-wrapper">
      <div class="qr-image"></div>
    </div>
    <a>expand</a>
  </div>
  <div class="inner-wrapper">
    <div class="details">
      <div class="date">Aug 31 2016</div>
      <div class="city">
        <div class="from loc">
          <div class="name">pnq <span>pune</span></div>
          <div class="weather">
            <div class="icon">
              <div class="drop1 drop"></div>
              <div class="drop2 drop"></div>
              <div class="drop3 drop"></div>
            </div>
          </div>
        </div>
        <div class="to loc">
          <div class="name">del <span>delhi</span></div>
          <div class="weather">
            <div class="icon">
              <div class="sunrays ray1"></div>
              <div class="sunrays ray2"></div>
              <div class="sunrays ray3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="plane"></div>
      <div class="content">
        <div class="gate">2B <span>gate</span></div>
        <div class="gate">16B <span>seat</span></div>
        <div class="gate">12:50PM <span>departure</span></div>
      </div>
    </div>
    <div class="seat-layout">
      <div class="content">
        <div class="close"><i class="fa fa-remove fa-2x"></i></div>
        <div class="gate">2B <span>gate</span></div>
        <div class="seat">16B <span>seat</span></div>
        <div class="boarding">12:20PM <span>boarding</span></div>
        <div class="departure">12:50PM <span>departure</span></div>
        <div class="flight">GO181 <span>flight</span></div>
      </div>
     
     
    </div>
  </div>
</div> */}

<div></div>










    
    
  
    {/* <script type="text/javascript">
var images = [],
index = 0;
images[0] = "<a href = 'https://www.computerhope.com/'><img src='https://www.computerhope.com/banners/banner.gif' alt='Visit Computer Hope'></img></a>";
images[1] = "<a href = 'https://www.computerhope.com/history'><img src='https://www.computerhope.com/banners/banner2.gif' alt='Computer History'></img></a>";
images[2] = "<a href = 'https://www.computerhope.com/'><img src='https://www.computerhope.com/banners/banner3.gif' alt='Visit Computer Hope'></img></a>";
index = Math.floor(Math.random() * images.length);
document.write(images[index]);

</script> */}




       
       
      </>
      
    );
    
  
  


  

};

export default UserEditProfile;