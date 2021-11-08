import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 

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


const UpdateFlight = () => {
  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();
  const UpFlight = history.location.state?.data


  const [Data, setState] = useState({
    Flight_No: UpFlight.Flight_No,
    From: UpFlight.From,  
    To: UpFlight.To,
    Flight_Date: UpFlight.Flight_Date, // Data type date
    Terminal: UpFlight.Terminal,
    Economy_Seats: UpFlight.Economy_Seats,
    Business_Seats: UpFlight.Business_Seats,
    First_Seats: UpFlight.First_Seats
  });
  
  

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };


  const changeHander = (e) => {
    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };

  const updateHandler = (e,flight) => {
    e.preventDefault();    // prevent reloading the page
    var update =flight._id;

    Object.keys(Data).forEach(key => {
      if(key=='Economy_Seats' || key=='Business_Seats' || key=='First_Seats')
      if (Data[key]=="" || Data[key]==null) {
           Data[key] = 0;
         }
       });

    axios.put('http://localhost:8000/UpdateFlight', {data: {var1:update, var2:Data}})
    .then(response => {
        history.push('/ViewFlights')
      console.log(response);
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
        
        
        {/* disabledDate={d => !d || d.isBefore(new Date())} */}

        <Form.Item label="Flight Date">
<DatePicker type="date" format="DD-MM-YYYY, HH:mm"  defaultValue={moment(Data.Flight_Date)} showTime="true" 
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
         <Button onClick={(e) => updateHandler(e,UpFlight)} >Update Flight</Button>
        </Form.Item>

      </Form>
    </>
  );
};

export default UpdateFlight;