import React from 'react';
import './shop-list-item.css';

const ShopListItem = ({ item: { name, price, count }, incrItem, decrItem }) => {
    return (
        <div className="shop-list-item">
            <h3 className="shop-list-item__name">{name}</h3>
            <div className="shop-list-item__count">
                <span className="decr" onClick={() => decrItem(name, price)}>-</span>
                <span className="count">{count}</span>
                <span className="incr" onClick={() => incrItem(name, price)}>+</span>
            </div>
            <h3 className="shop-list-item__price">{count * price}</h3>
        </div>
    )
}

export default ShopListItem;