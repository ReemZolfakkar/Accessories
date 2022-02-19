import React from 'react'
import { Link } from 'react-router-dom'

function Authentication() {
  return (
    <div className='Auth-forms'>
        <h1>
            New here?
        </h1>
        <p>
            Sign up and discover great amount of new opportunities!
        </p>
        <Link to={'\Register'}>
            <button type="button" className="Auth-button" >Sign Up</button>
        </Link>
    </div>
  )
}

export default Authentication