import React from 'react';
import {Link} from 'react-router-dom';

function CardItem(props){
    return(
        <>
        <li className='cards_item'>
            <Link className='cards_item_link' to={props.path}>

            </Link>
        </li>
        </>
    )
}

export default CardItem;