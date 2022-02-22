import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import ManageData from '../../ManageData'
import bag1 from '../../Images/bag1.jpg'


function ProductDetails(props) {
    const {id}=useParams()
    const {data:product,error,isPending}=ManageData(`http://localhost:3001/Products/${id}`)
    const [cart,setCart]=useState({id:'',color:'',quantity:''})
    const handleCart=(e)=>{
      const key = e.target.name;
      const value =e.target.value;
      setCart({...cart,[key]:value})    
    }
    const submitCart=(e)=>{
           const product=cart;
           fetch('http://localhost:3001/Products',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
           }).then(()=>{
             console.log("new product in cart")
           })
    }
    console.log(product)
    return (
    <div className='product-details'>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {product &&
       <div className='row'>
       <div className='col'>
         <img src={product.imgurl}></img>
       </div>
       <div className='col'>
          <div>
            <span>{product.name}</span>
          </div>
          <div>
            <span>{product.id}</span>
          </div>
          <div>
            <span>{product.price}</span>
          </div>
          <div className='d-flex' >
            { product.colors.map((value,index)=>{return(
                <div className='product-item-colors' key={index} style={{background:`${value}`}} onClick={handleCart} />  
            )})}
        </div>
          <div>
            <span>Quantity</span>
          </div>
          <div>
            <input type="number" id="quantity" name="quantity" min="1" max="5" onChange={handleCart}></input>
          </div>
          <div>
            <button onClick={submitCart}>Add to Cart</button>
          </div>
       </div>
      </div>
      }
    </div>
  )
}

export default ProductDetails