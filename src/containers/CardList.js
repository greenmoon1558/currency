import { connect } from 'react-redux'
import Card from '../components/Card'
import React from 'react'
import PropTypes from 'prop-types'
import { setPrices, toggleChange } from '../actions/index.js';

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount() {
        this.props.setPrices()
    }
    componentDidMount() {
        this.interval = setInterval(() => this.props.setPrices(), 100000);  
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    handleChanges(id){
        this.props.toggleChange(id)
    }
     render() {
         return (
            <div className="cards__container">
                {
                    this.props.cardList.map((card, index) => (
                        <Card key={index} {...card} handledPercentChanges={this.handleChanges.bind(this, card.id)} />
                    ))
                } 
            </div> 
        )
    }
}


CardList.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        currencyName: PropTypes.string.isRequired,
        cardColor: PropTypes.string.isRequired,
        cardBackgroundImage: PropTypes.string.isRequired, 
        imageLink: PropTypes.string.isRequired,
        totalPrice: PropTypes.number.isRequired,
        percentChange: PropTypes.bool.isRequired,
    })
  )
}

const mapStateToProps = ({cards}) => ({
    cardList: cards
})

export default connect(
  mapStateToProps,
  {setPrices, toggleChange}
)(CardList)