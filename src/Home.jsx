import React from 'react'
import elena from "./elena.png";
import jude from "./jude.png";
import martin from "./martin.png";
import group3 from "./group3.png";
import group4 from "./group4.png";
import group5 from "./group5.png";
import group6 from "./group6.png";
import group7 from "./group7.png";
import group8 from "./group8.png";
import gk from "./gk.png";
import "./style.css"
import i from "./rect.png";
export default function Home() {
   
    function fun()
    {
        console.log("hello");
        var a = document.getElementById("back");
        a.style.display="block";
            setTimeout(function(){
                a.style.display="none";
               },5000);
               navigator.bluetooth.getDevices()
               .then(device => console.log(device))
               .catch(error => { console.error(error); });
             
        
       
    }
    return (
        <div id="all">
            
            <div id="op">
            <img className="imgButton"  src={gk} alt="e" onClick={()=>fun()}/>
               
                  <img className="imgButton"  src={jude} alt="He" onClick={()=>fun()}/>
                 <img className="imgButton" src={martin} alt="ll" onClick={()=>fun()}/>
                 <img className="imgButton" src={elena} onClick={()=>fun()} alt="Hell"/>
                

            </div>
            <h5>REFRESH YOUR LAUNDRY LIKE IT'S NEW</h5>
           
            <div style={{top:'20px',width:'50%',height:'50%'}}>
            <div className="circle1 circle"><img className="imgOpt" src={group3} alt="Hell"/><p>Remove creasing</p></div>
            <div className="circle2 circle"> <img className="imgOpt"src={group4} alt="He"/><p>Ready-to-wear clothes in just 40 mins</p></div>
            <div className="circle3 circle">  <img className="imgOpt"src={group5} alt="ll"/><p>Fragrant and hygienic clothes</p></div>
            <div className="circle4 circle">  <img className="imgOpt" src={group6} alt="e"/><p>Odour-free clothes</p></div>
            <div className="circle5 circle">   <img className="imgOpt" src={group7} alt="ll" /><p>Avoid any dust /germ allergies</p></div>
            <div className="circle6 circle">  <img className="imgOpt" src={group8} alt="e" /><p>99.99% Germ-free clothes</p></div>
            <div className="circle7 circle">  <img className="imgOpt" src={group6} alt="e"/><p>Pure Steam refresh</p></div>
            </div>
            <img id="back" src={i}  alt="splash" style={{width:'100%',height:'100%',position:'fixed',top:'0',display:'none'}}/>
        </div>
    )
}
