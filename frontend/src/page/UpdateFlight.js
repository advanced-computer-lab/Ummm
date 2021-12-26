import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
<<<<<<< HEAD
=======
import Cookies from "js-cookies";

>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40

import moment from "moment";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
<<<<<<< HEAD
<<<<<<< HEAD
  Cascader,
=======
  Space,
  Cascader,
  TimePicker,
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
  Space,
  Cascader,
  TimePicker,
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  message,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';


const UpdateFlight = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const LogOutHandler = (e) => {
    sessionStorage.clear()
    history.push({
      pathname: '/LoginPage'
    });

    
  };
  if (sessionStorage.getItem('AuthenticationState') !== "AdminAuthenticated") {
    window.open("LoginPage", "_self");
 }
 //Is their authentication token still valid?
//  else if (Date.now > new Date(sessionStorage.getItem('AuthenticationExpires'))) {
//        window.open("AccessDenied.html", "_self");
//  }
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======

  const LogOutHandler = (e) => {
  var userid = localStorage.getItem('UserID')
 axios.delete('http://localhost:8000/logout',{data: {ID: userid}})
 localStorage.clear()
 history.push({
   pathname: '/LoginPage'
 });
};
if (localStorage.getItem('AuthenticationState') !== "AdminAuthenticated") {
  window.open("LoginPage", "_self");
}
 //Is their authentication token still valid?
//  else if (Date.now > new Date(localStorage.getItem('AuthenticationExpires'))) {
//        window.open("AccessDenied.html", "_self");
//  }
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40

  const [componentSize, setComponentSize] = useState('default');
  const history = useHistory();
  const [form] = Form.useForm();
<<<<<<< HEAD
<<<<<<< HEAD
  const UpFlight = history.location.state?.data


=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  const format = 'HH:mm';
  
  const UpFlight = history.location.state?.data

<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  const [Data, setState] = useState({
    Flight_No: UpFlight.Flight_No,
    From: UpFlight.From,  
    To: UpFlight.To,
    Flight_Date: UpFlight.Flight_Date, // Data type date
<<<<<<< HEAD
<<<<<<< HEAD
    Terminal: UpFlight.Terminal,
    Economy_Seats: UpFlight.Economy_Seats,
    Business_Seats: UpFlight.Business_Seats,
    First_Seats: UpFlight.First_Seats
  });
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
    Flight_Duration: UpFlight.Flight_Duration,
    Flight_DHour: parseInt(UpFlight.Flight_Duration.substring(0, UpFlight.Flight_Duration.indexOf(':'))),
    Flight_DMin: parseInt(UpFlight.Flight_Duration.substring(UpFlight.Flight_Duration.indexOf(':')+1)),
    Terminal: UpFlight.Terminal,
    Economy_Seats: UpFlight.Economy_Seats,
    Business_Seats: UpFlight.Business_Seats,
    First_Seats: UpFlight.First_Seats,
    Economy_Baggage: UpFlight.Economy_Baggage,
    Business_Baggage: UpFlight.Business_Baggage,
    First_Baggage: UpFlight.First_Baggage,
    Economy_Price: UpFlight.Economy_Price,
    Business_Price: UpFlight.Business_Price,
    First_Price: UpFlight.First_Price,
  });


  // useEffect(() => {

  //   setState( prevData => {
  //     return {...prevData ,[Flight_DHour]: parseInt(Data.Flight_Duration.substring(0, Data.Flight_Duration.indexOf(':'))),
  //     [Flight_DMin]: parseInt(Data.Flight_Duration.substring(0, Data.Flight_Duration.indexOf(':')))}})

  // },[Data]);

<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
  
  

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

<<<<<<< HEAD
<<<<<<< HEAD
   
    if(Data.Flight_No.length==5 &Data.From.length==3 && Data.To.length==3 &&Data.Flight_Date!==null 
      &&Data.Terminal!==''&& Data.Economy_Seats!==''&& Data.First_Seats!==''&& Data.Business_Seats!=='' ){
    axios.put('http://localhost:8000/UpdateFlight', {data: {var1:update, var2:Data}})
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
       var Data1 = {};

    Object.keys(Data).forEach(key => {
      if(key=='Flight_DHour'){
        Data1['Flight_Duration'] = Data.Flight_DHour + ':';
      }
      else if(key=='Flight_DMin'){
        Data1['Flight_Duration'] += Data.Flight_DMin +'';
       }
       else if(key!=='Flight_Duration')
       Data1[key] = Data[key];
      });
      console.log(Data1);

   
    if(Data.Flight_No.length==5 &Data.From.length==3 && Data.To.length==3 &&Data.Flight_Date!==null 
      &&Data.Terminal!==''&& Data.Economy_Seats!==''&& Data.First_Seats!==''&& Data.Business_Seats!=='' ){
<<<<<<< HEAD
    axios.put('http://localhost:8000/UpdateFlight', {data: {var1:update, var2:Data1}})
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
    .then(response => {
=======

        Cookies.setItem("AccessToken",localStorage.getItem('AccessToken'))
        Cookies.setItem("RefreshToken",localStorage.getItem('RefreshToken'))
    axios.put('http://localhost:8000/UpdateFlight', {data: {var1:update, var2:Data1}}, {withCredentials: true})
    .then(response => {
      localStorage.setItem("AccessToken",Cookies.getItem("AccessToken"))
      document.cookie = 'AccessToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      document.cookie = 'RefreshToken' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';

>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
        history.push('/ViewFlights')
      console.log(response);
      form.resetFields();
      success(); // data succ added less go
<<<<<<< HEAD
       }).catch(error => {
      console.log(error);
=======
       }).catch(err => {
        if(err.response.status==403){
          history.push({
            pathname: '/LoginPage'
          });
        }
      console.log(err);
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40

        <Form.Item 
         rules={[
           {
             required: true,
             message: 'Please Select Set Duration!',
           },
         ]}label="Duration">
  <Space>
    <InputNumber min={0} max={23} value={Data.Flight_DHour}   onChange={(number) => setState(prevData => {
          return {...prevData ,Flight_DHour: number}}) 
        } />
    <InputNumber min={0} max={59} value={Data.Flight_DMin}   onChange={(number) => setState(prevData => {
          return {...prevData ,Flight_DMin: number}}) 
        }/>
      </Space>
 </Form.Item>



<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
        


>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
        


>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Economy Seats">         
<<<<<<< HEAD
<<<<<<< HEAD
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
=======
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} min={0} max={78} placeholder="78 Max" onChange={(number) => setState(prevData => {
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} min={0} max={78} placeholder="78 Max" onChange={(number) => setState(prevData => {
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
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
<<<<<<< HEAD
<<<<<<< HEAD
          <InputNumber type="Number" name="Business_Seats" value={Data.Business_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
=======
          <InputNumber type="Number" name="Business_Seats" value={Data.Business_Seats} min={0} max={42} placeholder="42 Max" onChange={(number) => setState(prevData => {
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
          <InputNumber type="Number" name="Business_Seats" value={Data.Business_Seats} min={0} max={42} placeholder="42 Max" onChange={(number) => setState(prevData => {
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
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
<<<<<<< HEAD
<<<<<<< HEAD
          <InputNumber type="Number" name="First_Seats" value={Data.First_Seats} max={500} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Seats: number}}) 
          }/>
        </Form.Item>
        
        <Form.Item>
        &nbsp;&nbsp;&nbsp;&nbsp;
=======
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
          <InputNumber type="Number" name="First_Seats" value={Data.First_Seats} min={0} max={20} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Seats: number}}) 
          }/>
        </Form.Item>










        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Economy Baggage">         
          <InputNumber type="Number" name="Economy_Baggage" value={Data.Economy_Baggage}  min={0} max={15} placeholder="15 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Baggage: number}}) 
          }/>
        </Form.Item>

        
        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Business Baggage">   
          <InputNumber type="Number" name="Business_Baggage" value={Data.Business_Baggage} min={0} max={15} placeholder="15 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Baggage: number}}) 
          }/>
        </Form.Item>


        <Form.Item
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="First Baggage">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Baggage} min={0} max={15} placeholder="15 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Baggage: number}}) 
          }/>
        </Form.Item>







        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Economy Price">         
          <InputNumber  type="Number" name="Economy_Price" value={Data.Economy_Price} min={0} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Price: number}}) 
          }/>
        </Form.Item>
     
        
        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Business Price">   
          <InputNumber type="Number" name="Business_Price" value={Data.Business_Price} min={0} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Price: number}}) 
          }/>
        </Form.Item>


        <Form.Item 
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="First Price">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Price} min={0} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Price: number}}) 
          }/>
        </Form.Item>













        
        <Form.Item>
        <Button onClick={(e) => LogOutHandler(e)}>Log Out</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<<<<<<< HEAD
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
=======
>>>>>>> 6a85d8e1defe9d6fc684467f269a3878da128f40
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