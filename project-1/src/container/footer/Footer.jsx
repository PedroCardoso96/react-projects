import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className='gpt3__footer section__padding'>
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Request Early access</p>
            </div>
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>é muita div mds</p>
                    <p>4002-8922</p>
                    <p>ronaldinho@gmail.com</p>
                </div>
            </div>
            <div className='gpt3__footer-copyright'>
                <p>@2021 GPT-3. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer