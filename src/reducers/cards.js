
let handledChanges = function(event) {
      console.log("handledPercentChanges", event.target)
      console.log("percentChange",this.id)
    }
const initialState = [{
    id: 0,
    currencyName: "Ethereum",
    cardColor: "green",
    cardBackgroundImage: require("../images/card_green_background.png"), 
    imageLink: require("../images/ethereum.png"),
    percentChange: false,
    totalPrice: 100,
    handledPercentChanges: handledChanges
  }, {
    id: 1,
    currencyName: "Litecoin",
    cardColor: "grey",
    cardBackgroundImage: require("../images/card_gray_background.png"), 
    imageLink: require("../images/litcoin.png"),
    percentChange: false,
    totalPrice: 100,
    handledPercentChanges: handledChanges
  }, {
    id: 2,
    currencyName: "Bitcoin",
    cardColor: "brown",
    cardBackgroundImage: require("../images/card_brown_background.png"), 
    imageLink: require("../images/bitcoin.png"),
    percentChange: false,
    totalPrice: 100,
    handledPercentChanges: handledChanges
  }];

const cards = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CHANGE':
      return [
        ...state.slice(0, action.id),
        Object.assign({}, state[action.id], {percentChange: !state[action.id].percentChange}),
        ...state.slice(action.id + 1)
    ];
    case 'SET_CARDS':
      return state;
    case 'SET_PRICES':
      let newState = state.map((item)=>{
        return Object.assign({}, 
          item, 
          { totalPrice: Math.round(action.playload.volume * 100) / 100 });
      })
      return newState;
    default:
      return state;
  }
}

export default cards

