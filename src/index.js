import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import App from './App';
if("serviceWorker" in navigator)
{
  navigator.serviceWorker.register("sw.js").then(registration=>
    {
      console.log("SW registered");
      console.log(registration);
    }).catch(error=>
      {
        console.log("SW failed registration");
        console.error(error);
      })
}
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

