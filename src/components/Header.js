import React from 'react'
import Select from "./Select";
import '../css/Header.css';
const Header = () => {
return (
    <header className="header">
        <div className="header__title">
            <span className="header__title__text">Select currency to exhange: </span>
            <Select selectOptions={[
                {id:0, currencyName:"USD"},
                {id:1, currencyName:"EUR"},
                {id:2, currencyName:"RUB"},
                {id:3, currencyName:"GBP"}]} 
                handleSelectChanges={function(){}} />
        </div>
    </header>
)}

export default Header;