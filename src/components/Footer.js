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
                        <Button buttonStyle='btn--outline'></Button>
                    </form>
                </div>
            </section>
            <section className='footer-links'>

            </section>
            <section className='social-media'>

            </section>
        </div>
    )
}

