import { Component, useState,useEffect, useReducer } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import '../css/guest.css';
import '../css/main.css';

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



//TESTTTTTTTTT


const SearchFlight = () => {
 const history = useHistory();
  const [isLoading, setLoading] = useState(true);
  const [componentSize, setComponentSize] = useState('default');
  const [Result1, setResult1] = useState();
  const [Result2, setResult2] = useState();
  
  const [Data, setState] = useState({
    Flight_No: "",
    From: "",  
    To: "",
    Flight_Date_Depart: "", // Data type date
    Flight_Date_Return: "", // Data type date
    Terminal: "",
    Economy_Seats: "",
    Business_Seats: "",
    First_Seats: ""
  });
  
  
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const [value, setValue] = useState(1);
  const selectRadio = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };


  const cars = [];
  const [isdepart, setdepart] = useState();
  const departHandler = (flight) => {
    setdepart( flight )
   // console.log(flight) ;
   
    };
    

    const [isreturn, setreturn] = useState();
    const returnHandler = (flight) => {
      setreturn( flight )
      //console.log(flight) ;
      
      };
      
     
  

  

  // useEffect(() => {  // Run after page loads "more usefull in get"

  // },[]);


  const changeHander = (e) => {


    console.log(moment(Data.Flight_Date));

    setState( prevData => {
     return {...prevData ,[e.target.name]: e.target.value}})
  };


  const searchHandler = (e) => {
    e.preventDefault(); 
  
    const criteria1 = {};
    const criteria2 = {};
    var dd;

    Object.keys(Data).forEach(key => {
   if (Data[key]!=="") {
        criteria1[key] = Data[key];
        if(key=="From"){
          criteria2[key] = Data["To"];
        }
       else if(key=="To"){
          criteria2[key] = Data["From"];
        }
        else 
        criteria2[key] = Data[key];
      }
    });
    //console.log(criteria);

   // prevent reloading the page
    axios.post('http://localhost:8000/SearchFlight', criteria1)
    .then(response => {
      setResult1(response.data);
       console.log(Result1);
       setLoading(false);
      setState({
        Flight_No: "",
        From: "",  
        To: "",
        Flight_Date_Depart: "", // Data type date
        Flight_Date_Return: "", // Data type date
        Terminal: "",
        Economy_Seats: "",
        Business_Seats: "",
        First_Seats: ""
        })
       }).catch(error => {
      console.log(error);
    })

  };
  
  const testme = () => {
    if(isdepart )
    document.getElementById("yourButtonID").style.visibility="visable";
  }; 

  



  if (isLoading) {
    return (
      <>
             
               



        {/* adasdas */}
<div class="s011" >
      <form>
        <fieldset>
        
        </fieldset>
        <div class="inner-form">
          <header>
          <label class="center2">Search Flight</label>
            <div class="travel-type-wrap">
          
              <div class="item active">
                <div class="group-icon">
                <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                </div>
                <span>FLIGHT</span>
              </div>
            </div>
          </header>
          <div class="main-form" id="main-form">
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
                  
                  
          <DatePicker type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Depart} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(new Date())}
             name="FlightDate" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date_Depart: date}}) 
      }/>  
              </div>
              <div class="input-wrap2">
                <div class="icon-wrap">
                  
                </div>
                <div class="input-field">
                  <label>RETURN</label>
                  <DatePicker type="date" format="DD-MM-YYYY" value={Data.Flight_Date_Return} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(new Date())}
             name="FlightDate" onChange={(date) => setState(prevData => {
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
    {/* asdasdas */}
          
    
         
  
  
          
          
  
         
  
  
         
  
        

       
       
      </>
      
    );
    

  }


  return (
    <>
      {/* {isdepart ? <p>Length is 1</p>:null} */}
   {/* adasdas */}
<div class="s011" >
      <form>
        <fieldset>
       
        </fieldset>
        <div class="inner-form">
          <header>
          <label class="center2">Search Flight</label>
            <div class="travel-type-wrap">
              <div class="item active">
                <div class="group-icon">
                <svg class="svg-inline--fa fa-plane fa-w-18" aria-hidden="true" data-prefix="fas" data-icon="plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z"></path>
                  </svg>
                </div>
                <span>FLIGHT</span>
              </div>
            </div>
          </header>
          <div class="main-form" id="main-form">
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
                  
                  
          <DatePicker type="date" format="DD-MM-YYYY" value={Data.Flight_Date} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(new Date())}
             name="FlightDate" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date: date}}) 
      }/>
        
               
              </div>
              <div class="input-wrap2">
                <div class="icon-wrap">
                  
                </div>
                <div class="input-field">
                  <label>RETURN</label>
                  <DatePicker type="date" format="DD-MM-YYYY" value={Data.Flight_Date} format="DD-MM-YYYY"
          showTime="false" disabledDate={d => d.isBefore(new Date())}
             name="FlightDate" onChange={(date) => setState(prevData => {
                return {...prevData ,Flight_Date: date}}) 
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
                <h1>$100</h1>
                <p>{flight.To }</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>From: {flight.From}</h4>
            <h4>To:{flight.To}</h4>
            <h4>Flight Date:{moment(flight.Flight_Date_Depart).format("YYYY-MM-DD")}</h4>
            <h4>Flight time:{moment(flight.Flight_Date_Depart).format("HH:mm")}</h4>
           
            <a class="pricing-button" name={flight._id}  onClick={() => departHandler()} >BOOK NOW!</a>

        </div>
    </div>
   
    


          )}
 
    </div>
    <label class="center">Return Flight</label>
    <div class="box g">


    {Result1.map(flight =>
        
    <div class="listing-item">
        <figure class="image">
            <img src="https://s3.eu-central-1.amazonaws.com/cmstests3.flynas.com/media/1514/artboard-1.jpg" alt="image"></img>
            <figcaption>
              <div class="caption">
                <h1>$100</h1>
                <p>{flight.To}</p>
                </div>
            </figcaption>
        </figure>
        <div class="listing">
            <h4>From: {flight.From}</h4>
            <h4>To:{flight.To}</h4>
            <h4>Flight Date:{moment(flight.Flight_Date_Return).format("YYYY-MM-DD")}</h4>
            <h4>Flight time:{moment(flight.Flight_Date_Return).format("HH:mm")}</h4>
           
            <a  class="pricing-button" departHandler  name={flight._id} onClick={() => returnHandler()} >BOOK NOW!</a>

        </div>
    </div>
 
    


          )}
      
    </div>
   
    <button  class="pricing-button2"  id="yourButtonID" >BOOK NOW!</button>

    
     


  
</div>
{/* <button   class="pricing-button" id="yourButtonID"  >Confirm NOW !</button> */}
          

          
        <div class="grid-container2" >
        





        

</div>





    <script src="js/extention/choices.js"> </script>
    

      
    </>
    
  );
};
export default SearchFlight;
