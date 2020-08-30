import React from 'react'
import solar from '../assets/solar.jpeg'


export const About = () => (
    <div>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>

        <div className="row">

            <div className="col-md-6 col-lg-6 d-flex align-items-center mt-4 mt-md-0 wow animated fadeInLeft ">
                <div>
                    <div className="section-header">
                        <h1 className="section-title">How it Works</h1>
                    </div>
                    <p className="text-muted">Get Your Solar Panel Ratings with Ease In Three Steps</p>
                    <ul>
                        <li>Select your home appliances</li>
                        <li>Select of input the wattage of each appliance or input manually</li>
                        <li>Finally select the number of days it would function without interruption</li>
                    </ul>
                    <button className="btn btn-primary mb-5">Learn More</button>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className="col-12 wow animated fadeInRight slower delay-5s">
                    <img alt="img" data-aos="fade-up" className="img-fluid" src={solar} />
                </div>
            </div>

        </div>
    </div>
)