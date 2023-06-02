import React, { useState } from "react";
import "./footer.css";
import footerbg from "../SS/footerbg.png"


const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-top">
        <div className="container">
        <ul class="menu mymene">
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Our Services</a></li>
        <li><a href='#'>FAQ</a></li>
        <li><a href='#'>News & Updates</a></li>
        <li><a href='#'>Testimonial</a></li>
        <li className='button'><a href='#'>Contact Us</a></li>
      </ul>
        </div>
      </div>
      <div class="foter">
          <div class="container">
            <div class="details">
              <div class="contact">
                <h1>Contacts</h1>
                <ul>
                  <li><a  href="#"><i class="fa-solid fa-phone-flip"></i> +92-311-0290709<br/></a></li>
                  <li><a href="#" class="nav-top-left-2">Email: support@learntowritenow.com</a></li>
                  <li><a href="#"><i class="fa-solid fa-circle-question"></i>&nbsp; FAQ</a></li>
                </ul>
                <ul class="sociallinks">
                  <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"> <i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"> <i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
              <div class="timing">
                <div class="timing-fall-summer">
                  <a class="fall-winter" href="#"><strong>Fall, Winter &amp; Spring Hours</strong></a>
                  <div class="fall-timing">
                    <a href="#">Tue, Wed, Thu : 4:00 pm - 8:00 pm CST</a><br/>
                    <a href="#">Sat: 8:00 am - 4:00 pm cst</a>
                  </div>
                </div>
                <div class="timing-fall-summer">
                  <a class="fall-winter" href="#"><strong>Summer Hours</strong></a>
                  <div class="fall-timing">
                    <a href="#">Mon, Tues, Wed, Thu : 9:00 am - 12:00 pm CST</a><br/>
                    <a href="#">Mon, Tues, Wed, Thu : 4:00 pm - 8:00 pm CST</a>
                  </div>
                </div>
              </div>
              <div class="menu-footer">
                <div class="menu-strong">
                  <a href="#"><strong>Menu</strong></a><br/>
                </div>
                <div class="menu-elements">
                  <ul>
                    <li><a href="#">Workshops</a></li>
                    <li><a href="#">Programs</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Free Resourses</a></li>
                  </ul>
                </div>
              </div>
              <div class="review-footer">
                <div class="review-strong">
                  <a href="#"><strong>Links</strong></a><br/>
                </div>
                <div class="review-elements">
                  <ul>
                    <li><a href="#">Review</a><br/></li>
                    <li><a href="#">Write review</a><br/></li>
                    <li><a href="#">Enrollment agreement</a><br/></li>
                    <li><a href="#">Terms of Services</a><br/></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div> 
              </div> 
            </div>
          </div>
          <div class="search">
            <div class="container">
              <div class="sub-bar">
                <div class="serach-text">
                  <h3>Sign up to get the latest updates and more …</h3>
                </div>
                <div class="search-penal">
                  <div class="panel">
                    <input type="email" name="Email" id="email" placeholder=" Your Email Address"/>
                  </div>
                </div>
                <div class="subscribe">
                  <a class="subscribe-button" href="#">Subscribe</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Footer;
