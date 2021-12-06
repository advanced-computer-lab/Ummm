import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
<<<<<<< HEAD
import './App.css';
=======
import '../css/App.css';
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1

import moment from "moment";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
<<<<<<< HEAD
=======
  Space,
  TimePicker,
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';


const SearchFlight = () => {
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
//        window.open("AccessDenied.html", "_self");
//  }



 const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [componentSize, setComponentSize] = useState('default');
  const format = 'HH:mm';
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
  const [Result, setResult] = useState();
  
  const [Data, setState] = useState({
    Flight_No: "",
    From: "",  
    To: "",
    Flight_Date: "", // Data type date
    Terminal: "",
<<<<<<< HEAD
    Economy_Seats: "",
    Business_Seats: "",
    First_Seats: ""
=======
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
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
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
=======

>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
  const searchHandler = (e) => {
    e.preventDefault(); 
  
    const criteria = {};
    var dd;

    Object.keys(Data).forEach(key => {
   if (Data[key]!=="") {
<<<<<<< HEAD
        criteria[key] = Data[key];
=======

    if(key=='Flight_DHour'){
      criteria['Flight_Duration'] = Data.Flight_DHour + ':';
    }
    else if(key=='Flight_DMin'){
      criteria['Flight_Duration'] += Data.Flight_DMin +'';
     }
     else if(key!=='Flight_Duration')
     criteria[key] = Data[key];
  
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
      }
    });
    console.log(criteria);

   // prevent reloading the page
    axios.post('http://localhost:8000/SearchFlight', criteria)
    .then(response => {
      setResult(response.data);
       console.log(Result);
       setLoading(false);
      setState({
        Flight_No: "",
<<<<<<< HEAD
        From: "",  
        To: "",
        Flight_Date: "", // Data type date
        Terminal: "",
        Economy_Seats: "",
        Business_Seats: "",
        First_Seats: ""
=======
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
>>>>>>> fd86f7b21554bb498349975741d95e00695903f1
        })
       }).catch(error => {
      console.log(error);
    })

  };



  if (isLoading) {
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
      </>
      
    );
    

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
    </>
  );
};
export default SearchFlight;
