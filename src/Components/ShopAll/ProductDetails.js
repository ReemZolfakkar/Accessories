import React from 'react'
import { useParams } from 'react-router-dom'
function ProductDetails(props) {
    const {id}=useParams()
  return (
    <div className='product-details'>
        <div className='row'>
            <div className='col-6'>

            </div>
            <div className='col-6'>

            </div>
        </div>
    </div>
  )
}

export default ProductDetails