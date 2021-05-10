import React from 'react';
import './bank-card.css';
import CardInfo from 'card-info';
import InputMask from 'react-input-mask';


const BankCard = ({ cardDetails: { num, hold, exp, cvv }, handleChange }) => {
    const cardInfo = (num.trim().length > 5)
        ? new CardInfo(num.trim(), { banksLogosPath: './node_modules/card-info/dist/banks-logos', brandsLogosPath: './node_modules/card-info/dist/brands-logos' })
        : null;

    return (
        <div className="bank-card">
            <div className="card">
                <div className='card__pay-system'>{!cardInfo ? 'pay system' : !cardInfo.brandName ? 'undefined' : cardInfo.brandName}</div>
                <div className="card__number">
                    {num.length > 0 ? `${num}` : 'ХХХХ ХХХХ ХХХХ ХХХХ'}
                </div>
                <div className="card__holder">
                    Card Holder
                    <span> {hold ? hold : 'name lastname'}</span>
                </div>
                <div className="card__expires">
                    Expires
                  <span>{exp ? `${exp}` : 'MM/YY'}</span>
                </div>
            </div>

            <form action="#" className='bank-card__form'>
                <div className="bank-card__data-wrapper">
                    <label htmlFor="num" className='bank-card__number'>
                        Card Number <br />
                        <InputMask mask="9999 9999 9999 9999" maskChar="" name='num' value={num} onChange={handleChange} />
                    </label>
                </div>
                <div className="bank-card__data-wrapper">
                    <label htmlFor="hold" className='bank-card__holder'>
                        Card Holder <br />
                        <input type="text" name='hold' value={hold} onChange={handleChange} />
                    </label>
                </div>
                <div className="bank-card__data-wrapper">
                    <label htmlFor="exp" className='bank-card__expires'>
                        Expires <br />
                        <InputMask mask="99/99" maskChar="" name='exp' placeholder='MM/YY' value={exp} onChange={handleChange} />
                    </label>
                    <label htmlFor="cvv" className='bank-card__cvv'>
                        CVV <br />
                        <InputMask mask="999" maskChar="" name='cvv' value={cvv} onChange={handleChange} />
                    </label>
                </div>
            </form>
        </div>
    )
}

export default BankCard;