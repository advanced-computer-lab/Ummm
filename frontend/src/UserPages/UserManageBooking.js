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
  message,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';


const UpdateFlight = () => {

  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();
  const [form] = Form.useForm();
  const UpFlight = history.location.state?.data


  const [Data, setState] = useState({
    // Flight_No: UpFlight.Flight_No,
    // From: UpFlight.From,  
    // To: UpFlight.To,
    // Flight_Date: UpFlight.Flight_Date, // Data type date
    // Terminal: UpFlight.Terminal,
    // Economy_Seats: UpFlight.Economy_Seats,
    // Business_Seats: UpFlight.Business_Seats,
    // First_Seats: UpFlight.First_Seats
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

   
    if(Data.Flight_No.length==5 &Data.From.length==3 && Data.To.length==3 &&Data.Flight_Date!==null 
      &&Data.Terminal!==''&& Data.Economy_Seats!==''&& Data.First_Seats!==''&& Data.Business_Seats!=='' ){
    axios.put('http://localhost:8000/UpdateFlight', {data: {var1:update, var2:Data}})
    .then(response => {
        history.push('/ViewFlights')
      console.log(response);
      form.resetFields();
      success(); // data succ added less go
       }).catch(error => {
      console.log(error);
    })

  }

else if(Data.Flight_No.length<3  ){
  warning1();
}
else if(Data.From.length<3 ){
  warning2();
}
else if(Data.To.length<3 ){
  warning3();
}
else if(Data.Flight_Date=="" ){
  warning4();
}
else if(Data.Terminal=="" ){
  warning8();
}
else if(Data.Economy_Seats=='' ){
  warning5();
}

else if(Data.Business_Seats==''){
  warning6();
}
else if(Data.First_Seats=='' ){
  warning7();
}
else {
  warning();
}

};

const success = () => {
  message.success('Flight Successfully Added!');
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
  message.warning(' "Economy_Seats" Must be Filled!');
};
const warning6 = () => {
  message.warning(' "Business_Seats" Must be Filled!');
};
const warning7 = () => {
  message.warning(' "First_Seats" Must be Filled!');
};
const warning8 = () => {
  message.warning('"Terminal" Must be Filled!');
};
const warning9 = () => {
  message.warning('Flight_No already excited!');
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
        form={form}
      >     
<div>
      <h1>USERRR MANAGEEEE BOOKING</h1>          
      </div>      
  
  <Form.Item  
        rules={[
          {
            required: true,
            message: 'Please Fill it With 2 Letters followed by 3 numbers!',
          },
        ]}label="Flight_No">
          <Input type="text" name="Flight_No" maxLength="5" placeholder="FNXXX" value={Data.Flight_No} onChange={(e) => changeHander(e)}/>
        </Form.Item>
        

        <Form.Item  
        rules={[
          {
            required: true,
            message: 'Please Fill it With At Least 3 Letters!',
          },
        ]}label="From">
          <Input   type="text" name="From" maxLength="3" placeholder="3 letters"  value={Data.From} onChange={(e) => changeHander(e)} />
        </Form.Item>


        <Form.Item label="To"
         rules={[
           {
             required: true,
             message: 'Please Fill it With At Least 3 Letters!',
           },
         ]}>
        <Input type="text" name="To" maxLength="3" placeholder="3 letters" value={Data.To} onChange={(e) => changeHander(e)}/>
        </Form.Item>
        
        
        <Form.Item 
       label="Flight Date"
        rules={[
          {
            required: true,
            message: 'Please Select Date!',
          },
        ]} >
<DatePicker type="date" format="DD-MM-YYYY, HH:mm"  defaultValue={moment(Data.Flight_Date)} showTime="true" 
           name="FlightDate" onChange={(date) => setState(prevData => {
              return {...prevData ,Flight_Date: date}}) 
    }/>
        </Form.Item>

        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Select Date!',
          },
        ]} label="Terminal">
      
          <Select type="text" name="Terminal" value={Data.Terminal} onSelect={(value) => setState(prevData => {
    return {...prevData ,Terminal: value}})}>
            <Select.Option value="1">Terminal 1</Select.Option>
            <Select.Option value="2">Terminal 2</Select.Option>
            <Select.Option value="3">Terminal 3</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Economy Seats">         
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Seats: number}}) 
          }/>
        </Form.Item>

        
        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Business Seats">   
          <InputNumber type="Number" name="Business_Seats" value={Data.Business_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Seats: number}}) 
          }/>
        </Form.Item>

        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="First Seats">   
          <InputNumber type="Number" name="First_Seats" value={Data.First_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Seats: number}}) 
          }/>
        </Form.Item>
        
        <Form.Item>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={() => history.goBack()}>Back</Button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={(e) => updateHandler(e,UpFlight)} >Update Flight</Button>
        </Form.Item>


      </Form>
    </>
  );
};

export default UpdateFlight;