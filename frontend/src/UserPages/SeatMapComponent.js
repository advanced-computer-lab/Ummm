

import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";
import axios from 'axios';

import "./styles.css";
import { Button } from "react-scroll";

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

var css =".blank {\n  height: 25px;\n  width: 25px;\n}\n\n.loader {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  background: rgba(240, 240, 240, 0.9);\n  z-index: \"2\";\n  justify-content: center;\n  align-items: center;\n}\n\n.seat {\n  background-color: #4FC3F7;\n  height: 50px;\n  width: 50px;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.seat__number {\n  font-size: 15px;\n}\n.seat--north {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n.seat--south {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.seat--east {\n  border-top-left-radius: 8px;\n  border-bottom-left-radius: 8px;\n}\n.seat--west {\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n.seat--enabled {\n  cursor: pointer;\n}\n.seat--enabled:hover {\n  background-color: #03A9F4;\n}\n.seat--selected {\n  cursor: pointer;\n  background-color: #4CAF50;\n}\n.seat--reserved {\n  cursor: not-allowed;\n  background-color: #E0E0E0;\n}\n\n.seat-content {\n  position: relative;\n  overflow: hidden;\n  margin: 0 auto;\n}\n\n.seat-picker {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  width: max-content;\n}\n.seat-picker > *:not(:last-child) {\n  margin-bottom: 5px;\n}\n.seat-picker__row {\n  display: flex;\n  align-items: center;\n  justify-items: center;\n}\n.seat-picker__row > *:not(:last-child) {\n  margin-right: 2px;\n}\n.seat-picker__row__number {\n  font-size: 12px;\n  font-weight: normal;\n  height: 12px;\n  width: 12px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: #9E9E9E;\n}\n.seat-picker__row--enabled:hover {\n  background-color: #F5F5F5;\n}\n.seat-picker__row--selected {\n  background-color: #F5F5F5;\n}\n.seat-picker__row--enabled:hover > .seat-picker__row__number {\n  font-weight: 600;\n}\n.seat-picker__row--selected > .seat-picker__row__number {\n  font-weight: 600;\n}";   

___$insertStyle(css);

class SeatMap extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    loading: false,
    data:[],
    seats: 0,
    track:[],
    };
    this.UpdateAll = this.UpdateAll.bind(this);}

 

  //  changeHander = (e) => {
  //   document.getElementById(e).style.tooltip="yayyyyy";
  //  console.log("yayyyyyyyyyy")
  //  console.log(e)

  // };
  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        if (removeCb) {
          await new Promise(resolve => setTimeout(resolve, 250));
          console.log(
            `Removed seat ${params.number}, row ${params.row}, id ${params.id}`
          );
          removeCb(params.row, params.number);
        }
        await new Promise(resolve => setTimeout(resolve, 250));
        console.log(`Added seat ${number}, row ${row}, id ${id}`);
        const newTooltip = `tooltip for id-${id} added by callback`;
        addCb(row, number, id, newTooltip);
        //this.changeHander(id);
        this.addpeople(id)
        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true
      },
      async () => {
        await new Promise(resolve => setTimeout(resolve, 250));
        console.log(`Removed seat ${number}, row ${row}, id ${id}`);
        // A value of null will reset the tooltip to the original while '' will hide the tooltip
        const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
        removeCb(row, number, newTooltip);
        this.removePeople(id)
        this.setState({ loading: false });
      }
    );
  };

  removePeople(e) {
    var array = [...this.state.track]; // make a separate copy of the array
    var index = array.indexOf(e)
    
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({track: array});
    }
    if(array.length>4){
    array.splice(0,1)
    this.setState({track: array});}
    }

  addpeople(e){
    var array = [...this.state.track]; 
    if(array.length>4){
      array.splice(0,1)
      this.setState({track: array});}

    this.setState(prevState => ({
      track: [...prevState.track, e]
    }))

  }
  UpdateAll(){
    if(this.state.seats===this.state.track.length){
    const data1=this.props.parentToChild;
    var n = this.state.seats;
    for(var i=0;i<n;i++){
  this.state.data[this.state.track[i]]=true;
    }
    if(data1){
      var id=data1["g"]
      var seats=this.state.data;
      var tracker=this.state.track;
      var username=sessionStorage.getItem("Username")
      var date=data1["date"]
      console.log(seats);
      console.log(id);
    axios.put('http://localhost:8000/updateseats',{data: {var1 : id, var2 : seats} })
    .then((result)=> {
              console.log("Successful")
    
        }).catch(error => {
        console.log(error); })
    
    if(data1["from"]==true){
      axios.put('http://localhost:8000/updatereservationseats',{data: {var1 : id, var2 : tracker,var3:username,var4:true,var5:date} })
    .then((result)=> {
              console.log("Successful")
    
        }).catch(error => {
        console.log(error); })

    }
    else{
      axios.put('http://localhost:8000/updatereservationseats',{data: {var1 : id, var2 : tracker,var3:username,var4:false,var5:date} })
      .then((result)=> {
                console.log("Successful")
      
          }).catch(error => {
          console.log(error); })
  
    }
    
    }

    }
    }


  componentDidMount() {
    const data=this.props.parentToChild;
    if(data){
     var seats = data["e"] + data["f"]
     var id=data["g"]
    axios.post('http://localhost:8000/flightmap',{data: {var1 : id} })
    .then((result)=> {
        const Available = result.data[0].Available_Seats;
        console.log(Available)
        this.setState({ seats: seats,data: Available,track: []});
      })}
  }



  
  render() {
     
    const data=this.props.parentToChild;

    var rows = new Array(26);
    if(data){
    console.log(data['rows']);
    rows = data['rows'];
    console.log(rows);
    }
  
  console.log(rows)
    const { loading } = this.state;
    return ( 
    <>
    <div>
      </div><div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '240vh' }}>
            <SeatPicker
              addSeatCallback={this.addSeatCallbackContinousCase}
              removeSeatCallback={this.removeSeatCallback}
              rows={rows}
              maxReservableSeats={this.state.seats}
              alpha
              visible
              selectedByDefault
              loading={loading}
              tooltipProps={{ multiline: true }}
              continuous />


          </div>
          <button  type="button" class="button-70" onClick={this.UpdateAll}>Confirm Seats</button>
        </div>
        <br></br>
        <br></br>

        <br></br>
        <br></br>

         
            </>
          
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SeatMap />, rootElement);

export default SeatMap;

