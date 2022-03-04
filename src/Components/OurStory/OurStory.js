import React from "react";
import Left_widget from "./Left_widget";
import Right_widget from "./Right_widget";

function OurStory() {
  return <div className="row g-0">
    <div style={{marginBottom:"50px"}}>
    <h1 class="font_0" style={{lineHeight:"1.1em",textAlign:"center",fontSize:"42px"}}>
      <span class="color_15">
        <span style={{letterSpacing:"0.2em"}}>OUR STORY</span>
      </span>
    </h1>
    </div>
    <div className="col-6">
        <Left_widget/>
    </div>
      <div className="col-6">
       <Right_widget/>
   </div>   
  </div>
}

export default OurStory;
