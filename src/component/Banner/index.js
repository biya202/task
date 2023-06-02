import React from 'react';
import "./banner.css";
import banner from '../SS/banner.png'

const Banner = () => {
  return (
    <section className='banner'>
     <div className='fluid-container'>
        <div className='col1'>
            <img src={banner} alt='image'/>
            <div className='banner-text'>
              <p>IMIGRATION ATTORNEY</p>
                <h1>Get your visa With us</h1>
                <a href='#'><p>LEARN MORE</p></a>
            </div>
        </div>
     </div>
    </section>
  )
}

export default Banner
