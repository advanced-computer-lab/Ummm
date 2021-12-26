import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import { SettingOutlined } from '@ant-design/icons';
import Cookies from "js-cookies";


import moment from "moment";
import {
  Form,
  Input,
  Button,
  Radio,
  TimePicker,
  Space,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  message,
  Mentions
} from 'antd';


  
  

const CreateFlight = () => {
  if (localStorage.getItem('AuthenticationState') !== "AdminAuthenticated") {
    window.open("LoginPage", "_self");
 }


 const LogOutHandler = (e) => {
   var userid = localStorage.getItem('UserID')
  axios.delete('http://localhost:8000/logout',userid)
  localStorage.clear()
  history.push({
    pathname: '/LoginPage'
  });
};

  const history = useHistory();

  const [componentSize, setComponentSize] = useState('default');
   const [form] = Form.useForm();
   const format = 'HH:mm';

  const [Data, setState] = useState({
    Flight_No: "",
    From: "",  
    To: "",
    Flight_Date: "", // Data type date
    Terminal: "",
    Flight_Duration: "", //string :
    Flight_DHour: "", //temp
    Flight_DMin: "", //temp
    Economy_Seats: "",
    Business_Seats: "",
    First_Seats: "",
    Economy_Baggage: "",
    Business_Baggage: "",
    First_Baggage: "",
    Economy_Price: "",
    Business_Price: "",
    First_Price: "",
    Available_Seats: "",
  });
  

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const changeHander = (e) => {
    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };


  const submitHandler = (e) => {
    e.preventDefault();    // prevent reloading the page
   

   


    // Object.keys(Data).forEach(key => {
    //   if(key=='Economy_Seats' || key=='Business_Seats' || key=='First_Seats')
    //   if (Data[key]=="") {
    //        Data[key] = 0;
    //      }
    //    });
    
    // /if(Data.Flight_No.length==5 &Data.From.length==3 && Data.To.length==3 &&Data.Flight_Date!==null &&Data.Terminal!==''&& Data.Economy_Seats!==''&& Data.First_Seats!==''&& Data.Business_Seats!=='' ){

    //   const Data1 = {};
    //   const Data2 = {};
    //   const Data3 = {};
      
  
    //   Object.keys(Data).forEach(key => {
    //     console.log(!key.startsWith("Economy"));
    //  if (!key.startsWith("Economy") && !key.startsWith("Business") && !key.startsWith("First")) {
    //       Data1[key] = Data[key];
    //       Data2[key] = Data[key];
    //       Data3[key] = Data[key];
    //     }
    //     else if(key.startsWith("Economy")){
    //       Data1[key.substring(8)] = Data[key];
    //     }
    //     else if(key.startsWith("Business")){
    //       Data2[key.substring(9)] = Data[key];
    //     }
    //     else if(key.startsWith("First")){
    //       Data3[key.substring(6)] = Data[key];
    //     }
    //   });
    //       Data1["Cabin"] = "Economy";
    //       Data2["Cabin"] = "Business";
    //       Data3["Cabin"] = "First";

    //   console.log(Data1);
    //   console.log(Data2);
    //   console.log(Data3);


    var Data1 = {};
    var a = new Array(141);
    // var b = new Array(Data.Business_Seats+1);
    // var c = new Array(Data.First_Seats+1);
    a[0] = false; 
    // b[0] = false; c[0] = false;
    for (var i = 1; i < a.length; ++i) { 
      if(i<21){
        if(i<Data.First_Seats+1)
             a[i] = true;
        else
             a[i] = false;
     }
     else if(i<63) {
      if(i<Data.Business_Seats+21)
         a[i] = true;
      else
         a[i] = false;
     }
     else {
      if(i<Data.Economy_Seats+63)
             a[i] = true;
        else
             a[i] = false;
     }
    }
     console.log(a);
    //  for (var i = 1; i < b.length; ++i) { 
    //   b[i] = true; 
    //  }
    //  for (var i = 1; i < c.length; ++i) { 
    //   c[i] = true;
    //  }

    Object.keys(Data).forEach(key => {
      if(key=='Flight_DHour'){
        Data1['Flight_Duration'] = Data.Flight_DHour + ':';
      }
      else if(key=='Flight_DMin'){
        Data1['Flight_Duration'] += Data.Flight_DMin +'';
       }
       else if(key=='Available_Seats'){
        Data1['Available_Seats'] = a;
       }
      //  else if(key=='Business_Available'){
      //   Data1['Business_Available'] = b;
      // }
      // else if(key=='First_Available'){
      //   Data1['First_Available'] = c;
      // }
       else if(key!=='Flight_Duration')
       Data1[key] = Data[key];
      });
      console.log(Data1);


      Cookies.setItem("AccessToken",localStorage.getItem('AccessToken'))
      Cookies.setItem("RefreshToken",localStorage.getItem('RefreshToken'))

      
      if (Data.Flight_No !== '' && Data.From !== '' && Data.To !== '' && Data.Flight_Date !==null  && Data.Flight_DHour !== null&& Data.Flight_DMin !== null&& Data.Terminal !== '' && Data.Economy_Price !== '' && Data.Economy_Baggage !== ''&& Data.First_Seats !== ''  && Data.Economy_Price !== '' && Data.First_Baggage !== ''&& Data.First_Seats !== ''  && Data.First_Price !== '' && Data.Business_Baggage !== ''&& Data.Business_Price !== ''&& Data.Business_Seats !== '') {
       
  
         // will post normally
          axios.post('http://localhost:8000/createflight', Data1, {withCredentials: true})
          .then(response => {
            localStorage.setItem("AccessToken",Cookies.getItem("AccessToken"))
            document.cookie = 'AccessToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = 'RefreshToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      
            console.log(response.status);
            //  window.location.reload(false);
             form.resetFields();
              success(); // data succ added less go
            }).catch(error => {
              if(error.response.status==403){
                var msg = error.response.data
                warning99(msg);
                history.push({
                  pathname: '/LoginPage'
                });
              }
             
              console.log(error);
          })
  
        }
  else if (Data.Flight_No == '') {
    warning1();
  }
  else if (Data.From == "") {
    warning2();
  }
  else if (Data.To == '') {
    warning3();
  }
  else if (Data.Flight_Date == '') {
    warning4();
  }
  // else if (Data.Flight_Duration == '') {
  //   warning5();
  // }

  else if (Data.Flight_DHour == '') {
    warning115();
  }
  else if (Data.Flight_DMin == '') {
    warning116();
  }
  
  else if (Data.Terminal == '') {
    warning6();
  }

  
 




  else if (Data.Economy_Seats== '') {
    warning7();
  }
  else if (Data.Business_Seats== '') {
    warning8();
  }
  else if (Data.First_Seats== '') {
    warning9();
  }

  // Economy_Seats: "",
  //   Business_Seats: "",
  //   First_Seats: "",


  else if (Data.Economy_Baggage == '') {
    warning10();
  }
  else if (Data.Bussiness_Baggage == '') {
    warning11();
  }
  else if (Data.First_Baggage == '') {
    warning12();
  }




  else if (Data.Economy_Price == '') {
    warning13();
  }
  else if (Data.Business_Price == '') {
    warning14();
  }

  else if (Data.First_Price == '') {
    warning15();
  }
  
  


 
  



  else {
    warning();
  }



    // axios.post('http://localhost:8000/createflight', Data2)
    // .then(response => {
    //   console.log(response.status);
    //   //  window.location.reload(false);
    //    form.resetFields();
    //     success(); // data succ added less go
    //   }).catch(error => {
    //     warning9();
    //     console.log(error);
    // })

    // axios.post('http://localhost:8000/createflight', Data3)
    // .then(response => {
    //   console.log(response.status);
    //   //  window.location.reload(false);
    //    form.resetFields();
    //     success(); // data succ added less go
    //   }).catch(error => {
    //     warning9();
    //     console.log(error);
    // })


    setState({
      Flight_No: Data.Flight_No,
      From: Data.From,  
      To: Data.To,
      Flight_Date: Data.Flight_Date, // Data type date
      Terminal: Data.Terminal,
      Flight_Duration: Data.Flight_Duration ,
      Flight_DHour: Data.Flight_DHour, //temp
      Flight_DMin: Data.Flight_DMin, //temp
      Economy_Seats: Data.Economy_Seats,
      Business_Seats: Data.Business_Seats,
      First_Seats: Data.First_Seats,
      Economy_Baggage: Data.Economy_Baggage,
      Business_Baggage: Data.Business_Baggage,
      First_Baggage: Data.First_Baggage,
      Economy_Price: Data.Economy_Price,
      Business_Price: Data.Business_Price,
      First_Price: Data.First_Price,
      Available_Seats: Data.Available_Seats,
      })
   
  // };

  // else if(Data.Flight_No.length<3  ){
  //   warning1();
  // }
  // else if(Data.From.length<3 ){
  //   warning2();
  // }
  // else if(Data.To.length<3 ){
  //   warning3();
  // }
  // else if(Data.Flight_Date=="" ){
  //   warning4();
  // }
  // else if(Data.Terminal=="" ){
  //   warning8();
  // }
  // else if(Data.Economy_Seats=='' ){
  //   warning5();
  // }
 
  // else if(Data.Business_Seats==''){
  //   warning6();
  // }
  // else if(Data.First_Seats=='' ){
  //   warning7();
  // }
  // else {
  //   warning();
  // }
  
  };

  const success = () => {
    
    message.success('Flight Successfully Added!');
  
      history.push({
        pathname: '/homepage'
      });
   
  };

  const warning = () => {
    message.warning('Fill All Fields Please!');
  };
  const warning1 = () => {
    message.warning('"Flight_No" Must be Filled!');
  };

  const warning2 = () => {
    message.warning(' "From" Field Must Exacly be 3 Letters!');
  };

  const warning3 = () => {
    message.warning(' "To" Field Must Exacly be 3 Letters!');
  };
  const warning4 = () => {
    message.warning(' "Flight_Date" Must be Filled!');
  };
  const warning5 = () => {
    message.warning(' "Duration" Must be Filled!');
  };
  const warning6 = () => {
    message.warning(' "terminal" Must be Filled!');
  };



  const warning7 = () => {
    message.warning(' "Eco Seats" Must be Filled!');
  };
  const warning8 = () => {
    message.warning('"Business Seats " Must be Filled!');
  };
  const warning9 = () => {
    message.warning('"First Seat" Must be Filled!');
  };



  const warning10 = () => {
    message.warning('"Economy Baggage" Must be Filled!');
  };
  const warning11 = () => {
    message.warning('"Buss Baggage" Must be Filled!');
  };
  const warning12 = () => {
    message.warning('"First Baggage" Must be Filled!');
  };



  const warning13 = () => {
    message.warning('"Economy Price" Must be Filled!');
  };
  const warning14 = () => {
    message.warning('"Buss Price" Must be Filled!');
  };
  const warning15 = () => {
    message.warning('"First Price" Must be Filled!');
  };


  const warning99 = (msg) => {
    message.warning(msg);
  };

  
 
  const warning115 = () => {
    message.warning('"Duration Hour" Must be Filled!');
  };
  const warning116 = () => {
    message.warning('"Duration Min" Must be Filled!');
  };
  


  return (
    <>
    

    <div class="box d2">







<div class="limiter">
  <div class="container-login100" >
    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
      <form class="login100-form validate-form">
        <span class="login100-form-title p-b-49">
          Admin Create Flight
        </span>

        

        <div class="wrap-input100 validate-input m-b-23" data-validate="Flight Number is reauired">
          <div class="grid-container-EditUser">

          <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-flight-interface-kiranshastry-solid-kiranshastry.png"/>
            <span >
              Flight Number
            </span>
          </div >

          <input type="text" name="Flight_No" maxLength="5" placeholder="FNXXX" value={Data.Flight_No} onChange={(e) => changeHander(e)}></input>
          <span class="focus-input100" ></span>
        </div>

        <div class="grid-container">

        <div class="wrap-input100 validate-input m-b-23" data-validate="From is reauired">
          <div class="grid-container-EditUser">

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>

            <span >
             From
            </span>
          </div >
          <input type="text" name="From" maxLength="3" placeholder="3 letters" value={Data.From} onChange={(e) => changeHander(e)}></input>
          <span class="focus-input100" ></span>
        </div>


       


        <div class="wrap-input100 validate-input m-b-23" data-validate="To is reauired">
          <div class="grid-container-EditUser">

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>

            <span >
             To
            </span>
          </div >
          <input type="text" name="To" maxLength="3" placeholder="3 letters" value={Data.To} onChange={(e) => changeHander(e)}></input>
          <span class="focus-input100" ></span>
        </div>
        </div>

        <div class="grid-container">


        <div class="wrap-input100 validate-input m-b-23" data-validate="Flight Date is reauired">
                  <div class="grid-container-EditUser">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                    </svg>
                    <span >
                      Flight Date
                    </span>
                  </div >

                  <DatePicker style={{ 
                    borderTopColor:"transparent",
                    borderBottomColor:"transparent",
                    borderLeftColor:"transparent",
                    borderRightColor:"transparent",
                    // forcedColorAdjust:"red",
                    // stopColor: "#ccc",
                    // stopColor: "rgb(255, 255, 255)",
                minWidth:"280px",
                imageWidth:"250px",
            marginTop: "25px", 
            backgroundColor:"transparent",
            Color:"white",    
          }}type="date" format="DD-MM-YYYY" value={Data.Flight_Date} format="DD-MM-YYYY, HH:mm"
          showTime="true" disabledDate={d => d.isBefore(new Date())}
             name="FlightDate" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date: date}}) 
      }/>
                  <span class="focus-input100" ></span>
                </div>

                




                <div class="wrap-input100 validate-input m-b-23" data-validate="Duration is reauired">
                  <div class="grid-container-EditUser">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                    </svg>
                    <span >
                       Duration
                    </span>
                  </div >
                  <Form.Item >
  <Space>
    <InputNumber style={{ 
                   
                    // forcedColorAdjust:"red",
                    // stopColor: "#ccc",
                    // stopColor: "rgb(255, 255, 255)",
                minWidth:"40px",
                imageWidth:"100px",
            marginTop: "25px", 
            marginLeft: "40px", 
           
          }} min={0} max={23} value={Data.Flight_DHour}   onChange={(number) => setState(prevData => {
          return {...prevData ,Flight_DHour: number}}) 
        }/>
    <InputNumber style={{ 
                    
                    // forcedColorAdjust:"red",
                    // stopColor: "#ccc",
                    // stopColor: "rgb(255, 255, 255)",
                minWidth:"10px",
                imageWidth:"100px",
            marginTop: "25px", 
         
       
          }} min={0} max={59} value={Data.Flight_DMin}   onChange={(number) => setState(prevData => {
          return {...prevData ,Flight_DMin: number}}) 
        }/>
      </Space>
 </Form.Item>
                </div>


        </div>

       

        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
  <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
</svg>
            <span >
            <Form.Item label="Terminal">
          <Select style={{ 
                    borderTopColor:"transparent",
                    borderBottomColor:"transparent",
                    borderLeftColor:"transparent",
                    borderRightColor:"transparent",
                    // forcedColorAdjust:"red",
                    // stopColor: "#ccc",
                    // stopColor: "rgb(255, 255, 255)",
                minWidth:"400px",
                imageWidth:"250px",
            marginTop: "25px", 
            backgroundColor:"transparent",
            Color:"white",    
          }}type="text" name="Terminal" value={Data.Terminal} onSelect={(value) => setState(prevData => {
    return {...prevData ,Terminal: value}})}>
            <Select.Option value="1">Terminal 1</Select.Option>
            <Select.Option value="2">Terminal 2</Select.Option>
            <Select.Option value="3">Terminal 3</Select.Option>
          </Select>
        </Form.Item>
            </span>
          </div>
         
          <span class="focus-input100" ></span>
        </div>


        <div class="grid-container3">

        <div class="wrap-input100 validate-input m-b-23" data-validate="Password is required">

          <div class="grid-container-EditUser"><img src="https://img.icons8.com/ios-filled/50/000000/car-seat.png"/>
            <span >
             <Form.Item label="Economy Seats"> 
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={500}  min={0} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Seats: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
          
          <span class="focus-input100" ></span>
        </div>



       

        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <img src="https://img.icons8.com/ios-filled/50/000000/car-seat.png"/>
            <span >
            <Form.Item label="Business Seats"> 
          <InputNumber type="Number" name="Business_Seats" value={Data.Business_Seats} max={500}   min={0} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Seats: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
      
          <span class="focus-input100" ></span>
        </div>

        

        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <img src="https://img.icons8.com/ios-filled/50/000000/car-seat.png"/>
            <span >
            <Form.Item label="First Seats"> 
          <InputNumber type="Number" name="First_Seats" value={Data.First_Seats} max={500}  min={0} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Seats: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
       
          <span class="focus-input100" ></span>
        </div>

        </div>
        <div class="grid-container3">
        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
            <span >
            <Form.Item label="Economy Baggage">         
          <InputNumber type="Number" name="Economy_Baggage" value={Data.Economy_Baggage} max={15}   min={0} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Baggage: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
        
          <span class="focus-input100" ></span>
        </div>



        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
            <span >
           <Form.Item label="Business Baggage">   
          <InputNumber type="Number" name="Business_Baggage" value={Data.Business_Baggage} max={15}  min={0} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Baggage: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
       
          <span class="focus-input100" ></span>
        </div>


        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>
            <span >
            <Form.Item label="First Baggage">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Baggage} max={20}   min={0} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Baggage: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
     
          <span class="focus-input100" ></span>
        </div>
        </div>

        <div class="grid-container3">
        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>
            <span >
        
            <Form.Item label="Economy Price">         
          <InputNumber  type="Number" name="Economy_Price" value={Data.Economy_Price} max={5000}  min={1} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Price: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
      
          <span class="focus-input100" ></span>
        </div>


        
        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>
            <span >
        
            <Form.Item label="Business Price">   
          <InputNumber type="Number" name="Business_Price" value={Data.Business_Price} max={5000}   min={1} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Price: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
      
          <span class="focus-input100" ></span>
        </div>


        <div class="wrap-input100 validate-input m-b-23" data-validate="Terminal is reauired">
          <div class="grid-container-EditUser">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cash-coin" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
  <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
  <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
  <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
</svg>
            <span >
        
          
        <Form.Item label="First Price">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Price} max={5000}  min={1}placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Price: number}}) 
          }/>
        </Form.Item>
            </span>
          </div>
   
          <span class="focus-input100" ></span>
        </div>


        </div>

        <a class="button-60 center20" role="button" onClick={(e) => submitHandler(e)}>Create Flight </a>
        <a class="button-60 center20" role="button" onClick={() => history.goBack()}>Back</a>
        <a class="button-60 center20" role="button"onClick={(e) => LogOutHandler(e)} >Log out</a>
        
        
        
        {/* <Button onClick={(e) => LogOutHandler(e)}>Log Out</Button>
   
   <Button onClick={() => history.goBack()}>Back</Button>
  
    <Button onClick={(e) => submitHandler(e)} >Create Flight</Button> */}
         {/* <Button onClick={(e) => searchHandler(e)} >Search</Button>
         <Button onClick={() => history.goBack()}>Back</Button>
          <Button onClick={(e) => LogOutHandler(e)}>Log Out</Button> */}
    
       
        <div class="txt1 text-center p-t-54 p-b-20">

        </div>



        <div class="flex-col-c p-t-155">



        </div>
      </form>
    </div>
  </div>
</div>



</div>





       

       
      
      


      
    </>
  );
};
export default CreateFlight;
