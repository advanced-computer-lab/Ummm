import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
<<<<<<< HEAD
<<<<<<< HEAD
import './App.css';
=======
import '../css/App.css';
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
import '../css/App.css';
import Cookies from "js-cookies";

>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40

import moment from "moment";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
<<<<<<< HEAD
<<<<<<< HEAD
=======
  Space,
  TimePicker,
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
  Space,
  TimePicker,
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';


const SearchFlight = () => {
<<<<<<< HEAD
<<<<<<< HEAD
 const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [componentSize, setComponentSize] = useState('default');
=======
  if (sessionStorage.getItem('AuthenticationState') !== "AdminAuthenticated") {
    window.open("LoginPage", "_self");
 }
 const LogOutHandler = (e) => {
  sessionStorage.clear()
  history.push({
    pathname: '/LoginPage'
  });

  
};
 //Is their authentication token still valid?
//  else if (Date.now > new Date(sessionStorage.getItem('AuthenticationExpires'))) {
=======
  if (localStorage.getItem('AuthenticationState') !== "AdminAuthenticated") {
    window.open("LoginPage", "_self");
 }
 const LogOutHandler = (e) => {
  var userid = localStorage.getItem('UserID')
 axios.delete('http://localhost:8000/logout',{data: {ID: userid}})
 localStorage.clear()
 history.push({
   pathname: '/LoginPage'
 });
};
 //Is their authentication token still valid?
//  else if (Date.now > new Date(localStorage.getItem('AuthenticationExpires'))) {
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
//        window.open("AccessDenied.html", "_self");
//  }



 const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [componentSize, setComponentSize] = useState('default');
  const format = 'HH:mm';
<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  const [Result, setResult] = useState();
  
  const [Data, setState] = useState({
    Flight_No: "",
    From: "",  
    To: "",
    Flight_Date: "", // Data type date
    Terminal: "",
<<<<<<< HEAD
<<<<<<< HEAD
    Economy_Seats: "",
    Business_Seats: "",
    First_Seats: ""
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
    Flight_Duration: "",
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
<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  });
  

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  // useEffect(() => {  // Run after page loads "more usefull in get"

  // },[]);


  const changeHander = (e) => {


    console.log(moment(Data.Flight_Date));

    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======

>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  const searchHandler = (e) => {
    e.preventDefault(); 
  
    const criteria = {};
    var dd;

    Object.keys(Data).forEach(key => {
   if (Data[key]!=="") {
<<<<<<< HEAD
<<<<<<< HEAD
        criteria[key] = Data[key];
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40

    if(key=='Flight_DHour'){
      criteria['Flight_Duration'] = Data.Flight_DHour + ':';
    }
    else if(key=='Flight_DMin'){
      criteria['Flight_Duration'] += Data.Flight_DMin +'';
     }
     else if(key!=='Flight_Duration')
     criteria[key] = Data[key];
  
<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
      }
    });
    console.log(criteria);

   // prevent reloading the page
<<<<<<< HEAD
    axios.post('http://localhost:8000/SearchFlight', criteria)
    .then(response => {
=======

   Cookies.setItem("AccessToken",localStorage.getItem('AccessToken'))
   Cookies.setItem("RefreshToken",localStorage.getItem('RefreshToken'))

    axios.post('http://localhost:8000/SearchFlight', criteria, {withCredentials: true})
    .then(response => {
      localStorage.setItem("AccessToken",Cookies.getItem("AccessToken"))
      document.cookie = 'AccessToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'RefreshToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
      setResult(response.data);
       console.log(Result);
       setLoading(false);
      setState({
        Flight_No: "",
<<<<<<< HEAD
<<<<<<< HEAD
        From: "",  
        To: "",
        Flight_Date: "", // Data type date
        Terminal: "",
        Economy_Seats: "",
        Business_Seats: "",
        First_Seats: ""
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
    From: "",  
    To: "",
    Flight_Date: "", // Data type date
    Terminal: "",
    Flight_Duration: "",
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
<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
        })
       }).catch(error => {
=======
        })
       }).catch(error => {
        if(error.response.status==403){
          history.push({
            pathname: '/LoginPage'
          });
        }
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
      console.log(error);
    })

  };



  if (isLoading) {
    return (
      <>
<<<<<<< HEAD
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
        >
          <Form.Item label="Flight_No:">
          <Input type="text" name="Flight_No" maxLength="5" placeholder="FNXXX" value={Data.Flight_No} onChange={(e) => changeHander(e)}/>
        </Form.Item>
    
          <Form.Item label="From">
            <Input type="text" name="From" maxLength="3" placeholder="3 letters" value={Data.From} onChange={(e) => changeHander(e)}/>
          </Form.Item>
  
  
          <Form.Item label="To">
          <Input type="text" name="To" maxLength="3" placeholder="3 letters" value={Data.To} onChange={(e) => changeHander(e)}/>
          </Form.Item>
          
          
  
          <Form.Item label="Flight Date">
          <DatePicker type="date" format="DD-MM-YYYY" value={Data.Flight_Date} format="DD-MM-YYYY, HH:mm"
=======
           <div class="box d2">







<div class="limiter">
  <div class="container-login100" >
    <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
      <form class="login100-form validate-form">
        <h5 class="login100-form-title p-b-49">
          Admin Search Flight
        </h5>

        

        <div class="wrap-input100 validate-input m-b-23" data-validate="Flight Number is reauired">
          <div class="grid-container-EditUser">

          <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-flight-interface-kiranshastry-solid-kiranshastry.png"/>
            <h5 >
              Flight Number
            </h5>
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

            <h5 >
             From
            </h5>
          </div >
          <input type="text" name="From" maxLength="3" placeholder="3 letters" value={Data.From} onChange={(e) => changeHander(e)}></input>
          <span class="focus-input100" ></span>
        </div>


       


        <div class="wrap-input100 validate-input m-b-23" data-validate="To is reauired">
          <div class="grid-container-EditUser">

            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>

            <h5 >
             To
            </h5>
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
                    <h5 >
                      Flight Date
                    </h5>
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
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
          showTime="true" disabledDate={d => d.isBefore(new Date())}
             name="FlightDate" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date: date}}) 
      }/>
<<<<<<< HEAD
          </Form.Item>
<<<<<<< HEAD
=======



          <Form.Item label="Duration">
  <Space>
    <InputNumber min={0} max={23} value={Data.Flight_DHour}   onChange={(number) => setState(prevData => {
          return {...prevData ,Flight_DHour: number}}) 
        } />
    <InputNumber min={0} max={59} value={Data.Flight_DMin}   onChange={(number) => setState(prevData => {
=======
                  <span class="focus-input100" ></span>
                </div>

                




                <div class="wrap-input100 validate-input m-b-23" data-validate="Duration is reauired">
                  <div class="grid-container-EditUser">

                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-calendar2-week-fill" viewBox="0 0 16 16">
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM8.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM3 10.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                    </svg>
                    <h5 >
                       Duration
                    </h5>
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
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
          return {...prevData ,Flight_DMin: number}}) 
        }/>
      </Space>
 </Form.Item>
<<<<<<< HEAD

>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
  
  
          <Form.Item label="Terminal">
          <Select type="text" name="Terminal" value={Data.Terminal} onSelect={(value) => setState(prevData => {
=======
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
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
    return {...prevData ,Terminal: value}})}>
            <Select.Option value="1">Terminal 1</Select.Option>
            <Select.Option value="2">Terminal 2</Select.Option>
            <Select.Option value="3">Terminal 3</Select.Option>
          </Select>
        </Form.Item>
<<<<<<< HEAD
  
          <Form.Item label="Economy Seats"> 
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Seats: number}}) 
          }/>
        </Form.Item>

        <Form.Item label="Business Seats"> 
          <InputNumber type="Number" name="Business_Seats" value={Data.Business_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Seats: number}}) 
          }/>
        </Form.Item>

        <Form.Item label="First Seats"> 
          <InputNumber type="Number" name="First_Seats" value={Data.First_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Seats: number}}) 
          }/>
        </Form.Item>
<<<<<<< HEAD
  
    
        <Form.Item>
        &nbsp;&nbsp;&nbsp;&nbsp;
=======

        <Form.Item label="Economy Baggage">         
          <InputNumber type="Number" name="Economy_Baggage" value={Data.Economy_Baggage} max={15} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Baggage: number}}) 
          }/>
        </Form.Item>

        
        <Form.Item label="Business Baggage">   
          <InputNumber type="Number" name="Business_Baggage" value={Data.Business_Baggage} max={15} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Baggage: number}}) 
          }/>
        </Form.Item>


        <Form.Item label="First Baggage">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Baggage} max={20} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Baggage: number}}) 
          }/>
        </Form.Item>







        <Form.Item label="Economy Price">         
          <InputNumber  type="Number" name="Economy_Price" value={Data.Economy_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Price: number}}) 
          }/>
        </Form.Item>
     
        
        <Form.Item label="Business Price">   
          <InputNumber type="Number" name="Business_Price" value={Data.Business_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Price: number}}) 
          }/>
        </Form.Item>


        <Form.Item label="First Price">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Price: number}}) 
          }/>
        </Form.Item>

  
    
        <Form.Item>
        <Button onClick={(e) => LogOutHandler(e)}>Log Out</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
        <Button onClick={() => history.goBack()}>Back</Button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={(e) => searchHandler(e)} >Search</Button>
        </Form.Item>
        </Form>
=======
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


        <a class="button-60 center20" role="button" onClick={(e) => searchHandler(e)} >Search</a>
        <a class="button-60 center20" role="button" onClick={() => history.goBack()}>Back</a>
        <a class="button-60 center20" role="button" onClick={(e) => LogOutHandler(e)}>Log Out </a>
        
     
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











       
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
      </>
      
    );
    

  }


  return (
    <>
<<<<<<< HEAD
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
  
  <Form.Item label="Flight_No:">
          <Input type="text" name="Flight_No" maxLength="5" placeholder="FNXXX" value={Data.Flight_No} onChange={(e) => changeHander(e)}/>
        </Form.Item>
    
          <Form.Item label="From">
            <Input type="text" name="From" maxLength="3" placeholder="3 letters" value={Data.From} onChange={(e) => changeHander(e)}/>
          </Form.Item>
  
  
          <Form.Item label="To">
          <Input type="text" name="To" maxLength="3" placeholder="3 letters" value={Data.To} onChange={(e) => changeHander(e)}/>
          </Form.Item>
          
          
  
          <Form.Item label="Flight Date">
          <DatePicker type="date" format="DD-MM-YYYY" value={Data.Flight_Date} format="DD-MM-YYYY, HH:mm"
          showTime="true" disabledDate={d => d.isBefore(new Date())}
             name="FlightDate" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date: date}}) 
      }/>
          </Form.Item>
<<<<<<< HEAD
=======


          <Form.Item label="Duration">
  <Space>
    <InputNumber min={0} max={23} value={Data.Flight_DHour}   onChange={(number) => setState(prevData => {
          return {...prevData ,Flight_DHour: number}}) 
        } />
    <InputNumber min={0} max={59} value={Data.Flight_DMin}   onChange={(number) => setState(prevData => {
          return {...prevData ,Flight_DMin: number}}) 
        }/>
      </Space>
 </Form.Item>

>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
  
  
          <Form.Item label="Terminal">
          <Select type="text" name="Terminal" value={Data.Terminal} onSelect={(value) => setState(prevData => {
    return {...prevData ,Terminal: value}})}>
            <Select.Option value="1">Terminal 1</Select.Option>
            <Select.Option value="2">Terminal 2</Select.Option>
            <Select.Option value="3">Terminal 3</Select.Option>
          </Select>
        </Form.Item>
  
          <Form.Item label="Economy Seats"> 
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Seats: number}}) 
          }/>
        </Form.Item>

        <Form.Item label="Business Seats"> 
          <InputNumber type="Number" name="Business_Seats" value={Data.Business_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Seats: number}}) 
          }/>
        </Form.Item>

        <Form.Item label="First Seats"> 
          <InputNumber type="Number" name="First_Seats" value={Data.First_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Seats: number}}) 
          }/>
        </Form.Item>
<<<<<<< HEAD
=======

        <Form.Item label="Economy Baggage">         
          <InputNumber type="Number" name="Economy_Baggage" value={Data.Economy_Baggage} max={15} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Baggage: number}}) 
          }/>
        </Form.Item>

        
        <Form.Item label="Business Baggage">   
          <InputNumber type="Number" name="Business_Baggage" value={Data.Business_Baggage} max={15} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Baggage: number}}) 
          }/>
        </Form.Item>


        <Form.Item  label="First Baggage">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Baggage} max={20} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Baggage: number}}) 
          }/>
        </Form.Item>
=======

<div class="box d2">
<div class="limiter">
  <div class="container-login100" >
    <div class="wrap-login199 p-l-55 p-r-55 p-t-65 p-b-54">
      <form class="login100-form validate-form">
        <span class="login100-form-title p-b-49">
          Admin Search Flight Results
        </span>



        





>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40




<<<<<<< HEAD



        <Form.Item label="Economy Price">         
          <InputNumber  type="Number" name="Economy_Price" value={Data.Economy_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Price: number}}) 
          }/>
        </Form.Item>
     
        
        <Form.Item label="Business Price">   
          <InputNumber type="Number" name="Business_Price" value={Data.Business_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Price: number}}) 
          }/>
        </Form.Item>


        <Form.Item label="First Price">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Price: number}}) 
          }/>
        </Form.Item>

>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
  
    
         

          <Form.Item>
<<<<<<< HEAD
        &nbsp;&nbsp;&nbsp;&nbsp;
=======
          <Button onClick={(e) => LogOutHandler(e)}>Log Out</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
        <Button onClick={() => history.goBack()}>Back</Button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={(e) => searchHandler(e)} >Search</Button>
        </Form.Item>

        <div className="">
      <div className="content">
<<<<<<< HEAD
        
          <h1>Search Results </h1>

=======
           <h1>All Flights </h1>
           
          
         
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
          <br/>
          <table id="customers">
    <thead>
        <tr>
<<<<<<< HEAD
            <th id="cutomers">Flight_no</th>
            <th id="cutomers">From</th>
            <th id="customers">To</th>
            <th id="customers">Flight_Date</th>
            <th id="customers">Departure</th>
            <th id="customers">Terminal</th>
            <th id="customers">Economy</th>
            <th id="customers">Business</th>
            <th id="customers">First</th>
=======
            <th id="customers">Flight_no</th>
            <th id="customers">From</th>
            <th id="customers">To</th>
            <th id="customers">Flight&nbsp;Date</th>
            <th id="customers">Duration</th>
            <th id="customers">Terminal</th>

            <th id="customers">Seats&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            {/* <th id="customers">Business Seats</th>
            <th id="customers">First Seats</th> */}

            <th id="customers">Baggages</th>
            {/* <th id="customers">Business Baggage</th>
            <th id="customers">First Baggage</th> */}

            <th id="customers">Prices&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
            {/* <th id="customers">Business Price</th>
            <th id="customers">First Price</th> */}

            <th id="customers"></th>
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
        </tr>
    </thead>
  

    {Result.map(flight =>
         
       
         
   
        
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
<<<<<<< HEAD
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{moment(flight.Flight_Date).format("YYYY-MM-DD")}</span>
               
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{moment(flight.Flight_Date).format("HH:mm")}</span>
               
            </td>
=======
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{moment(flight.Flight_Date).format("YYYY-MM-DD  HH:mm")}</span>
               
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.Flight_Duration}</span>
            </td>
            
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.Terminal}</span>
           
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
<<<<<<< HEAD
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.Economy_Seats}</span>
              
=======
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Eco: {flight.Economy_Seats}</span>
                <br></br>
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Buss: {flight.Business_Seats}</span>
                <br></br>
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">First: {flight.First_Seats}</span>
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
            </td>
            
            
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
<<<<<<< HEAD
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.Business_Seats}</span>
                
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">{flight.First_Seats}</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold"></span>
            </td>
            
=======
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Eco: {flight.Economy_Baggage}</span>
                <br></br>
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Buss: {flight.Business_Baggage}</span>
                <br></br>
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">First: {flight.First_Baggage}</span>
                
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Eco: ${flight.Economy_Price}</span>
                <br></br>
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Buss: ${flight.Business_Price}</span>
                <br></br>
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">First: ${flight.First_Price}</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold"></span>
            </td>
          
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
        </tr>
         )}
 
</table>
<<<<<<< HEAD
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
          
      </div>
    </div>
=======
<br/>
&nbsp;&nbsp;&nbsp;
<Button onClick={() => history.goBack()}>Back</Button>
<Button onClick={(e) => LogOutHandler(e)}>Log Out</Button>
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>


          
      </div>
    </div>
    
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1

      </Form>
=======
   



      
         {Result.map(flight =>
                   <>





<table class="fl-table">
        <thead>
        <tr>
            <th>Flight Number</th>
            <th>From</th>
            <th>To</th>
            <th>Flight Date</th>
            <th>Duration</th>
            <th>Terminal</th>
            <th>Eco Seats</th>
            <th>Buss Seats</th>
            <th>First Seats</th>
            <th>Eco Baggage</th>
            <th>Buss Baggage</th>
            <th>First Baggage</th>
            <th>Eco Price</th>
            <th>Buss Price</th>
            <th>Fisrt Price</th>
        </tr>
        </thead>
    
        <tr>
            <td>{flight.Flight_No}</td>
            <td>{flight.From}</td>
            <td>{flight.To}</td>
            <td>{moment(flight.Flight_Date).format("YYYY-MM-DD  HH:mm")}</td>
            <td>{flight.Flight_Duration}</td>
            <td>{flight.Terminal}</td>
            <td>Eco: {flight.Economy_Seats}</td>
            <td>Buss: {flight.Business_Seats}</td>
            <td>First: {flight.First_Seats}</td>
            <td>Eco: {flight.Economy_Baggage}</td>
            <td>Buss: {flight.Business_Baggage}</td>
            <td>First: {flight.First_Baggage}</td>
            <td>Eco: ${flight.Economy_Price}</td>
            <td>Buss: ${flight.Business_Price}</td>
            <td>First: ${flight.First_Price}</td>
        </tr>
        
    
    </table>






</>





         )}

<>





  

  







         
  
         </>
        

       

    
       
       



                





     
       
    
      



      </form>

      
      
        <a class="button-60 center20" role="button" onClick={() => history.goBack()}>Back</a>
        <a class="button-60 center20" role="button" onClick={(e) => LogOutHandler(e)}>Log Out </a>
    </div>
  </div>
</div>



</div>





      
     

    

    
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
    </>
  );
};
export default SearchFlight;
