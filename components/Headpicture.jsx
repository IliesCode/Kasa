import React from "react";
import "./Headpicture.css";
import HeadPic from "../src/assets/HeadPic.jpg";

function Head() {
  return (
    <div className="head">
        <div className="headPic" style={{ backgroundImage: `url(${HeadPic})` }}><h2 className="title">Chez vous, partout et ailleurs</h2></div>
        
    </div>
  );
}

export default Head;
