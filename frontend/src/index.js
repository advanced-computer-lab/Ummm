import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CreateFlight from './page/CreateFlight.js'
import ViewFlights from './page/ViewFlights.js'
import UpdateFlight from './page/UpdateFlight.js'
import SearchFlight from './page/SearchFlight.js'
import LoginPage from './page/LoginPage.js'
import HomePage from './page/HomePage.js'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>

<BrowserRouter>
                <Switch>
                    <Route exact path="/ViewFlights" component={ViewFlights} />
                    <Route exact path="/UpdateFlight" component={UpdateFlight} />
                    <Route exact path="/CreateFlight" component={CreateFlight} />
                    <Route exact path="/SearchFlight" component={SearchFlight} />
                    <Route exact path="/HomePage" component={HomePage} />
                    <Route exact path="/LoginPage" component={LoginPage} />
                </Switch>
            </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
