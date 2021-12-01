import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import '../css/popup.css';

import '../css/main.css';
import '../css/guest.css';



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
  message,
  Switch,
} from 'antd';


   


//TESTTTTTTTTT


const SearchFlight = () => {
 const history = useHistory();
  const [componentSize, setComponentSize] = useState('default');
  const [Result1, setResult1] = useState();
  const [Result2, setResult2] = useState();
  const [isLoading, setLoading] = useState(true);
  const [bothselected, setbothselected] = useState(true);
  
  const [Data, setState] = useState({
    Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Flight_Duration:"",
        Seats: "",
        Baggage: "",
        Price: "",
    

  });
  
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [value, setValue] = useState(1);
  const selectRadio = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  // sessionStorage.getItem("Username");

  const cars = [];
  const [isdepart, setdepart] = useState();

  const departHandler = (flight) => {
    setdepart( flight )
    //console.log(flight) ;
   
    };
    

    const [isreturn, setreturn] = useState();

    const returnHandler = (flight) => {
      setreturn( flight )
      //console.log(flight) ;
      
      };
      
    

  useEffect(() => {

    if(Result1 && Result2)
    {
      setLoading(false);
    }

    if(isdepart && isreturn){
     document.getElementById("yourButtonID").style.visibility="visible";
     setbothselected(false);
    // document.getElementById("yourButtonID").style.backgroundColor="red";
    
    }


  },[Result1,Result2,isdepart,isreturn]);



  const changeHander = (e) => {
    console.log(moment(Data.Flight_Date));

    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };

  
  const BookHendler = () => {
   
console.log(isdepart);
console.log(isreturn);
    
  };



  //TTTTTT
  const searchHandler = (e) => {
    e.preventDefault(); 
  
    const criteria1 = {};
    const criteria2 = {};
    var dd;

    Object.keys(Data).forEach(key => {
   if (Data[key]!=="") {
    if(key=="Flight_Date_Depart"){
      criteria1["Flight_Date"] = Data[key];
      // criteria2["Flight_Date_Depart"] = Data[key];
    }
      else
        criteria1[key] = Data[key];
        if(key=="From"){
          criteria2[key] = Data["To"];
        }
       else if(key=="To"){
          criteria2[key] = Data["From"];
        }
        else if(key=="Flight_Date_Return"){
          criteria2["Flight_Date"] = Data[key];
        }
        else
        criteria2[key] = Data[key];
      }
    });
    //console.log(criteria);

   // prevent reloading the page
   console.log(Data.Flight_Date_Depart);
  //  if(Data.From.length==3 && Data.To.length==3 &&Data.Flight_Date_Depart!=="" &&Data.Flight_Date_Return!==""){
    axios.post('http://localhost:8000/SearchFlight', criteria1)
    .then(response => {
      setResult1(response.data);
       console.log(Result1);
      setState({
        Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Flight_Duration:"",
        Seats: "",
        Baggage: "",
        Price: "",
        })
       }).catch(error => {
      console.log(error);
    })

    axios.post('http://localhost:8000/SearchFlight', criteria2)
    .then(response => {
      setResult2(response.data);
       console.log(Result2);
      setState({
        Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Flight_Duration:"",
        Seats: "",
        Baggage: "",
        Price: "",
        })
       }).catch(error => {
      console.log(error);
    })

    // Object.keys(Result2).forEach(key => {

    // });

    console.log(Result1);
    console.log(Result2);


    setState({
      Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Flight_Duration:"",
        Seats: "",
        Baggage: "", 
        Price: "",
      })

    // }

      // else if(Data.From.length<3 ){
      //   warning1();
      // }
      // else if(Data.To.length<3 ){
      //   warning2();
      // }
      // else if(Data.Flight_Date_Depart=="" ){
      //   warning3();
      // }
      // else if(Data.Flight_Date_Return=="" ){
      //   warning4();
      // }
  
  };
  

  const warning1 = () => {
    message.warning('Please enter departure city');
  };

  const warning2 = () => {
    message.warning('Please enter a destination.');
  };

  const warning3 = () => {
    message.warning('Please enter departure date.');
  };
  const warning4 = () => {
    message.warning('Please enter return date.');
  };

  // const testme = () => {
  //   if(isdepart )
  //   document.getElementById("yourButtonID").style.visibility="visable";
  // }; 
  const SearchFlightHandler = event => {
    history.push({
        pathname: '/UserSearchFlight',
        state: { detail: 'some_value' }
    });
 };



  const ReservedFlightsHandler = event => {
    history.push({
        pathname: '/UserManageBooking',
        state: { detail: 'some_value' }
    });
 };

 const EditFlightHandler = event => {
  history.push({
      pathname: '/UserHomePage',
      state: { detail: 'some_value' }
  });
};

const EditProfileHendler = event => {
  history.push({
      pathname: '/homepage',
      state: { detail: 'some_value' }
  });
};



  if (isLoading) {
    return (
      <>
             
             <div class="s011">
      <form>
        
        <label class="center2">Search Flight</label>
       
         
        <div class="inner-form">
          <header>
       
            <div class="travel-type-wrap">
           
              <button class="item active"  onClick={(e) => SearchFlightHandler(e)}>
              <div class="group-icon">
                <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                </div>
                <span>RESERVE FLIGHT</span>
              </button>

              <button class="item" onClick={(e) => ReservedFlightsHandler(e)}>
                <div class="group-icon">
                  <svg class="svg-inline--fa fa-building fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                </div>
                <span>MANAGE FLIGHTS</span>
              </button>


              <button class="item" onClick={(e) => EditFlightHandler(e)}>
                <div class="group-icon">
                  <svg class="svg-inline--fa fa-building fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
                  </svg>
                </div>
                <span>EDIT PROFILE</span>
              </button>


             


            </div>
          </header>

          {/* SDD    THE MAIN FORM THAT MUST BE REPLACED EACH TIME*/}
          <div class="main-form" id="main-form">     sdasdas

          <div class="row">

<div class="input-wrap">
  <div class="icon-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  </div>
  <div class="input-field">
    <label> FROM</label>
    <Form.Item >
<Input type="text" name="From" maxLength="3"  value={Data.From} onChange={(e) => changeHander(e)}/>
</Form.Item>
  </div>
</div>

<div class="input-wrap">
  <div class="icon-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  </div>
  <div class="input-field">
  <label> TO</label>
  <Form.Item >
<Input type="text" name="To" maxLength="3"  value={Data.To} onChange={(e) => changeHander(e)}/>
</Form.Item>
  </div>
</div>

</div>


<div class="row second">
              <div class="input-wrap2">
                <div class="icon-wrap">
               
                </div>
                  <label>DEPART</label>
                  
                  
          <DatePicker  type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Depart} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(new Date())}
             name="Depart" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date_Depart: date}}) 
      }/>  
              </div>
              <div class="input-wrap2">
                <div class="icon-wrap">
                  
                </div>
                <div class="input-field">
                  <label>RETURN</label>
                  <DatePicker  type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Return} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(Data.Flight_Date_Depart)}
             name="Return" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date_Return: date}}) 
      }/>
                </div>
              </div>
              <div class="input-wrap">
                <div class="icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <div class="input-field">
                  <label>TRAVELERS</label>
                  <Form.Item > 
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={500} min={1} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Seats: number}}) 
          }/>
        </Form.Item>
                </div>
              </div>
            </div>


           
            <div class="row last">
              <button onClick={(e) => searchHandler(e)}  class="btn-search" type="button">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <script src="js/extention/choices.js"></script>   

  
  
        

       
       
      </>
      
    );
    

  }
  if(bothselected){
  return(









    
   <>
      {/* {isdepart ? <p>Length is 1</p>:null} */}
   {/* adasdas */}
   <div class="s011">
      <form>
        <fieldset>
        
        </fieldset>
        <div class="inner-form">
          <header>
          <label class="center2">Search Flight</label>
            <div class="travel-type-wrap">
           
              <button class="item active"  onClick={(e) => SearchFlightHandler(e)}>
              <div class="group-icon">
                <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                </div>
                <span>SEARCH FLIGHT</span>
              </button>

              <button class="item" onClick={(e) => ReservedFlightsHandler(e)}>
                <div class="group-icon">
                  <svg class="svg-inline--fa fa-building fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                </div>
                <span>RESERVED FLIGHTS</span>
              </button>


              <button class="item" onClick={(e) => EditFlightHandler(e)}>
                <div class="group-icon">
                  <svg class="svg-inline--fa fa-building fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
                  </svg>
                </div>
                <span>EDIT FLIGHT</span>
              </button>


              <button class="item" onClick={(e) => EditProfileHendler(e)}>
                <div class="group-icon">
                  <svg class="svg-inline--fa fa-building fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
                  </svg>
                </div>
                <span>EDIT PROFILE</span>
              </button>


            </div>
          </header>

          {/* SDD    THE MAIN FORM THAT MUST BE REPLACED EACH TIME*/}
          <div class="main-form" id="main-form">     sdasdas

          <div class="row">

<div class="input-wrap">
  <div class="icon-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  </div>
  <div class="input-field">
    <label> FROM</label>
    <Form.Item >
<Input type="text" name="From" maxLength="3"  value={Data.From} onChange={(e) => changeHander(e)}/>
</Form.Item>
  </div>
</div>

<div class="input-wrap">
  <div class="icon-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  </div>
  <div class="input-field">
  <label> TO</label>
  <Form.Item >
<Input type="text" name="To" maxLength="3"  value={Data.To} onChange={(e) => changeHander(e)}/>
</Form.Item>
  </div>
</div>

</div>


<div class="row second">
              <div class="input-wrap2">
                <div class="icon-wrap">
               
                </div>
                  <label>DEPART</label>
                  
                  
          <DatePicker  type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Depart} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(new Date())}
             name="Depart" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date_Depart: date}}) 
      }/>  
              </div>
              <div class="input-wrap2">
                <div class="icon-wrap">
                  
                </div>
                <div class="input-field">
                  <label>RETURN</label>
                  <DatePicker  type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Return} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(Data.Flight_Date_Depart)}
             name="Return" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date_Return: date}}) 
      }/>
                </div>
              </div>
              <div class="input-wrap">
                <div class="icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <div class="input-field">
                  <label>TRAVELERS</label>
                  <Form.Item > 
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={500} min={1} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Seats: number}}) 
          }/>
        </Form.Item>
                </div>
              </div>
            </div>


           <div class="row third"    >
            <Radio.Group onChange={selectRadio} value={value} >
      <Radio  value={1} >  <label class="radiolabel"> Economy</label></Radio>
     
      <Radio value={2}>  <label class="radiolabel"> Business</label></Radio>
      <Radio value={3}><label class="radiolabel"> First</label></Radio>
     
    </Radio.Group>
            </div>
            <div class="row last">
              <button onClick={(e) => searchHandler(e)}  class="btn-search" type="button">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <script src="js/extention/choices.js"></script>   

    {/* asdasdas */}
          
  
          
  
  
         
  
         

        
        
    
   
  
  <div class="box d">
  <label class="center">Depart Flight</label>
    <div class="box f">


    {Result1.map(flight =>
        
    <div class="listing-item">
        <figure class="image">
            <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
            <figcaption>
              <div class="caption">
                <h1>{flight.Price}</h1>
                <p>{flight.To }</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>From: {flight.From}</h4>
            <h4>To:{flight.To}</h4>
            <h4>Flight Date:{moment(flight.Flight_Date).format("YYYY-MM-DD")}</h4>
            <h4>Flight time:{moment(flight.Flight_Date).format("HH:mm")}</h4>
           
            {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
            <button class="button-79" role="button" name={flight._id} onClick={() => departHandler(flight)}>BOOK NOW!</button>
        </div>
    </div>
   
    


          )}
 
    </div>
    <label class="center">Return Flight</label>
    <div class="box g">


    {Result2.map(flight =>
        
    <div class="listing-item">
        <figure class="image">
            <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
            <figcaption>
              <div class="caption">
                <h1>{flight.Price}</h1>
                <p>{flight.To}</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>From: {flight.From}</h4>
            <h4>To:{flight.To}</h4>
            <h4>Flight Date:{moment(flight.Flight_Date).format("YYYY-MM-DD")}</h4>
            <h4>Flight time:{moment(flight.Flight_Date).format("HH:mm")}</h4>
           
            {/* <a  class=" button-79"  name={flight._id} onClick={() => returnHandler(flight)} >BOOK NOW!</a> */}
            <button class="button-79" role="button" name={flight._id} onClick={() => returnHandler(flight)}>BOOK NOW!</button>


        </div>
    </div>
 
    

          )}
    </div>



    <a href="#modal-opened" id="yourButtonID" class="link-1" >Reserve Flight </a>

    < div class="modal-container" id="modal-opened">
     <div class="modal">


     
     
        
       </div>
    
            

       

  </div>
</div>


    
          
    {/* <button  class="pricing-button"  id="yourButtonID" onClick={() => BookHendler()} >BOOK NOW!</button> */}



    





    
   
    
    {/* <button class='active'>Active</button>
<button class='focus'>Focus</button>
<a href='#target1' id='target1' class='target'>Target 1</a>
<a href='#target2' id='target2' class='target'>Target 2</a>
<a href='#target3' id='target3' class='target'>Target 3</a> */}
     


  

{/* <button   class="pricing-button" id="yourButtonID"  >Confirm NOW !</button> */}


          
        





    <script src="js/extention/choices.js"> </script>
    

      
    </>
    



  );
  }


  return (
    <>
      {/* {isdepart ? <p>Length is 1</p>:null} */}
   {/* adasdas */}
   <div class="s011">
      <form>
        <fieldset>
        
        </fieldset>
        <div class="inner-form">
          <header>
          <label class="center2">Search Flight</label>
            <div class="travel-type-wrap">
           
              <button class="item active"  onClick={(e) => SearchFlightHandler(e)}>
              <div class="group-icon">
                <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                </div>
                <span>SEARCH FLIGHT</span>
              </button>

              <button class="item" onClick={(e) => ReservedFlightsHandler(e)}>
                <div class="group-icon">
                  <svg class="svg-inline--fa fa-building fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                </div>
                <span>RESERVED FLIGHTS</span>
              </button>


              <button class="item" onClick={(e) => EditFlightHandler(e)}>
                <div class="group-icon">
                  <svg class="svg-inline--fa fa-building fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
                  </svg>
                </div>
                <span>EDIT FLIGHT</span>
              </button>


              <button class="item" onClick={(e) => EditProfileHendler(e)}>
                <div class="group-icon">
                  <svg class="svg-inline--fa fa-building fa-w-14" aria-hidden="true" data-prefix="fas" data-icon="building" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                  </svg>
                  <svg class="svg-inline--fa fa-car fa-w-16" aria-hidden="true" data-prefix="fas" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
                  </svg>
                </div>
                <span>EDIT PROFILE</span>
              </button>


            </div>
          </header>

          {/* SDD    THE MAIN FORM THAT MUST BE REPLACED EACH TIME*/}
          <div class="main-form" id="main-form">     sdasdas

          <div class="row">

<div class="input-wrap">
  <div class="icon-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  </div>
  <div class="input-field">
    <label> FROM</label>
    <Form.Item >
<Input type="text" name="From" maxLength="3"  value={Data.From} onChange={(e) => changeHander(e)}/>
</Form.Item>
  </div>
</div>

<div class="input-wrap">
  <div class="icon-wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
    </svg>
  </div>
  <div class="input-field">
  <label> TO</label>
  <Form.Item >
<Input type="text" name="To" maxLength="3"  value={Data.To} onChange={(e) => changeHander(e)}/>
</Form.Item>
  </div>
</div>

</div>


<div class="row second">
              <div class="input-wrap2">
                <div class="icon-wrap">
               
                </div>
                  <label>DEPART</label>
                  
                  
          <DatePicker  type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Depart} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(new Date())}
             name="Depart" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date_Depart: date}}) 
      }/>  
              </div>
              <div class="input-wrap2">
                <div class="icon-wrap">
                  
                </div>
                <div class="input-field">
                  <label>RETURN</label>
                  <DatePicker  type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Return} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(Data.Flight_Date_Depart)}
             name="Return" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date_Return: date}}) 
      }/>
                </div>
              </div>
              <div class="input-wrap">
                <div class="icon-wrap">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                </div>
                <div class="input-field">
                  <label>TRAVELERS</label>
                  <Form.Item > 
          <InputNumber type="Number" name="Economy_Seats" value={Data.Economy_Seats} max={500} min={1} placeholder="500 Max" onChange={(number) => setState(prevData => {
              return {...prevData ,Economy_Seats: number}}) 
          }/>
        </Form.Item>
                </div>
              </div>
            </div>


           <div class="row third"    >
            <Radio.Group onChange={selectRadio} value={value} >
      <Radio  value={1} >  <label class="radiolabel"> Economy</label></Radio>
     
      <Radio value={2}>  <label class="radiolabel"> Business</label></Radio>
      <Radio value={3}><label class="radiolabel"> First</label></Radio>
     
    </Radio.Group>
            </div>
            <div class="row last">
              <button onClick={(e) => searchHandler(e)}  class="btn-search" type="button">Search</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <script src="js/extention/choices.js"></script>   

    {/* asdasdas */}
          
  
          
  
  
         
  
         

        
        
    
   
  
  <div class="box d">
  <label class="center">Depart Flight</label>
    <div class="box f">


    {Result1.map(flight =>
        
    <div class="listing-item">
        <figure class="image">
            <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
            <figcaption>
              <div class="caption">
                <h1>{flight.Price}</h1>
                <p>{flight.To }</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>From: {flight.From}</h4>
            <h4>To:{flight.To}</h4>
            <h4>Flight Date:{moment(flight.Flight_Date).format("YYYY-MM-DD")}</h4>
            <h4>Flight time:{moment(flight.Flight_Date).format("HH:mm")}</h4>
           
            {/* <a class="pricing-button" name={flight._id}  onClick={() => departHandler(flight)} >BOOK NOW!</a> */}
            <button class="button-79" role="button" name={flight._id} onClick={() => departHandler(flight)}>BOOK NOW!</button>
        </div>
    </div>
   
    


          )}
 
    </div>
    <label class="center">Return Flight</label>
    <div class="box g">


    {Result2.map(flight =>
        
    <div class="listing-item">
        <figure class="image">
            <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
            <figcaption>
              <div class="caption">
                <h1>{flight.Price}</h1>
                <p>{flight.To}</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>From: {flight.From}</h4>
            <h4>To:{flight.To}</h4>
            <h4>Flight Date:{moment(flight.Flight_Date).format("YYYY-MM-DD")}</h4>
            <h4>Flight time:{moment(flight.Flight_Date).format("HH:mm")}</h4>
           
            {/* <a  class=" button-79"  name={flight._id} onClick={() => returnHandler(flight)} >BOOK NOW!</a> */}
            <button class="button-79" role="button" name={flight._id} onClick={() => returnHandler(flight)}>BOOK NOW!</button>


        </div>
    </div>
 
    


          )}
      
    </div>



    <a href="#modal-opened" class="link-1" id="modal-closed">Reserve Flight</a>

    < div class="modal-container" id="modal-opened">
     <div class="modal">

        <div>
        <div class="modal__details">
        <h4 class="modal__title">Depart Flight Details</h4>
        <p class="modal__description">  Flight Number: {isdepart.Flight_No}     Duration:{isdepart.To}    </p>
        <p class="modal__description"> From : {isdepart.From}     To:{isdepart.To}    </p>
        <p class="modal__description">  Date:{moment(isdepart.Flight_Date).format("YYYY-MM-DD")}  Departure Time:{moment(isdepart.Flight_Date).format("HH:mm")}    </p>
        <p class="modal__description">  Price : {isdepart.Price}      Baggage:{isdepart.Baggage}    </p>
        <p class="modal__description">  Cabin: {"First"}       </p>   
        </div>

        <div class="modal__details">
       
        <h1 class="modal__title"  >Return Flight Details</h1>
        <p class="modal__description">  Flight Number: {isreturn.Flight_No}     Duration:{isreturn.To}    </p>
        <p class="modal__description"> From : {isreturn.From}     To:{isreturn.To}    </p>
        <p class="modal__description">  Date:{moment(isreturn.Flight_Date).format("YYYY-MM-DD")}  Departure Time:{moment(isdepart.Flight_Date).format("HH:mm")}    </p>
        <p class="modal__description">  Price : {isreturn.Price}      Baggage:{isreturn.Baggage}    </p>
        <p class="modal__description">  Cabin: {"First"}      </p>   
      
        <button class="modal__btn">Confirm &rarr;</button>
       <a href="#modal-closed" class="link-2"></a>
       </div>
        
  
       
         
  
        
       </div>
  
      
       
     
     
        
       </div>
    
            

       

  </div>
</div>


    
          
    {/* <button  class="pricing-button"  id="yourButtonID" onClick={() => BookHendler()} >BOOK NOW!</button> */}



    





    
   
    
    {/* <button class='active'>Active</button>
<button class='focus'>Focus</button>
<a href='#target1' id='target1' class='target'>Target 1</a>
<a href='#target2' id='target2' class='target'>Target 2</a>
<a href='#target3' id='target3' class='target'>Target 3</a> */}
     


  

{/* <button   class="pricing-button" id="yourButtonID"  >Confirm NOW !</button> */}


          
        





    <script src="js/extention/choices.js"> </script>
    

      
    </>
    
  );





};
export default SearchFlight;
