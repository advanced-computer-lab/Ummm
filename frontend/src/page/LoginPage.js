import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import './App.css';

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
  Switch,
} from 'antd';


const LoginPage = () => {

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
    axios.post('http://localhost:8000/LoginPage', criteria)
    .then(response => {
     // setResult(response.data);
      setState({
        Username: "",  
        Password: "",
        })
        history.push({
            pathname: '/homepage'
          });
       }).catch(error => {
       console.log(error);
    })

  };



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
    
          <Form.Item label="From">
            <Input type="text" name="Username" placeholder="Username" value={Data.Username} onChange={(e) => changeHander(e)}/>
          </Form.Item>
  
  
          <Form.Item label="To">
          <Input type="password" name="Password" placeholder="Password" value={Data.Password} onChange={(e) => changeHander(e)}/>
          </Form.Item>
          
          <Form.Item>
           <Button onClick={(e) => loginHandler(e)} >Log-In</Button>
          </Form.Item>
  
        </Form>
      </>
      
    );
    

  

        
};
export default LoginPage;