import React from 'react'
import PropTypes from 'prop-types'
import '../css/Select.css'

const Select = ({ selectOptions, handleSelectChanges }) => (
    <form className="select__form">
        <select className="select" onChange={handleSelectChanges}>
        {selectOptions.map((option, index) => (
                <option className="option" key={index} value={option.currencyName}>{option.currencyName}</option>
            ))}
        </select>
    </form>
)

Select.propTypes = {
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        currencyName: PropTypes.string.isRequired,    
    })
  ),
  handleSelectChanges: PropTypes.func.isRequired
}

export default Select;