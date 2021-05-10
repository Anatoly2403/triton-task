import React from 'react';
import './catalog.css';
import Item from '../item';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";



const Catalog = ({ addItem }) => {
    const fruits = [
        { name: 'apple', price: 110 },
        { name: 'apricot', price: 120 },
        { name: 'banana', price: 130 },
        { name: 'lemon', price: 115 },
        { name: 'peach', price: 156 },
        { name: 'grape', price: 446 },
    ]
    return (
        <div className="catalog">
            <Link className="catalog__upper" to='/cart'>
                <ShoppingCartOutlined className="catalog__cart-btn" style={{ fontSize: '25px' }} />
            </Link>
            <div className="catalog__lower">
                {fruits.map((fruit, i) => <Item key={i} fruit={fruit} addItem={addItem} />)}
            </div>

        </div>
    )
}

export default Catalog;