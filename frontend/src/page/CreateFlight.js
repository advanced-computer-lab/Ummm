import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 

import moment from "moment";
import {
  Form,Input,Button,Select,DatePicker,InputNumber} from 'antd';


const CreateFlight = () => {
  const [componentSize, setComponentSize] = useState('default');

  const [Data, setState] = useState({
    Flight_No: "",
    From: "",  
    To: "",
    Flight_Date: "", // Data type date
    Terminal: "",
    Economy_Seats: "",
    Business_Seats: "",
    First_Seats: ""
  });
  

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  // useEffect(() => {  // Run after page loads "more usefull in get"

  // },[]);


  const changeHander = (e) => {
    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };


  const submitHandler = (e) => {
    e.preventDefault();    // prevent reloading the page
    Object.keys(Data).forEach(key => {
      if(key=='Economy_Seats' || key=='Business_Seats' || key=='First_Seats')
      if (Data[key]=="") {
           Data[key] = 0;
         }
       });
    axios.post('http://localhost:8000/createflight',  Data)
    .then(response => {
      console.log(response);
      setState({
        Flight_No: "",
        From: "",  
        To: "",
        Flight_Date: "", // Data type date
        Terminal: "",
        Economy_Seats: "",
        Business_Seats: "",
        First_Seats: ""
        })
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

        <Form.Item>
         <Button onClick={(e) => submitHandler(e)} >Create Flight</Button>
        </Form.Item>

      </Form>
    </>
  );
};
export default CreateFlight;
