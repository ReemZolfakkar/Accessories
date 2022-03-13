import React,{useState,useEffect} from 'react'
import { useParams} from 'react-router-dom'
import ManageData from '../../ManageData'
import bag1 from '../../Images/bag1.jpg'
import { selectedProduct } from '../../redux/actions/productActions'
import axios from 'axios'
import { useSelector,useDispatch} from 'react-redux'
import ProductInfo from './ProductInfo'

function ProductDetails(props) {
    const {id}=useParams()
    const dispatch=useDispatch();
    const product=useSelector((state)=>state.product)
    const [error,setError]=useState(true);
    const fetchProductsDetails=async()=>{
      const response=await axios.get(`https://fakestoreapi.com/products/${id}`).catch((err)=>{
          setError(true)
      });
      dispatch(selectedProduct(response.data));
      setError(false)   

  };
  const handleCart=(e)=>{
    const key = e.target.name;
    const value =e.target.value;
      
  }
  useEffect(()=>{
      fetchProductsDetails();
  },[])
  if (error==true)return true;
  const selectedproduct=product.product
    return (
    <div className='product-details'>
      {error==true && <div>Loading...</div>}
      {error==false && <div>{error}</div>}
      {product &&
       <div className='row'>
       <div className='col-6 '>
         <div className='product-details-div-img'>
         <img className='product-details-img' src={selectedproduct.image}></img>
         </div>
       </div>
       <div className='col-6'>
          <div >
            <h1 className='product-details-title'>{selectedproduct.title}</h1>
          </div>
          <div className='product-details-price-div'>
            <span className='product-details-price'>{selectedproduct.price} EGP</span>
          </div>
          <div className='product-details-quantity'>
            <span>Quantity</span>
          </div>
          <div className='product-details-quantity-input-div'>
            <input className='product-details-quantity-input' type="number" id="quantity" name="quantity" min="1" max="5" onChange={handleCart}></input>
          </div>
          <div >
            <button className='product-details-btn'>
              <span className='product-details-btn-text'>
              Add to Cart
              </span>
            </button>
          </div>
          <ProductInfo description={selectedproduct.description}>

          </ProductInfo>
       </div>
      </div>
      }
    </div>
  )
}

export default ProductDetails