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
  message,
  Mentions
} from 'antd';


  
  

const CreateUserAccount = () => {
  const history = useHistory();

  const [componentSize, setComponentSize] = useState('default');
 // const [form] = Form.useForm();

  const [Data, setState] = useState({
    FirstName: "",
    LastName: "",  
    Email: "",
    Date_of_Birth: "", // Data type date
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


  const submitHandler = (e) => {
    e.preventDefault();    // prevent reloading the page
   var mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(Data.Email.match(mailformat)){} 
   else{warning11()} 

    if(Data.Date_of_Birth!==null &&Data.FirstName!==''&& Data.LastName!==''&& Data.Email!==''&& Data.Username!==''&& Data.Password!=='' ){
    axios.post('http://localhost:8000/createuseraccount', Data)
    .then(response => {
      console.log(response.status);
      setState({
        FirstName: "",
        LastName: "",  
        Email: "",
        Date_of_Birth: "", // Data type date
        Username: "",
        Password: "",
        })
        success(); // data succ added less go
      }).catch(error => {
        warning9();
        //console.log(error);
    })
   
  }


  else if(Data.FirstName=="" ){
    warning4();
  }
  else if(Data.LastName=="" ){
    warning5();
  }
  else if(Data.Email=='' ){
    warning6();
  }
 
  else if(Data.Date_of_Birth==''){
    warning7();
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

  const success = () => {
    message.success('Account Successfully Created!');
  };

  const warning = () => {
    message.warning('Fill All Fields Please!');
  };
  const warning11 = () => {
    message.warning('Invalid Email');
  };

  const warning4 = () => {
    message.warning(' "FirstName" Must be Filled!');
  };
  const warning5 = () => {
    message.warning(' "LastName" Must be Filled!');
  };
  const warning6 = () => {
    message.warning(' "Email" Must be Filled!');
  };
  const warning7 = () => {
    message.warning(' "Date_of_Birth" Must be Filled!');
  };
  const warning8 = () => {
    message.warning('"Username" Must be Filled!');
  };
  const warning10 = () => {
    message.warning('"Password" Must be Filled!');
  };
  const warning9 = () => {
    message.warning('Username/Email already Exists!');
  };
  

  var now = new Date();
  now.setFullYear(now.getFullYear()-18);
  var now2 =  moment().subtract(18, 'years')

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 13,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
   //     form={form}
      >                     
  
 
        

        <Form.Item  
        rules={[
          {
            required: true,
          },
        ]}label="First Name">
          <Input   type="text" name="FirstName" maxLength="11"   placeholder="Enter your First Name" 
          value={Data.FirstName} onChange={(e) => changeHander(e)} />
        </Form.Item>


        <Form.Item label="Last Name"
         rules={[
           {
             required: true,
           },
         ]}>
        <Input type="text" name="LastName" maxLength="11"  placeholder="Enter your Last Name" 
        value={Data.LastName} onChange={(e) => changeHander(e)}/>
        </Form.Item>
        
        
        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Select Date!',
          },
        ]} label="Date of Birth">
          <DatePicker type="date" format="DD-MM-YYYY" 
defaultPickerValue={now2} disabledDate={d => d.isAfter(now)} value={Data.Date_of_Birth} name="Date_of_Birth" onChange={(date) => setState(prevData => {
              return {...prevData ,Date_of_Birth: date}}) 
    }/>
        </Form.Item>
        <Form.Item  
        rules={[
          { type: "email",
            required: true,          },
        ]}label="Email">
          <Input type= "email"  name="Email" maxLength="30" placeholder="Example@gmail.com"  
          value={Data.Email} onChange={(e) => changeHander(e)} />
        </Form.Item>

        <Form.Item  
        rules={[
          {
            required: true,
          },
        ]}label="Username">
          <Input   type="text" name="Username" maxLength="11" placeholder="Enter your Username" 
          value={Data.Username} onChange={(e) => changeHander(e)} />
        </Form.Item>

        <Form.Item  
        rules={[
          {
            required: true,
          },
        ]}label="Password">
          <Input   type="password" name="Password" placeholder="Enter your Password"  
          value={Data.Password} onChange={(e) => changeHander(e)} />
        </Form.Item>

        <Form.Item>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={() => history.goBack()}>Back</Button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={(e) => submitHandler(e)} >Create User</Button>
        </Form.Item>

      </Form>
    </>
  );
};
export default CreateUserAccount;
