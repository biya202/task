import React, { useState } from "react";
import "./main.css";
import testi from '../SS/testi.png'
import users3 from "./dataset2";


const Main = () => {


  return (
    <>
      <section className="main">
        <div className="container">
          <div className="col3">
            <div className="column1 align-column">
              <h1>Any Question?</h1>
            </div>
            <div className="col2 align-column1">
              <li>
                <a href="#">
                  <i class="fa-solid fa-envelope">
                    <span>sales@huntingmart.pk</span>
                  </i>
                </a>
              </li>
              <li>
                {" "}
                <a href="#">
                  <i class="fa-solid fa-phone">
                    <span>+923126363632</span>
                  </i>
                </a>
              </li>
            </div>
            <div className="col3">
              <div className="card1">
                <ul>
                  <li className="align">
                    <h3>Follow Us</h3>
                  </li>
                  <li className="align">
                    <a href="#">
                      <i class="fa-brands fa-facebook"></i>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li className="align">
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                      <span>Twitter</span>
                    </a>
                  </li>
                  <li className="align">
                    <a href="#">
                      <i class="fa-brands fa-linkedin"></i>
                      <span>Linkedin</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card2">
                <ul>
                  <li className="align">
                    <h3>We are help</h3>
                  </li>
                  <li className="align">
                    <h3>9259</h3>
                  </li>
                  <li className="align">
                    <p>People Get a US Visa</p>
                  </li>
                </ul>
              </div>
              <div className="card3">
                <ul>
                  <li className="align">
                    <h3>Our Address</h3>
                  </li>
                  <li className="align">
                    <p>505 Eight</p>
                  </li>
                  <li className="align">
                    <p>Avenue Suite 1402 New York, NY 10018</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="our-services">
            <div className="heading">
              <h1 className="help">Our Services</h1>
              <h1 >What we can do for you?</h1>
            </div>
            <div className="slider-menu">
                <ul>
                    <li><a href="#"><i class="fa-solid fa-house"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-users"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-graduation-cap"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-user"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-briefcase"></i></a></li>
                    <li><a href="#"><i class="fa-solid fa-book"></i></a></li>
                </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonals">
          <div className="our-services">
          <div className="container">
            <div className="heading">
              <h1 className="help">Happy Clients</h1>
              <h1>Read our Testimonials</h1>
              </div>
            </div>
            <div className="happty-c">
                <img src={testi} alt="image"/>
            </div>
          </div>
      </section>
      <section className="services">
        <div className="container">
          <div className="our-services">
            <div className="heading">
              <h1 className="help">Our Latest</h1>
              <h1 >News & updates</h1>
            </div>
            <div className="users3">
                {users3.map(user =>{
                 return(
                <div className="user-a3">
                  <div className='adimage'>{user.image}</div>
                  <p className='title-text'>{user.article}</p>
                  <p className='adteext'>{user.articletitle}</p>
                  <div className='a-set'>
                  <div className='adimages'>{user.aimage}</div>
                  <div className='a-align'>
                  <p className='auther-n'>{user. aname}</p>
                  <div className='d-set'>
                  <p>{user.date}</p>
                  <p>{user.time}</p>
                  </div> 
                  </div>
                  </div>
                </div>
              )
            })}
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
