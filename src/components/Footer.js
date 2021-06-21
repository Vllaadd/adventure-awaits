import React from 'react';
import './Footer.css';
import Button from './Button';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div className='footer-container'>
            <section className='fotter-subscription'>
                <p>Join the adventure newsletter to receive our best vacation deals!</p>
                <p>You can unsubscribe at any time.</p>
                <div>
                    <form>
                        <input name='email' type='email' placeholder='Your Email'/>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <section className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                    </div>
                </div>
            </section>
            <section className='social-media'>

            </section>
        </div>
    )
}

