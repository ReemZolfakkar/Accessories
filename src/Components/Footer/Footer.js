import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='row flex-center' style={{marginTop:'50px'}}>
            <div className='col-sm'>
                <div className="nav-brand">adalene.</div>
            </div>
            <div className='col-sm footer-item'>
                    <div className='footer-item-value'>
                        <Link style={{color:'black'}}>
                            Home
                        </Link>
                    </div>
                    <div className='footer-item-value'>
                        <Link style={{color:'black'}}>
                            ShopAll
                        </Link>
                    </div>
                    <div className='footer-item-value'>
                        <Link style={{color:'black'}}>
                            OurStory
                        </Link>
                    </div>
                    <div className='footer-item-value'>
                        <Link style={{color:'black'}}>
                            OurCraft
                        </Link>
                    </div>
            </div>
            <div className='col-sm footer-item'>
                    <div className='footer-item-value'>
                        FAQ
                    </div>
                    <div className='footer-item-value'>
                        Shipping  & Returns
                    </div>
                    <div className='footer-item-value'>
                            Store Policy
                    </div>
                    <div className='footer-item-value'>
                        Payment Methods
                    </div>
                    <div className='footer-item-value'>
                        Stockists
                    </div>
            </div>
            <div className='col-sm footer-item'>
                    <div className='footer-item-value'>
                        Facebook
                    </div>
                    <div className='footer-item-value'>
                        Instagram
                    </div>
                    <div className='footer-item-value'>
                        Twitter
                    </div>
                    <div className='footer-item-value'>
                        Pinterest
                    </div>
            </div>
            <div className='col-sm footer-item'>
                    <div className='join-us'>
                            JOIN US!
                    </div>
                    <div>
                        Email*
                    </div>
                    <div className="search-box">
                        <input className="email" type='email' id="email" name="email" required></input>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <button className='footer-btn'>
                                Send
                        </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer