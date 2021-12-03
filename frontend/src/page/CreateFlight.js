import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import { SettingOutlined } from '@ant-design/icons';

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
  if (sessionStorage.getItem('AuthenticationState') !== "AdminAuthenticated") {
    window.open("LoginPage", "_self");
 }
 const LogOutHandler = (e) => {
  sessionStorage.clear()
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
    Economy_Available: "",
    Business_Available: "",
    First_Available: "",
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
    var a = new Array(Data.Economy_Seats+1);
    var b = new Array(Data.Business_Seats+1);
    var c = new Array(Data.First_Seats+1);
    a[0] = false; b[0] = false; c[0] = false;
    for (var i = 1; i < a.length; ++i) { 
      a[i] = true;
     }
     for (var i = 1; i < b.length; ++i) { 
      b[i] = true; 
     }
     for (var i = 1; i < c.length; ++i) { 
      c[i] = true;
     }

    Object.keys(Data).forEach(key => {
      if(key=='Flight_DHour'){
        Data1['Flight_Duration'] = Data.Flight_DHour + ':';
      }
      else if(key=='Flight_DMin'){
        Data1['Flight_Duration'] += Data.Flight_DMin +'';
       }
       else if(key=='Economy_Available'){
        Data1['Economy_Available'] = a;
       }
       else if(key=='Business_Available'){
        Data1['Business_Available'] = b;
      }
      else if(key=='First_Available'){
        Data1['First_Available'] = c;
      }
       else if(key!=='Flight_Duration')
       Data1[key] = Data[key];
      });
      console.log(Data1);

    axios.post('http://localhost:8000/createflight', Data1)
    .then(response => {
      console.log(response.status);
      //  window.location.reload(false);
       form.resetFields();
        success(); // data succ added less go
      }).catch(error => {
        warning9();
        console.log(error);
    })

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
      Flight_No: "",
      From: "",  
      To: "",
      Flight_Date: "", // Data type date
      Terminal: "",
      Flight_Duration: "",
      Economy_Seats: "",
      Business_Seats: "",
      First_Seats: "",
      Economy_Baggage: "",
      Business_Baggage: "",
      First_Baggage: "",
      Economy_Price: "",
      Business_Price: "",
      First_Price: "",
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
  
  <Form.Item  name="Flight_No"
        rules={[
          {
            required: true,
            message: 'Please Fill it With 2 Letters followed by 3 numbers!',
          },
        ]}label="Flight_No">
          <Input type="text" name="Flight_No" maxLength="5" placeholder="FNXXX" value={Data.Flight_No} onChange={(e) => changeHander(e)}/>
        </Form.Item>
        

        <Form.Item  name="From"
        rules={[
          {
            required: true,
            message: 'Please Fill it With At Least 3 Letters!',
          },
        ]}label="From" >
          <Input   type="text" name="From" maxLength="3" placeholder="3 letters"  value={Data.From} onChange={(e) => changeHander(e)} />
        </Form.Item>


        <Form.Item name="To"
         rules={[
           {
             required: true,
             message: 'Please Fill it With At Least 3 Letters!',
           },
         ]}label="To">
        <Input type="text" name="To" maxLength="3" placeholder="3 letters" value={Data.To} onChange={(e) => changeHander(e)}/>
        </Form.Item>
        
        
        <Form.Item name="FlightDate"
        rules={[
          {
            required: true,
            message: 'Please Select Date!',
          },
        ]} label="Flight Date and Dept.Time">
          <DatePicker type="date" format="DD-MM-YYYY" value={Data.Flight_Date} format="DD-MM-YYYY, HH:mm"
          showTime="true" disabledDate={d => d.isBefore(new Date())}
           name="FlightDate" onChange={(date) => setState(prevData => {
              return {...prevData ,Flight_Date: date}}) 
    }/>
        </Form.Item>

        {/* <Form.Item name="Duration"
         rules={[
           {
             required: true,
             message: 'Please Select Set Duration!',
           },
         ]}label="Duration">
        <TimePicker name="Duration" type="Number" format="HH:mm" value={Data.Flight_Duration} format="HH:mm"
        value={Data.Flight_Duration} format={format} 
        onChange={(number) => setState(prevData => {
          return {...prevData ,Flight_Duration: number}}) 
        }
        />
        </Form.Item> */}



<Form.Item name="Duration"
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



        <Form.Item name="Terminal"
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

       
        <Form.Item name="Economy_Seats"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Economy Seats">         
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={78} placeholder="78 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Seats: number}}) 
          }/>
        </Form.Item>

        
        <Form.Item name="Business_Seats"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Business Seats">   
          <InputNumber type="Number" name="Business_Seats" value={Data.Business_Seats} max={42} placeholder="42 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Seats: number}}) 
          }/>
        </Form.Item>

        <Form.Item name="First_Seats"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="First Seats">   
          <InputNumber type="Number" name="First_Seats" value={Data.First_Seats} max={20} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Seats: number}}) 
          }/>
        </Form.Item>










        <Form.Item name="Economy_Baggage"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Economy Baggage">         
          <InputNumber type="Number" name="Economy_Baggage" value={Data.Economy_Baggage} max={15} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Baggage: number}}) 
          }/>
        </Form.Item>

        
        <Form.Item name="Business_Baggage"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Business Baggage">   
          <InputNumber type="Number" name="Business_Baggage" value={Data.Business_Baggage} max={15} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Baggage: number}}) 
          }/>
        </Form.Item>


        <Form.Item name="First_Baggage"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="First Baggage">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Baggage} max={20} placeholder="20 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Baggage: number}}) 
          }/>
        </Form.Item>







        <Form.Item name="Economy_Price"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Economy Price">         
          <InputNumber  type="Number" name="Economy_Price" value={Data.Economy_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Price: number}}) 
          }/>
        </Form.Item>
     
        
        <Form.Item name="Business_Price"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="Business Price">   
          <InputNumber type="Number" name="Business_Price" value={Data.Business_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,Business_Price: number}}) 
          }/>
        </Form.Item>


        <Form.Item name="First_Price"
        rules={[
          {
            required: true,
            message: 'Please Fill!',
          },
        ]} label="First Price">   
          <InputNumber type="Number" name="First_Baggage" value={Data.First_Price} max={5000} placeholder="$" onChange={(number) => setState(prevData => {
              return {...prevData ,First_Price: number}}) 
          }/>
        </Form.Item>













       

        <Form.Item>
        <Button onClick={(e) => LogOutHandler(e)}>Log Out</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={() => history.goBack()}>Back</Button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Button onClick={(e) => submitHandler(e)} >Create Flight</Button>
        </Form.Item>



      </Form>
    </>
  );
};
export default CreateFlight;
