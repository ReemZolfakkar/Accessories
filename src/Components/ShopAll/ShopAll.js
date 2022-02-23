import React ,{useEffect} from "react";
import ProductCard from "./ProductCard";
import ManageData from '../../ManageData'

function ShopAll() {
  const {data,error,isPending}=ManageData('http://localhost:3001/Products')
  return <div>
    {error && <div>
      {error}
      </div>}
      {isPending && <div>
      Loading ....
      </div>}
    { data && <>
    {data.map((value,index)=>{return(
    <ProductCard key={index} Product={value} id={index}/>
    )})
    }</>
    }
  </div>;
}

export default ShopAll;
