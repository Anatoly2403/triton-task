import React from 'react';
import './shop-list.css';
import ShopListItem from '../shop-list-item';

const ShopList = ({ itemList, incrItem, decrItem, onBuy }) => {
    const tatalPrice = itemList.reduce((acc, { price, count }) => acc + (price * count), 0);


    return (
        <div className="shop-list">
            <div className="shop-list__items">
                {itemList.map((item, i) =>
                    <ShopListItem
                        key={i}
                        incrItem={incrItem}
                        decrItem={decrItem}
                        item={item} />)}
            </div>
            <div className="shop-list__pannel">
                <div className="shop-list__pannel-sum"> SUM: {tatalPrice} USD </div>
                <button className='shop-list__pannel-btn' onClick={onBuy}>BUY</button>
            </div>
        </div>
    )
}

export default ShopList;