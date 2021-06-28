import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(){
    return(
        <div className='cards'>
            <h1>Check out these EPIC destinations!</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem
                        src='images/img-9.jpg'
                        text='Explore the hidden waterfall deep inside the Amazon Jungle.'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem
                        src='images/img-2.jpg'
                        text='Travel through the Island of Bali in a Private Cruise.'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}