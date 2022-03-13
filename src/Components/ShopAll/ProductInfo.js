import React, { useState } from 'react'

function ProductInfo(props) {
    const [toggle,setToggle]=useState(true)
    const [btntext,setBtntext]=useState("+")
    const handlebtn=()=>{
        setToggle(!toggle)
        if(toggle==true)
        {
            setBtntext("+")
        }
        else {
            setBtntext("-")
        }
    }
    
  return (
    <button className='product-info-btn' onClick={handlebtn}>
        <div className='product-info-text'> 
        <h2 style={{width:'100%',fontSize:'16px',textAlign:'inherit'}}>
            PRODUCT INFO
        </h2>
        <span  style={{alignContent:'flex-end'}} >
             {btntext}
        </span>
        </div>
        {btntext=="-" &&
            <div className='product-info-details'>
                {props.description}
            </div>
        }
    </button>
  )
}

export default ProductInfo