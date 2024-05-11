import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            {/* left */}
            <div className="left">
                <p>Buy & Sell Crypto 24/7 usin your retirement account</p>
                <h1>Invest in Cryptocurreny with Your IRA </h1>
                <p>Buy, sell, and store hundreds of cryptocurrencies</p>
                <div className="input-container">
                    <input type="email" placeholder='Enter yoyr email' />
                    <button className='btn'>Learn More</button>
                </div>
            </div>
            {/* right */}
            <div className="container">
              <div className="img-container">
                <img src={Crypto} alt="crypto" />
              </div>
            </div>
        </div>

    </div>
  )
}

export default Hero