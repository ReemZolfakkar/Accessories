import React ,{useState}from 'react'
import { Link,useHistory } from "react-router-dom"
import bag1 from '../../Images/bag1.jpg'

function ProductCard(props) {
   

  return (<>
    <div  className='product-item' >
        <Link to={`/ProductDetails/${props.id}`}>
            <div className='product-item-header'>
                <img src={bag1} className='product-item-image'>
                </img>
                
                <button className='product-item-review'  >
                        Quick review
                </button>
            
            </div>
        </Link>
        <span className='product-item-name'>{props.Product.name}</span>
        <div className='d-flex' >
        { props.Product.colors.map((value,index)=>{return(
            <div className='product-item-colors' key={index} style={{background:`${value}`}} />  
        )})}
        </div>
        <span className='product-item-price'>
            {props.Product.price}.00 EGP
        </span>
    </div>
 
    </>
  )
}

export default ProductCard