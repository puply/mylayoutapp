import React from 'react'
import homePhoto from '../assets/homePhoto.png'
import {  BsFacebook, BsTwitter } from 'react-icons/bs'
import { SiYoutube } from 'react-icons/si'
import { AiFillInstagram } from 'react-icons/ai'

const Home = () => {
  return (
    <div className='home'>
      <div className='homeLeft'>
        <h1>FARM PRODUCT HEALTHY LIFE <span>GOOD DRESS</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet posuere leo. Sed commodo,
          Praesent dignissim elementum magna sit amet gravida. Morbi maximus mauris ex, vitae pharetra lectus iaculis eleifend.</p>
        <button type="button">Shop Now</button>

        <div className='socials'>
          <a target="_blank" href='https://www.instagram.com/alimayukk/'><AiFillInstagram /></a>
          <a href='#'><BsFacebook /></a>
          <a href='#'><SiYoutube /></a>
          <a href='#'><BsTwitter /></a>
        </div>
        <div>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
          Lorem<br/>
        </div>
      </div>
      <div className='homeRight'>
        <img src={homePhoto} alt="vegeterian photo" className='homePhoto' />
      </div>
    </div>
  )
}

export default Home
