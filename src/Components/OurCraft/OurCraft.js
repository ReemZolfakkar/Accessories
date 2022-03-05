import React from 'react'
import Left_widget from '../OurStory/Left_widget'
import Right_widget from '../OurStory/Right_widget'
import img1 from '../../Images/Drawing.jpg'
import img2 from '../../Images/Fabrics.jpg'
import img3 from '../../Images/Packaging.jpg'
function OurCraft() {
    return <div className="row g-0">
    <div style={{marginBottom:"50px"}}>
    <h1 className="font_0" style={{lineHeight:"1.1em",textAlign:"center",fontSize:"42px"}}>
      <span className="color_15">
        <span style={{letterSpacing:"0.2em"}}>OUR CRAFT</span>
      </span>
    </h1>
    </div>
    <div >
        <Left_widget title={"DESIGN"} imgurl={img1}/>
    </div>
      <div >
       <Right_widget title={"SELECTION"} imgurl={img2}/>
   </div> 
   <div >
        <Left_widget title={"CRAFTSMANSHIP"} imgurl={img3}/>
    </div>  
  </div>

}

export default OurCraft
