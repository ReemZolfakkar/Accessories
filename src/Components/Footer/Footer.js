import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <div className='row flex-center'>
            <div className='col-sm'>
                <div className="nav-brand">adalene.</div>
            </div>
            <div className='col-sm footer-item'>
                    <div>
                        <Link>
                            Home
                        </Link>
                    </div>
                    <div>
                        <Link>
                            ShopAll
                        </Link>
                    </div>
                    <div>
                        <Link>
                            OurStory
                        </Link>
                    </div>
                    <div>
                        <Link>
                            OurCraft
                        </Link>
                    </div>
            </div>
            <div className='col-sm footer-item'>
                    <div>
                        FAQ
                    </div>
                    <div>
                        Shipping  & Returns
                    </div>
                    <div>
                            Store Policy
                    </div>
                    <div>
                        Payment Methods
                    </div>
                    <div>
                        Stockists
                    </div>
            </div>
            <div className='col-sm footer-item'>
                    <div>
                        Facebook
                    </div>
                    <div>
                        Instagram
                    </div>
                    <div>
                        Twitter
                    </div>
                    <div>
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
                        <input class="email" type='email' id="email" name="email" required></input>
                    </div>
                    <div >
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