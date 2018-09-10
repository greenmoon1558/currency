import React from 'react'
import PropTypes from 'prop-types'
import PricesList from "../containers/PricesList";
import '../css/Card.css';
import '../css/Checkbox.css';

const Card = ({currencyName, cardColor, imageLink, totalPrice, 
    percentChange, handledPercentChanges, cardBackgroundImage, id }) => {
    return <section className={"card "+cardColor} style={{backgroundImage: 'url('+cardBackgroundImage+')'}}>
        <h1 className="card__header">{currencyName}</h1>
        <img className="card__image" src={imageLink} alt="currency image"/>
        <p className="total__price__paragraph">
            <span className="total__price__title">Price:</span>
            <span className="total__price__title__value">${totalPrice}</span>
        </p>
         <p className="percent__change__paragraph">
            <span className="percent__change__title">Percent change</span>
            <label className="switch switch_type" role="switch">
                <input className="percent__change__input switch__toggle" 
                    type="checkbox" 
                    checked={percentChange} 
                    onChange={handledPercentChanges.bind({id:id})}/>
                <span className="switch__label"></span>
            </label>
        </p>
         <PricesList isPercent={percentChange} />
    </section>
    };

Card.propTypes = {
  id: PropTypes.number.isRequired,
  currencyName: PropTypes.string.isRequired,
  cardColor: PropTypes.string.isRequired,
  cardBackgroundImage: PropTypes.string.isRequired, 
  imageLink: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
  percentChange: PropTypes.bool.isRequired,
  handledPercentChanges: PropTypes.func.isRequired,
}

export default Card;