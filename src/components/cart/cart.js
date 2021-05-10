import React from 'react';
import './cart.css';
import { LeftOutlined } from '@ant-design/icons';
import BankCard from '../bank-card';
import ShopList from '../shop-list';
import { Link } from "react-router-dom";

const Cart = ({ itemList, incrItem, decrItem, cardDetails, handleChange, onBuy }) => {
    return (
        <div className="cart">
            <Link className="cart__back-btn" to='/'>
                <LeftOutlined style={{ fontSize: '25px' }} />
            </Link>
            <BankCard
                cardDetails={cardDetails}
                handleChange={handleChange} />
            {itemList.length > 0
                && <ShopList
                    onBuy={onBuy}
                    incrItem={incrItem}
                    decrItem={decrItem}
                    itemList={itemList} />}
        </div>
    )
}

export default Cart;