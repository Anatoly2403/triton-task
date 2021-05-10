import React, { useState } from 'react';
import './app.css';
import Cart from '../cart';
import Catalog from '../catalog';
import { Switch, Route } from "react-router-dom";
import { Modal } from 'antd'

const App = () => {
    const [itemList, setItemList] = useState([]);
    const [cardDetails, setCardDetails] = useState({ num: '', hold: '', exp: '', cvv: '' });

    const addItem = (name, price) => setItemList((itemList) => {
        const newlList = [...itemList];
        const idx = newlList.findIndex(item => item.name === name && item.price === price);
        return (idx !== -1)
            ? [...newlList.slice(0, idx), { ...newlList[idx], count: newlList[idx].count + 1 }, ...newlList.slice(idx + 1)]
            : [...newlList, { name, price, count: 1 }]
    })

    const incrItem = (name, price) => setItemList((itemList) => {
        const newlList = [...itemList];
        const idx = newlList.findIndex(item => item.name === name && item.price === price);

        return [...newlList.slice(0, idx), { ...newlList[idx], count: newlList[idx].count + 1 }, ...newlList.slice(idx + 1)]
    })

    const decrItem = (name, price) => setItemList((itemList) => {
        const newlList = [...itemList];
        const idx = newlList.findIndex(item => item.name === name && item.price === price);
        return (newlList[idx].count - 1 < 1)
            ? [...newlList.slice(0, idx), ...newlList.slice(idx + 1)]
            : [...newlList.slice(0, idx), { ...newlList[idx], count: newlList[idx].count - 1 }, ...newlList.slice(idx + 1)]
    })

    const handleChange = ({ target: { name, value } }) => setCardDetails((cardDetails) => ({ ...cardDetails, [name]: value }));

    const checkCardDetails = () => {
        const { num, hold, exp, cvv } = cardDetails;
        if (num.length > 15 && hold && exp.length > 4 && cvv.length > 2) {
            return true
        }
        return false
    }

    const success = () => Modal.success({ content: 'Thank you for shopping!' });
    const error = () => Modal.error({ content: 'Please enter card details!' });
    const onBuy = () => (checkCardDetails()) ? success() : error();



    return (
        <div className="app">
            <Switch>
                <Route path='/' exact>
                    <Catalog addItem={addItem} />
                </Route>
                <Route path='/cart' exact>
                    <Cart
                        onBuy={onBuy}
                        cardDetails={cardDetails}
                        handleChange={handleChange}
                        incrItem={incrItem}
                        decrItem={decrItem}
                        itemList={itemList} />
                </Route>
            </Switch>
        </div>
    )
}

export default App;