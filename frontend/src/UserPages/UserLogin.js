import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import '../css/App.css';

import moment from "moment";
import {
  Form,
  Input,
  Button,
  message,
} from 'antd';


const UserLogin = () => {

  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();
  const [Data, setState] = useState({
    Username: "",  
    Password: "",
  }); 
  

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


  const changeHander = (e) => {
    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };


  const loginHandler = (e) => {
      
    e.preventDefault(); 
  
    const criteria = {};
    Object.keys(Data).forEach(key => {
   if (Data[key]!=="") {
        criteria[key] = Data[key];
      }
    });

   // prevent reloading the page
    axios.post('http://localhost:8000/userlogin', criteria)
    .then(response => {
      console.log(response.status);
      sessionStorage.setItem("AuthenticationState", "UserAuthenticated");
      sessionStorage.setItem("Username", criteria.Username);
      // console.log(sessionStorage.getItem("AuthenticationState"))
      // console.log(sessionStorage.getItem("Username"))

      setState({
        Username: "",  
        Password: "",
        })
        history.push({
            pathname: '/UserHomePage' //Pass to 
          });
       }).catch(error => {
         warning();
        console.log(error);
    })

  };


  const createHandler = (e) => {
      
    e.preventDefault();  
        history.push({
            pathname: '/CreateUserAccount'
          });
  };

  const GuestHandler = (e) => {
      
    e.preventDefault();  
        history.push({
            pathname: '/UserHomePage'
          });
  };
  




  const warning = () => {
    message.warning('Incorrect Username or Password!');
  }




    return (

      <>
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
    

     <div>
     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={() => history.goBack()}>Back</Button>
        </div>

          <Form.Item label="Username">

            <Input type="text" name="Username" placeholder="Username" value={Data.Username} onChange={(e) => changeHander(e)}/>
          </Form.Item>
  
  
          <Form.Item label="Password">
          <Input type="password" name="Password" placeholder="Password" value={Data.Password} onChange={(e) => changeHander(e)}/>
          </Form.Item>
          

          <Form.Item>
        &nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={(e) => loginHandler(e)} >Log-In</Button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={(e) => createHandler(e)} >Create Account</Button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={(e) => GuestHandler(e)} >Continue as Guest</Button>
        </Form.Item>
  
        </Form>
      </>
      
    );
    

  

        
};
export default UserLogin;