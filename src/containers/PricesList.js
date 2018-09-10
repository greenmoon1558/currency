import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux';
import { setPrices } from '../actions/index.js';

class PricesList extends React.Component {
     constructor(props) {
        super(props);
        this.state = {}
     }

    render() {
      return (<ul className="price__list">
        {this.props.prices.filter(item=>(this.props.isPercent === item.isPercent)).map((price, index) => (
          <li className={"price__item"} key={index}>
            <span className="timeperiod__text">{price.timePeriod}</span>
            <span className={price.increase? "price_item_increase": "price_item_decrease"}>
            {price.priceChanges}{price.isPercent? "%":"$"}
            </span>
          </li>
        ))}
      </ul>);
    }
  }

PricesList.propTypes = {
  isPercent: PropTypes.bool.isRequired,
  prices: PropTypes.arrayOf(
    PropTypes.shape({
      increase : PropTypes.bool.isRequired,
      priceChanges: PropTypes.string.isRequired,
      isPercent : PropTypes.bool.isRequired,
      timePeriod: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

const mapStateToProps = ({prices}) => {
  return {prices: prices}
}

const mapDispatchToProps = ( dispatch ) => {
  return bindActionCreators({setPrices}, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PricesList)