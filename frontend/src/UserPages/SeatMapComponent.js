

import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeatPicker from "react-seat-picker";

import "./styles.css";

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
  state = {
    loading: false
  };
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
        this.setState({ loading: false });
      }
    );
  };
  

  render() {

    const rows = new Array(26);
  
    // document.write("Creating 2D array <br>");
      
    // Loop to create 2D array using 1D array
    for (var i = 0; i < rows.length; i++) {
        // console.log(rows.length);
      if(i<6){
        rows[i] = new Array(4);
      }
      else{
        rows[i] = new Array(6);
      }
     
    }
     
    for(let i=0;i<26;i++){
      // if(i==5){
      //   rows[i] = [];
      // }
      // else {
      //   if(i>5){
      //     i-=1;
      //   }
      for(let j=0;j<8;j++){
        if(j>1 && j<6 && i<5){
          rows[i][j] = null;
        }
     else if(i<5){
       if(j>5)
        rows[i][j] = { id: ((i*4)+j-4+1), number: j+1-4, isReserved: false} ;
        else
        rows[i][j] = { id: ((i*4)+j+1), number: j+1, isReserved: false} ;
        
    }
    else {
      if(j>2 && j<5){
        rows[i][j] = null;
      }
   else if(j>4)
   rows[i][j] = { id: ((20+((i-5)*6)+j-2)+1), number: j+1-2, isReserved: true} ;
         else
         rows[i][j] = { id: ((20+((i-5)*6)+j)+1), number: j+1, isReserved: true} ;
    }
      }
      // if(i>4){
      //   i+=1;
      // }
    // }
  }

    console.log(rows);

  //   const rows = [

  //     [
  //       { id: 1, number: 1, isReserved: false},
  //       { id: 2, number: 2, isReserved: false},
  //        null,
  //        null,
  //        null,
  //        null,
  //        { id: 3, number: 3, isReserved: false},
  //        { id: 4, number: 4, isReserved: false},

  //       // {
  //       //   id: 3,
  //       //   number: "3",
  //       //   isReserved: true,
  //       //   tooltip: "Reserved by Rogger"
  //       // },
  //       // { id: 4, number: "4" },

  //     ],
  //     // null,

  //     [
  //       { id: 5, number: 1, isReserved: false },
  //       { id: 6, number: 2, isReserved: false },
  //        null,
  //        null,
  //        null,
  //        null,
  //        { id: 7, number: 3, isReserved: false },
  //        { id: 8, number: 4, isReserved: false },

  //     ],

  //     [
  //       { id: 9, number: 1, isReserved: false },
  //       { id: 10, number: 2, isReserved: false },
  //        null,
  //        null,
  //        null,
  //        null,
  //        { id: 11, number: 3, isReserved: false },
  //        { id: 12, number: 4, isReserved: false },

  //     ],

  //     [
  //       { id: 13, number: 1, isReserved: false },
  //       { id: 14, number: 2, isReserved: false },
  //        null,
  //        null,
  //        null,
  //        null,
  //        { id: 15, number: 3, isReserved: false },
  //        { id: 16, number: 4, isReserved: false },

  //     ],

  //     [
  //       { id: 17, number: 1, isReserved: false },
  //       { id: 18, number: 2, isReserved: false },
  //        null,
  //        null,
  //        null,
  //        null,
  //        { id: 19, number: 3, isReserved: false },
  //        { id: 20, number: 4, isReserved: false },

  //     ],

  //     [],

  //     [
  //       { id: 21, number: 1, isReserved: false },
  //       { id: 22, number: 2, isReserved: false },
  //       { id: 23, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 24, number: 4, isReserved: false },
  //       { id: 25, number: 5, isReserved: false },
  //       { id: 26, number: 6, isReserved: false },
  //     ],


  //     [
  //       { id: 27, number: 1, isReserved: false },
  //       { id: 28, number: 2, isReserved: false },
  //       { id: 29, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 30, number: 4, isReserved: false },
  //       { id: 31, number: 5, isReserved: false },
  //       { id: 32, number: 6, isReserved: false },
  //     ],

  //     [
  //       { id: 33, number: 1, isReserved: false },
  //       { id: 34, number: 2, isReserved: false },
  //       { id: 35, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 36, number: 4, isReserved: false },
  //       { id: 37, number: 5, isReserved: false },
  //       { id: 38, number: 6, isReserved: false },
  //     ],

  //     [
  //       { id: 39, number: 1, isReserved: false },
  //       { id: 40, number: 2, isReserved: false },
  //       { id: 41, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 42, number: 4, isReserved: false },
  //       { id: 43, number: 5, isReserved: false },
  //       { id: 44, number: 6, isReserved: false },
  //     ],

  //     [
  //       { id: 45, number: 1, isReserved: false },
  //       { id: 46, number: 2, isReserved: false },
  //       { id: 47, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 48, number: 4, isReserved: false },
  //       { id: 49, number: 5, isReserved: false },
  //       { id: 50, number: 6, isReserved: false },
  //     ],
      
  // [],

  //     [
  //       { id: 51, number: 1, isReserved: false },
  //       { id: 52, number: 2, isReserved: false },
  //       { id: 53, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 54, number: 4, isReserved: false },
  //       { id: 55, number: 5, isReserved: false },
  //       { id: 56, number: 6, isReserved: false },
  //     ],

  //     [
  //       { id: 57, number: 1, isReserved: false },
  //       { id: 58, number: 2, isReserved: false },
  //       { id: 59, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 60, number: 4, isReserved: false },
  //       { id: 61, number: 5, isReserved: false },
  //       { id: 62, number: 6, isReserved: false },
  //     ],

  //     [
  //       { id: 63, number: 1, isReserved: false },
  //       { id: 64, number: 2, isReserved: false },
  //       { id: 65, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 66, number: 4, isReserved: false },
  //       { id: 67, number: 5, isReserved: false },
  //       { id: 68, number: 6, isReserved: false },
  //     ],
      
  //     [
  //       { id: 69, number: 1, isReserved: false },
  //       { id: 70, number: 2, isReserved: false },
  //       { id: 71, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 72, number: 4, isReserved: false },
  //       { id: 73, number: 5, isReserved: false },
  //       { id: 74, number: 6, isReserved: false },
  //     ],
  //     [
  //       { id: 75, number: 1, isReserved: false },
  //       { id: 76, number: 2, isReserved: false },
  //       { id: 77, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 78, number: 4, isReserved: false },
  //       { id: 79, number: 5, isReserved: false },
  //       { id: 80, number: 6, isReserved: false },
  //     ],




  //     [
  //       { id: 80, number: 1, isReserved: false },
  //       { id: 81, number: 2, isReserved: false },
  //       { id: 82, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 83, number: 4, isReserved: false },
  //       { id: 84, number: 5, isReserved: false },
  //       { id: 85, number: 6, isReserved: false },
  //     ],

  //     [
  //       { id: 86, number: 1, isReserved: false },
  //       { id: 87, number: 2, isReserved: false },
  //       { id: 88, number: 3, isReserved: false },
  //       null,
  //       null,
  //       { id: 89, number: 4, isReserved: false },
  //       { id: 90, number: 5, isReserved: false },
  //       { id: 91, number: 6, isReserved: false },
  //     ],


      
      
  //   ];
    
    const { loading } = this.state;
    return (
      <div>
        <div style={
            { display: 'flex',  justifyContent:'center', alignItems:'center', height: '200vh' }
    
    }>
          <SeatPicker
            addSeatCallback={this.addSeatCallbackContinousCase}
            removeSeatCallback={this.removeSeatCallback}
            rows={rows}
            maxReservableSeats={3}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{ multiline: true }}
            continuous
          />

          
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<SeatMap />, rootElement);

export default SeatMap;

