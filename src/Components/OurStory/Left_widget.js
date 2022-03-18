import React from 'react'

function Left_widget(props) {
  return (
    <div className='row'>
       <div className="col-sm right-paragraph">
       <h2 className="font_5" style={{lineHeight:"1.2em",textAlign:"center",fontSize:"24px"}}>
          <span  style={{letterSpacing:"0.25em"}}>{props.title}</span>
        </h2>
        <div className="font_8" style={{padding:'0 15%'}}>
      
          <span style={{letterSpacing:"0.01em"}}>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. click “Edit Text” or double click me to
          </span>
    
      </div>
       </div>
       <div  className="col-sm right-img " style={{backgroundImage:`url("${props.imgurl}")`}}>
      </div>
    </div>
  )
}

export default Left_widget