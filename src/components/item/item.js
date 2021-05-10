import React from 'react';
import './item.css';
import ImgLogo from '../../images/image.png';

const Item = ({ fruit, addItem }) => {
    return (
        <div className="item">
            <img className="item__img" src={ImgLogo} alt="Img Logo" />
            <h2 className="item__name"> {fruit.name} </h2>
            <h3 className="item__price"> {fruit.price} USD </h3>
            <button className='item__add-btn' onClick={() => addItem(fruit.name, fruit.price)}>ADD TO CART</button>
        </div>
    )
}

export default Item;