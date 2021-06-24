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
                        <Link to='/'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact Us</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                        <Link to='/'>Marketing Team</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit a video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                        <Link to='/'>Social Networks</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>TikTok</Link>
                        <Link to='/'>Snapchat</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </section>
            <section className='social-media'>

            </section>
        </div>
    )
}

export default Footer;