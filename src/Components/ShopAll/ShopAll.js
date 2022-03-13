import React ,{useEffect, useState} from "react";
import ProductCard from "./ProductCard";
import { useSelector ,useDispatch} from 'react-redux'
import {setProducts} from "../../redux/actions/productActions"
import axios from 'axios'
function ShopAll() {
  const products=useSelector((state)=>state.allProducts.products);
  const dispatch=useDispatch();
  const [error,setError]=useState(true);
  const fetchProducts=async()=>{
      const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
          setError(true)
      });
      dispatch(setProducts(response.data));
      setError(false)
     
      
  };
  useEffect(()=>{
      fetchProducts();
  },[])
  return <div>
    { error==false && <>
    {products.map((value,index)=>{return(
    <ProductCard key={index} Product={value} id={index}/>
    )})
    }</>
    }
    { error==true && <div>
          Loading...
        </div>
    }
  </div>;
}

export default ShopAll;
